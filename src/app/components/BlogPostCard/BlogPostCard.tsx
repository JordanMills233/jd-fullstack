"use client";

import { useRouter } from "next/navigation";
import { EditIcon } from "@/app/components/EditIcon.tsx/EditIcon";
import { DeleteIcon } from "@/app/components/DeleteIcon/DeleteIcon";

interface props {
    id: string;
    title: string;
    description: string;
    data: string;
}

const BlogPostCard = ({ id, title, description, data }: props) => {
    const router = useRouter();
    const handleCLick = () => {
        router.push(`/blog/${id}`);
        console.log(`clicked card with ID: ${id}`);
    };
    const handleEdit = () => {
        router.push(`/edit/${id}`);
        console.log("edit clicked");
    };

    const handleDelete = async () => {
        const res = await fetch(`/api/blogs/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (res.ok) {
            router.refresh();
        } else {
            throw new Error("Failed to delete blog post");
        }
        console.log("delete clicked");
    };
    return (
        <div className="flex flex-col w-[1200px] h-fit border-2 border-slate-300 hover:bg-opacity-30  hover:cursor-pointer rounded-md b-10 m-5 opacity-95 items-center bg-gray-800">
            <div className="flex justify-center w-full ">
                <h1
                    onClick={handleCLick}
                    className=" text-3xl font-medium pt-2 hover:text-green-400 ml-auto mr-auto pl-[72px]"
                >
                    {title}
                </h1>
                <EditIcon onClick={handleEdit} />
                <DeleteIcon onClick={handleDelete} />
            </div>
            <h1 className=" p-5 b-5 hover:">{description}</h1>
            <h1 className="hover:text-blue-400 font-bold">21st June 2023</h1>
        </div>
    );
};

export default BlogPostCard;
