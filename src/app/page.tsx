import connectMongoDB from "@/lib/mongodb";
import Blog from "@/models/blog";
import BlogPostCard from "@/app/components/BlogPostCard/BlogPostCard";
import Link from "next/link";

interface Blog {
    _id: string;
    title: string;
    description: string;
    data: string;
    __v: number;
}

// export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function Home() {
    await connectMongoDB();
    const blogs = await Blog.find();

    return (
        <main className="flex  flex-col items-center justify-between p-4 bg-[#0d1117]">
            <h1 className=" font-extrabold text-4xl">WELCOME TO MY BLOG</h1>
            <Link
                className=" m-10 bg-green-400 hover:bg-green-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                href="/createblog"
            >
                Create New Blog Post
            </Link>

            {blogs.map((blog: Blog) => (
                <BlogPostCard
                    key={blog._id}
                    id={blog._id}
                    title={blog.title}
                    description={blog.description}
                    data={blog.data}
                />
            ))}
        </main>
    );
}
