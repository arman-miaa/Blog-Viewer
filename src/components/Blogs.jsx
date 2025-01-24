'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaIdBadge, FaUser } from "react-icons/fa";
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
      <div className="container mx-auto ">
        <div className="mt-12 lg:mt-16 text-center">
          <h2 className="text-xl lg:text-2xl font-bold">
            BlogNest – Discover and Explore Blogs Effortlessly
          </h2>
          <p className="w-full md:w-1/2 text-center mx-auto">
            BlogNest makes browsing and reading blogs simple, secure, and
            seamless. Explore detailed posts with ease!
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 my-20">
          {blogs.length > 0 &&
            blogs.map((blog) => (
              <div
                key={blog.id}
                className="card bg-base-100 flex flex-col shadow-xl p-6 "
              >
                <h2 className="card-title text-2xl font-bold flex ">
                  {blog.title}
                </h2>
                <figure className="mt-2">
                  <p>{blog.body}</p>
                </figure>
                <div className="card-body mt-2 flex mb-6">
                  <p className="flex-1 flex items-center gap-2">
                    {" "}
                    <FaIdBadge /> Blog Id: {blog.id}
                  </p>
                  <p className="flex-1 flex items-center gap-2">
                    {" "}
                    <FaUser /> blog userID: {blog.userId}
                  </p>
                </div>
                <div className="card-actions justify-end mt-auto">
                  <Link
                    href={`/blog/${blog.id}`}
                    className="px-4 py-2 rounded-sm bg-gray-700 hover:bg-gray-500 text-white"
                  >
                    
                    🔍 Details
                  </Link>
                </div>
              </div>

              // <Link key={blog.id} href={`/blog/${blog.id}`}>
              //   {blog.title}
              // </Link>
            ))}
        </div>
      </div>
    );
};

export default Blogs;