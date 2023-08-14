"use client";

import React, { useState } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import SubmitBlogForm from "@/app/components/SubmitBlogPost/SubmitBlogForm";

function App() {
  const [markdown, setMarkdown] = useState("");
  const [isFormVisible, setFormVisible] = useState(false);

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  return (
    <div className="">
      {isFormVisible && (
        <div className="absolute inset-0 flex justify-center items-center z-10 bg-black bg-opacity-50">
          <SubmitBlogForm onClose={handleCloseForm} data={markdown} />
        </div>
      )}
      <MarkdownEditor
        height="1000px"
        maxHeight="1000px"
        visible={true}
        value={markdown}
        onChange={(value, viewUpdate) => setMarkdown(value)}
      />
      <div className="flex flex-col items-center justify-between p-4">
        <button
          onClick={() => {
            console.log(markdown);
            setFormVisible(!isFormVisible);
          }}
          className=" m-10 bg-green-400 hover:bg-green-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <span>Submit Blog Post</span>
        </button>
      </div>
    </div>
  );
}

export default App;
