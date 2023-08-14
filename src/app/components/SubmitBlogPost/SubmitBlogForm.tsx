import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

interface formProps {
  onClose: any;
  data: string;
  type: string;
  blogid?: string;
}

function SubmitBlogForm({ onClose, data, type, blogid }: formProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const notify = (arg: string) =>
    toast.error(arg, {
      style: {
        background: "#cbd5e1",
      },
    });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!title) {
      notify("Title cannot be empty");
      return;
    } else if (!description) {
      notify("Description cannot be empty");
      return;
    } else if (!data) {
      notify("Blog Post cannot be empty");
      return;
    }

    if (type === "submit") {
      const res = await fetch("http://localhost:3000/api/blogs", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description, data }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create blog post");
      }
    } else if (type === "update") {
      const updatedBlog = {
        newTitle: title,
        newDescription: description,
        newData: data,
      };
      const res = await fetch(`http://localhost:3000/api/blogs/${blogid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBlog),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create blog post");
      }
    }
  };

  return (
    <div className=" bg-slate-300 shadow-md rounded-md w-[400px] h-[300px] flex  flex-col items-center justify-evenly text-slate-950">
      <Toaster />
      <input
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        className="shadow appearance-none border rounded-md py-2 px-3 mt-8 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-3/4"
        id="title"
        type="text"
        placeholder="Title"
      ></input>
      <textarea
        onChange={(event) => {
          setDescription(event.target.value);
        }}
        className="shadow appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-3/4 h-[100px]"
        id="description"
        placeholder="Description"
      ></textarea>
      <div>
        <button
          onClick={handleSubmit}
          className=" m-10 bg-green-400 hover:bg-green-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          Submit
        </button>
        <button
          onClick={onClose}
          className=" m-10 bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SubmitBlogForm;
