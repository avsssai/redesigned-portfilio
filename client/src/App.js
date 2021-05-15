import React, { useState } from "react";
import MyEditor from "./Editor/Editor";
import draftToHtml from "draftjs-to-html";

const App = () => {
	const [blogs, setBlogs] = useState([]);
	const addBlog = (blog) => setBlogs([...blogs, blog]);
	return (
		<div>
			<h1>Shiva</h1>
			<MyEditor addBlog={addBlog} />
			{blogs.length === 0 ? (
				"Loading"
			) : (
				<div>
					{blogs.map((blog, i) => (
						<div
							key={i}
							dangerouslySetInnerHTML={{
								__html: draftToHtml(blog),
							}}></div>
					))}
				</div>
			)}
		</div>
	);
};

export default App;
