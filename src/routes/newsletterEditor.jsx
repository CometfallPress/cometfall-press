import {useEffect, useRef, useState} from "react";
import Quill from "quill";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { api } from "../contexts/CSRF.jsx";
import { CloudArrowUpIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import {useAppContext} from "../contexts/AppContext.jsx";

const FontAttributor = Quill.import("attributors/class/font");

FontAttributor.whitelist = [
	"inter",
	"roboto",
	"lora",
	"poppins",
	"sans-serif",
	"serif",
	"monospace",
];

Quill.register(FontAttributor, true);



function NewsletterEditor() {
	const [value, setValue] = useState("");
	const [prevVal, setPrevVal] = useState("");
	const quillRef = useRef(null);
	const [status, setStatus] = useState("");
	const { documentId } = useParams();
	const { toastState } = useAppContext();

	const modules = {
		toolbar: [
			[{ font: FontAttributor.whitelist }],
			[{ size: ["small", false, "large", "huge"] }],
			["bold", "italic", "underline", "strike"],
			[{ color: [] }, { background: [] }],
			[{ script: "sub" }, { script: "super" }],
			[{ header: 1 }, { header: 2 }, { header: 3 }, { header: 4 }, { header: 5 }, { header: 6 }, false],
			[{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
			[{ indent: "-1" }, { indent: "+1" }],
			[{ align: [] }],
			["blockquote", "code-block"],
			["link", "image", "video"],
			["clean"]
		]
	};

	const handleSave = async () => {
		if(documentId !== undefined) {
			const editor = quillRef.current.getEditor();
			const delta = editor.getContents();

			const { res, data } = await api(`/newsletter/save/${documentId}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					nid: documentId,
					html: value,
					delta: delta,
				}),
			});
			setStatus(data.status)
			if (res.status===200) {
				toastState.addToast("Your changes have been saved!", "success");
			}
			else{
				toastState.addToast(`An error occured while saving your changes!: ${status}`, "error");
			}

		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (prevVal !== value) { handleSave(); setPrevVal(value); }
		}, 10000);

		return () => clearInterval(interval);
	}, [prevVal, value]);

	return (
		<>
			<div className="relative w-full h-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-x-scroll">
				<ReactQuill
					ref={quillRef}
					theme="snow"
					value={value}
					onChange={setValue}
					className="w-full h-full overflow-y-hidden overscroll-contain scroll-smooth!"
					modules={modules}
				/>
				<div className="absolute right-0 bottom-0 z-50 w-auto flex flex-row m-3">
					<button className="w-fit bg-emerald-500 active:bg-emerald-700 text-white flex flex-row p-2 m-2 rounded-xl font-medium text-md place-items-center place-content-center text-center" onClick={async () => {await handleSave()}}>
						<CloudArrowUpIcon class="h-6 w-6 mx-2 my-auto" />
						<p className="mr-2 my-auto">Save Changes</p>
					</button>
					<button className="w-fit bg-emerald-500 active:bg-emerald-700 text-white flex flex-row p-2 m-2 rounded-xl font-medium text-md place-items-center place-content-center text-center" onClick={async () => {await toastState.addToast("Done!")}}>
						<EnvelopeIcon class="h-6 w-6 mx-2 my-auto" />
						<p className="mr-2 my-auto">Publish</p>
					</button>
				</div>
			</div>
		</>
	)
}

export default NewsletterEditor;