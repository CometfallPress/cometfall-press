import Quill from "quill";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { api } from "../contexts/CSRF.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useAppContext} from "../contexts/AppContext.jsx";
import {useCallback, useEffect, useRef, useState} from "react";
import QuillImageDropAndPaste from 'quill-image-drop-and-paste';
import EditorCommandsMenu from "../elements/editorCommandsMenu.jsx";
import BlotFormatter, {createResponsiveVideoBlotClass} from '@enzedonline/quill-blot-formatter2';
import { CloudArrowUpIcon, EnvelopeIcon, ExclamationCircleIcon, DocumentArrowUpIcon,  XCircleIcon, PrinterIcon } from "@heroicons/react/24/outline";

const FontStyle = Quill.import("attributors/class/font");
const VideoResponsive = createResponsiveVideoBlotClass(Quill);
FontStyle.whitelist = ["arial", "arial-black", "arial-narrow", "comic-sans-ms", "garamond", "georgia", "monospace", "sans-serif", "serif", "tahoma", "trebuchet-ms", "verdana",];
Quill.register(FontStyle, true)
Quill.register({ 'formats/video': VideoResponsive }, true);
Quill.register('modules/imageDropAndPaste', QuillImageDropAndPaste);
Quill.register("modules/blotFormatter2", BlotFormatter)

function NewsletterEditor() {
	const [value, setValue] = useState({delta: null, html: ""});
	const [title, setTitle] = useState("CometfallPress Newsletter Update");
	const prevVal = useRef(JSON.stringify({delta: "", html: ""}));
	const quillRef = useRef(null);
	const [error, setError] = useState(false);
	const { documentId } = useParams();
	const [ docId, setDocumentId ] = useState(documentId);
	const [ doc, setDoc ] = useState(null);
	const { toastState, setModal } = useAppContext();
	const navigate = useNavigate();

	const juiceHtml = (html) => {
		return html;
	}

	const uploadImage = useCallback(async (file) => {
		if (!file) return;

		const formData = new FormData();
		formData.append("image", file);

		const { res, data } = await api("/newsletter/upload", {
			method: "POST",
			body: formData,
		});

		if (res.status === 200) {
			const editor = quillRef.current?.getEditor();
			if (!editor) return;

			const range = editor.getSelection(true);
			const index = range ? range.index : editor.getLength();

			editor.insertEmbed(index, "image", data.image_url, "user");
		}
		else {
			toastState.addToast(
				"An error occured while adding your image to the database, please try again later!",
				"error"
			)
		}
	}, []);

	const toolbarImageHandler = useCallback(() => {
		const input = document.createElement("input");
		input.type = "file";
		input.accept = "image/*";

		input.onchange = async () => {
			const file = input.files?.[0];
			if (!file) return;
			await uploadImage(file);
		};

		input.click();
	}, [uploadImage]);

	const imageDropHandler = useCallback(async (imageDataUrl, type, imageData) => {
		if (!imageData || !type || !imageDataUrl) return;
		const file = imageData.toFile();
		await uploadImage(file);
	}, [uploadImage]);

	const modules = {
		toolbar: {
			container: [
				[{ font: FontStyle.whitelist }],
				[{ size: ["small", false, "large", "huge"] }],
				["bold", "italic", "underline", "strike"],
				[{ color: [] }, { background: [] }],
				[{ script: "sub" }, { script: "super" }],
				[{ header: [false, 4, 3, 2, 1] }],
				[{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
				[{ indent: "-1" }, { indent: "+1" }],
				[{ align: [] }],
				["blockquote", "code-block"],
				["link", "image", "video"],
				["clean"],
			],
			handlers: {
				image: toolbarImageHandler,
			},
		},
		blotFormatter2: {
			align: {
				allowAligning: true,
				alignments: ['left', 'center', 'right']
			},
			resize: {
				allowResizing: true, // default true
				allowResizeModeChange: true,
				useRelativeSize: false,
				imageOversizeProtection: false,
				minimumWidthPx: 25,
			},
			delete: {
				allowKeyboardDelete: true, // default true
			},
			image: {
				registerImageTitleBlot: true,
				allowAltTitleEdit: true, // default true
				allowCompressor: false,
				linkOptions: {
					allowLinkEdit: true //default true
				},
				registerArrowRightFix: true
			},
			video: {
				selector: 'iframe.ql-video',
				registerCustomVideoBlot: true,
				registerBackspaceFix: true,
				defaultAspectRatio: '16/9 auto',
			},
		},
		imageDropAndPaste: {
			handler: imageDropHandler,
		},
	};

	const checkDocIdAndSave = useCallback(async (serializedValue) => {
		const doc = docId?docId:documentId;
		if (!doc) {
			setModal(
				{
					title: "Warning: Blank Document!",
					icon: <ExclamationCircleIcon className="w-10 h-10 text-amber-400 my-auto mx-1 shrink-0"/>,
					message: "You're currently editing a blank document that hasn't yet been saved on the server. Do you want to create a new document and save?",
					close: () => {setModal(null)},
					buttons: [
						{
							text: "Save as New Document",
							icon: <DocumentArrowUpIcon className="w-7 h-7 my-auto mx-1 shrink-0" />,
							onClick: async () => {
								try {
									await api("/newsletter/new", {method: "POST", body: JSON.stringify({})}).then(
										async (dict) => {
											if (dict.res.status === 200) {
												setDocumentId(dict.data.id)
											}
											else {
												toastState.addToast(`An error occurred while creating a new newsletter, please try again later!: ${dict.data.status}`, "error");
											}
											return dict
										}
									).then(async (dict) => {
										await handleSave(serializedValue, dict.data.id)
										return dict
									}).then((dict) => {
										navigate(`/admin/newsletter/editor/${dict.data.id}`)
									})
									setModal(null)
								}
								catch (e) {
									console.error(e);
									toastState.addToast(`An error occurred while creating a new newsletter, please try again later!`, "error");
								}
							}
						},
						{
							text: "Continue without Saving",
							icon: < XCircleIcon className="w-7 h-7 my-auto mx-1 shrink-0"/>,
							onClick: () => { setModal(null) }
						},
					]
				}
			)
		}
		else {
			return await handleSave(serializedValue, doc)
		}
	}, [docId, documentId])

	const handleSave = async (serializedValue, docId) => {
		const doc = docId?docId:documentId;
		const { res, data } = await api(`/newsletter/save/${doc}`, {
			method: "POST",
			body: JSON.stringify({
				nid: doc,
				delta: serializedValue,
				title: title,
			}),
		});
		if (res.status===200) {
			toastState.addToast("Your changes have been saved!", "success");
			prevVal.current = serializedValue;
		}
		else{
			toastState.addToast(`An error occured while saving your changes!: ${data.status}`, "error");
		}
		return { res, data }
	}

	const handlePublish = async (serializedValue) => {
		await handleSave(serializedValue)
		prevVal.current = serializedValue;
		setModal({
			title: "Publish Document",
			icon: <ExclamationCircleIcon className="w-10 h-10 text-blue-900 my-auto mx-1 shrink-0"/>,
			message: "Publishing the document will send it out to all the newsletter subscribers. Are you sure you want to contine?",
			close: () => {setModal(null)},
			buttons: [
				{
					text: "Save as Draft Instead",
					icon: <DocumentArrowUpIcon className="w-7 h-7 my-auto mx-1 shrink-0" />,
					onClick: async () => {
						try {
							await publish("draft")
							setModal(null)
						}
						catch (e) {
							console.error(e);
							toastState.addToast(`An error occurred while publishing the newsletter!`, "error");
							setModal(null)
						}
					}
				},
				{
					text: "Publish to All Subscribers",
					icon: <PrinterIcon className="w-7 h-7 my-auto mx-1 shrink-0" />,
					onClick: async () => {
						try {
							await publish("publish")
							setModal(null)
						}
						catch (e) {
							console.error(e);
							toastState.addToast(`An error occurred while publishing the newsletter!`, "error");
							setModal(null)
						}
					}
				},
			]}
		)
	}

	const publish = async (type) => {
		const {res, data} = await api(`/newsletter/publish/${documentId}?type=${type}`, {method: "POST", body: JSON.stringify({ "nid": documentId })})
		if (res.status===200) {
			toastState.addToast("The newsletter has been published!", "success");
		}
		return { res, data }
	}

	useEffect(() => {
		const doc = docId?docId:documentId
		if (error || !doc) return;

		const timer = setTimeout(async () => {
			const serialized = JSON.stringify(value);

			if (serialized === prevVal.current) return;

			await checkDocIdAndSave(serialized);
		}, 30000);

		return () => clearTimeout(timer);
	}, [value, title, error, docId, documentId, checkDocIdAndSave, toastState]);

	useEffect(() => {
		const handleLoad = async () => {
			const doc = docId?docId:documentId
			if(doc !== undefined) {
				const { res, data } = await api(`/newsletter/load/${doc.toString()}`, {
					method: "POST",
					body: JSON.stringify({
						nid: doc,
					}),
				});
				if (res.status===200) {
					const parsedDelta = JSON.parse(data.delta_content);
					setDoc(data)
					setValue(parsedDelta);
					setTitle(data.title)
				}
				else{
					setError(true)
					toastState.addToast(`An error occured while loading the saved document; auto-save has been turned off to avoid overwriting.`, "error");
				}
			}
		}

		try {
			handleLoad().then(r => r)
		}
		catch(err) {
			setError(true)
			console.error(err);
		}
	}, [docId, documentId]);

	return (
		<>
			<div className="relative w-full h-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-x-scroll">
				<div className="flex flex-row m-2 p-1">
					<p className="font-bold m-2">Title: </p>
					<input className="rounded-md outline-1 outline-slate-200 p-2 landscape:w-1/2 portrait:w-3/4" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
				</div>
				<ReactQuill
					theme="snow"
					ref={quillRef}
					value={value.delta}
					onChange={async (content, delta, source, editor) => {
						const fullDelta = editor.getContents();
						const html = juiceHtml(content)
						setValue({ delta: fullDelta, html: html });
					}}
					className="w-full h-full overflow-y-scroll overscroll-auto scroll-smooth!"
					modules={modules}
					placeholder={"Type / for custom variables and commands"}
				/>
				<EditorCommandsMenu quillRef={quillRef} />
				<div className="absolute right-0 bottom-0 z-50 w-auto flex flex-row m-3">
					<button
						className="w-fit bg-emerald-500 active:bg-emerald-700 text-white flex flex-row p-2 m-2 rounded-xl font-medium text-md place-items-center place-content-center text-center"
						onClick={ async () => {
								const editor = quillRef.current?.getEditor();
								if (!editor) return;
								const fullDelta = editor.getContents();
								const html = juiceHtml(editor.getSemanticHTML())
								const serialized = JSON.stringify({delta: fullDelta, html: html});
								prevVal.current = serialized;
								await checkDocIdAndSave(serialized);
							}
						}
					>
						<CloudArrowUpIcon className="h-6 w-6 mx-2 my-auto" />
						<p className="mr-2 my-auto">Save Changes</p>

					</button>
					{ doc? (
						doc.datetime_sent?(<></>):(
							<button className="w-fit bg-emerald-500 active:bg-emerald-700 text-white flex flex-row p-2 m-2 rounded-xl font-medium text-md place-items-center place-content-center text-center" onClick={async () => {
								const editor = quillRef.current?.getEditor();
								if (!editor) return;
								const fullDelta = editor.getContents();
								const html = juiceHtml(editor.getSemanticHTML())
								const serialized = JSON.stringify({delta: fullDelta, html: html});
								prevVal.current = serialized;
								await handlePublish(serialized);}
							}>
								<EnvelopeIcon className="h-6 w-6 mx-2 my-auto" />
								<p className="mr-2 my-auto">Publish</p>
							</button>
						)): (<></>)}
				</div>
			</div>
		</>
	)
}

export default NewsletterEditor;