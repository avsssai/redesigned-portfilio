import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const MyEditor = ({ addBlog }) => {
	const [editorContent, setEditorContent] = useState("");
	useEffect(() => {
		const html = "<p>Hey this <strong>editor</strong> rocks 😀</p>";
		const contentBlock = htmlToDraft(html);
		if (contentBlock) {
			const contentState = ContentState.createFromBlockArray(
				contentBlock.contentBlocks
			);
			const editorState = EditorState.createWithContent(contentState);
			setEditorContent(editorState);
		}
	}, []);

	const onEditorStateChange = (editorState) => {
		setEditorContent(editorState);
	};

	const logContent = () => {
		const contentInRaw = convertToRaw(editorContent.getCurrentContent());
		console.log(contentInRaw);
		addBlog(contentInRaw);
	};
	return (
		<div>
			<Editor
				editorState={editorContent}
				wrapperClassName='demo-wrapper'
				editorClassName='demo-editor'
				onEditorStateChange={onEditorStateChange}
			/>
			<textarea
				disabled
				value={
					editorContent
						? draftToHtml(
								convertToRaw(editorContent.getCurrentContent())
						  )
						: "loading.."
				}
			/>
			<button onClick={logContent}>Submit</button>
		</div>
	);
};
export default MyEditor;
// import React, { useState, useEffect } from "react";
// import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import draftToHtml from "draftjs-to-html";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import "./editor.css";

// const initContent = {
// 	entityMap: {},
// 	blocks: [
// 		{
// 			key: "637gr",
// 			text: "Initialized from content state.",
// 			type: "unstyled",
// 			depth: 0,
// 			inlineStyleRanges: [],
// 			entityRanges: [],
// 			data: {},
// 		},
// 	],
// };

// const MyEditor = () => {
// 	const [editorState, setEditorState] = useState(initContent);
// 	useEffect(() => {
// 		setContent(convertFromRaw(initContent));
// 	}, []);
// 	const onContentStateChange = (contentState) => {
// 		setEditorState(contentState);
// 	};
// 	const sendBlogContent = () => {
// 		console.log(editorState);
// 	};

// 	return (
// 		<div>
// 			<Editor
// 				editorState={editorState}
// 				wrapperClassName='wrapper'
// 				editorClassName='editor'
// 				onContentStateChange={onContentStateChange}
// 			/>
// 			<textarea disabled value={JSON.stringify(content, null, 4)} />
// 			<button onClick={sendBlogContent}>Submit</button>
// 		</div>
// 	);
// };

// export default MyEditor;
