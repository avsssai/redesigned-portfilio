import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "./editor.css";
import useStyles from "./styles.js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button, Container, Divider, TextField, Typography } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, updateBlog } from "../../actions/blogs";
import { useHistory } from "react-router-dom";
import { GOOGLE_LOGIN, GOOGLE_LOGOUT } from "../../actionTypes";
import { useLocation } from "react-router-dom";

import decode from "jwt-decode";

const MyEditor = (props) => {
	const [editorContent, setEditorContent] = useState("");
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
	const location = useLocation();
	const currentUser = useSelector((state) => state.auth);

	useEffect(() => {
		const token = user?.token;
		if (token) {
			const decodedToken = decode(token);
			if (decodedToken.exp * 1000 < new Date().getTime()) logout();
		}
		setUser(JSON.parse(localStorage.getItem("profile")));
	}, [currentUser, location]);

	const logout = () => {
		dispatch({ type: GOOGLE_LOGOUT });
		history.push("/");
		setUser(null);
	};

	const [formData, setFormData] = useState({
		title: "",
		searchString: "",
		tags: "",
	});

	const history = useHistory();
	const classes = useStyles();

	const dispatch = useDispatch();

	useEffect(() => {
		if (location.state !== undefined) {
			const loadedBlog = location.state;
			const contentLoded = JSON.parse(loadedBlog?.content);
			const loadedHtml = draftToHtml(contentLoded);
			const loadedDraft = htmlToDraft(loadedHtml);
			const loadedContentState = ContentState.createFromBlockArray(loadedDraft.contentBlocks);
			const loadedEditorState = EditorState.createWithContent(loadedContentState);
			setFormData({
				title: loadedBlog.title,
				searchString: loadedBlog.searchString,
				tags: loadedBlog.tags,
			});
			return setEditorContent(loadedEditorState);
		}
		const html = "<p>Hey this <strong>editor</strong> rocks ????</p>";
		const contentBlock = htmlToDraft(html);
		if (contentBlock) {
			const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
			const editorState = EditorState.createWithContent(contentState);
			setEditorContent(editorState);
		}
	}, [location]);

	const onEditorStateChange = (editorState) => {
		setEditorContent(editorState);
	};

	const logContent = () => {
		const contentInRaw = convertToRaw(editorContent.getCurrentContent());
		return contentInRaw;
		// addBlog(contentInRaw);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const content = JSON.stringify(logContent());

		if (location.state !== undefined) {
			const updatedFormData = {
				...formData,
				tags: formData.tags,
				content,
			};

			dispatch(updateBlog(location.state._id, updatedFormData));
		} else {
			const fullFormData = {
				...formData,
				tags: formData.tags,
				content,
			};

			dispatch(addBlog(fullFormData));
		}
		history.push("/blog");
	};

	const googleSuccess = async (res) => {
		const token = res?.tokenId;
		const result = res?.profileObj;
		try {
			dispatch({ type: GOOGLE_LOGIN, payload: { token, result } });
		} catch (error) {}
	};

	const googleFailure = () => {
		console.log("Google login failed.");
	};

	return (
		<div className='main-container'>
			<Container maxWidth='md'>
				{!user ? (
					<GoogleLogin
						clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
						cookiePolicy={"single_host_origin"}
						onSuccess={googleSuccess}
						onFailure={googleFailure}
						render={(renderProps) => (
							<Button
								className={classes.googleButton}
								color='primary'
								fullWidth
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
								variant='contained'>
								Google Sign In
							</Button>
						)}
					/>
				) : (
					<form onSubmit={handleSubmit} className={classes.form}>
						<Typography variant='h4' color='secondary'>
							{location.state === undefined ? "Add a New Blog" : `Edit the Blog`}
						</Typography>

						<Divider orientation='horizontal' className={classes.divider} />
						<TextField
							variant='outlined'
							label='Title'
							placeholder='An interesting title'
							name='title'
							value={formData.title}
							fullWidth
							className={classes.input}
							onChange={(e) =>
								setFormData({
									...formData,
									title: e.target.value,
								})
							}
						/>
						<TextField
							variant='outlined'
							label='Search String'
							placeholder='Search string'
							name='searchString'
							value={formData.searchString}
							fullWidth
							className={classes.input}
							onChange={(e) =>
								setFormData({
									...formData,
									searchString: e.target.value,
								})
							}
						/>
						<TextField
							variant='outlined'
							label='Tags'
							placeholder='Tags'
							name='tags'
							value={formData.tags}
							fullWidth
							className={classes.input}
							onChange={(e) =>
								setFormData({
									...formData,
									tags: e.target.value,
								})
							}
						/>

						<Editor
							editorState={editorContent}
							wrapperClassName='demo-wrapper'
							editorClassName={classes.editor}
							onEditorStateChange={onEditorStateChange}
						/>
						<textarea
							disabled
							value={
								editorContent
									? draftToHtml(convertToRaw(editorContent.getCurrentContent()))
									: "loading.."
							}
						/>
						<div>
							<Button onClick={logContent} variant='contained' type='submit' color='secondary'>
								{location.state === undefined ? "Submit" : `Edit`}
							</Button>
						</div>
					</form>
				)}
			</Container>
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
