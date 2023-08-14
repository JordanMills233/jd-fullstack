/* eslint-disable @next/next/no-async-client-component */

"use client";

import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

async function App(markdown: string) {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/blogs", {
      cache: "no-store",
    });
  };
  let data = await res.json();

  console.log(data.blogs[0].data);
  return (
    <div className=" pl-[30%] pr-[30%] bg-[#0d1117] ">
      <MarkdownPreview source={data.blogs[3].data} />
    </div>
  );
}

export default App;
