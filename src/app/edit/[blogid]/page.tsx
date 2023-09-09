"use client";

interface blogProps {
  params: { blogid: string };
}

import React, { useEffect, useState } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import SubmitBlogForm from "@/app/components/SubmitBlogPost/SubmitBlogForm";

function App({ params }: blogProps) {
  const [markdown, setMarkdown] = useState("");
  const [isFormVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const fetchBlogData = async () => {
      const res = await fetch(process.env.URL + `/api/blogs/${params.blogid}`, {
        cache: "no-store",
      });

      let result = await res.json();
      setMarkdown(result.blog.data); // Set the state here after fetching the data
    };

    fetchBlogData(); // Calling the function within useEffect
  }, [params.blogid]);

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  return (
    <div className="">
      {isFormVisible && (
        <div className="absolute inset-0 flex justify-center items-center z-10 bg-black bg-opacity-50">
          <SubmitBlogForm
            onClose={handleCloseForm}
            data={markdown}
            type="update"
            blogid={params.blogid}
          />
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
          <span>Update Blog Post</span>
        </button>
      </div>
    </div>
  );
}

export default App;
