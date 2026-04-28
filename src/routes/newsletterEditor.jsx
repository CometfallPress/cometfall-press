import {useEffect, useRef, useState} from "react";
import Quill from "quill";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { api } from "../contexts/CSRF.jsx";

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
		const editor = quillRef.current.getEditor();
		const delta = editor.getContents();

		await api("/newsletter/save", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				html: value,
				delta: delta,
			}),
		});
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (prevVal !== value) { handleSave(); setPrevVal(value); }
		}, 10000);

		return () => clearInterval(interval);
	}, [prevVal, value]);

	return (
		<>
			<div className=" flex w-full h-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
				<ReactQuill
					ref={quillRef}
					theme="snow"
					value={value}
					onChange={setValue}
					className="w-full h-full"
					modules={modules}
				/>
			</div>
		</>
	)
}

export default NewsletterEditor;