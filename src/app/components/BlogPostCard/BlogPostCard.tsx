"use client";

import { useRouter } from "next/navigation";

interface props {
  id: string;
  title: string;
  description: string;
  data: string;
}

const BlogPostCard = ({ id, title, description, data }: props) => {
  const router = useRouter();
  const handleCLick = () => {
    router.push(`http://localhost:3000/blog/${id}`);
    console.log(`clicked card with ID: ${id}`);
  };
  return (
    <div
      onClick={handleCLick}
      className="flex flex-col w-[1200px] h-fit border-2 border-green-300 hover:bg-opacity-30  hover:cursor-pointer rounded-md b-10 m-5 opacity-95 items-center bg-gray-800"
    >
      <h1 className=" text-3xl font-medium pt-2 hover:text-green-400">
        {title}
      </h1>
      <h1 className=" p-5 b-5 hover:">{description}</h1>
      <h1 className="hover:text-blue-400 font-bold">21st June 2023</h1>
    </div>
  );
};

export default BlogPostCard;
