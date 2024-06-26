import React, { useState, useEffect } from "react";
import "./posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/posts") // Assuming your json-server is running on port 3000
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data); // Inspect the API response
        if (data && Array.isArray(data) && data.length > 0) {
          setPosts(data);
        } else {
          setError("No posts available"); // Handle empty posts array
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display an error message if there's an issue fetching data
  }

  return (
    <div className="posts">
      {posts.map((post, index) => (
        <div key={index} className="post">
          <img className="postImg" src={post.urlToImage} alt={post.title} />
          <div className="postInfo">
            <div className="postCats">
              <span className="postCat">{post.category}</span>
            </div>
            <a href={post.url} className="postTitle">
              {post.title}
            </a>
            <div className="postAuthor">
              <span>Author: {post.author}</span>
            </div>
            <hr />
            <span className="postDate">{post.publishedAt}</span>
            <p className="postDesc">{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
