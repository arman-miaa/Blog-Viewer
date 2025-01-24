'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    console.log(blogs);

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-20">
        {blogs.length > 0 &&
          blogs.map((blog) => (
            <div key={blog.id} className="card bg-base-100  shadow-xl ">
              <figure>
                <p>{blog.body}</p>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Title: {blog.title}</h2>
                <p>Blog Id: {blog.id}</p>
                <p>blog userID: {blog.userId}</p>
                <div className="card-actions justify-end">
                  <Link
                    href={`/blog/${blog.id}`}
                    className="px-4 py-1 bg-gray-600 text-white"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>

            // <Link key={blog.id} href={`/blog/${blog.id}`}>
            //   {blog.title}
            // </Link>
          ))}
      </div>
    );
};

export default Blogs;