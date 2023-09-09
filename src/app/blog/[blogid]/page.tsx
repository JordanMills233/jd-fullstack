/* eslint-disable @next/next/no-async-client-component */

"use client";

interface blogProps {
  params: { blogid: string };
}

import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

async function App({ params }: blogProps) {
  const res = await fetch(`/api/blogs/${params.blogid}`, {
    cache: "no-store",
  });

  let data = await res.json();

  return (
    <div className=" pl-[30%] pr-[30%] bg-[#0d1117] ">
      <MarkdownPreview source={data.blog.data} />
    </div>
  );
}

export default App;
