'use client';
import { use, useEffect, useState } from "react";

const Details = ({ params }) => {
  const unwrappedParams = use(params);

  const [blogDetails, setBlogDetails] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${unwrappedParams.id}`)
      .then((res) => res.json())
      .then((data) => setBlogDetails(data));
  }, [unwrappedParams.id]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {blogDetails && (
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <p>{blogDetails.body}</p>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Title: {blogDetails.title}</h2>
            <p>Id: {blogDetails.id}</p>
            <p>userId: {blogDetails.userId}</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
