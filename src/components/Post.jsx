import React, { useState, useEffect } from "react";
import "./post.css";

function Post() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data); // Inspect the API response
        if (data && data.posts && Array.isArray(data.posts) && data.posts.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.posts.length);
          const randomPost = data.posts[randomIndex];
          setPost(randomPost);
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

  if (!post) {
    return <div>No post available</div>; // Display a message if post data is not available
  }

  const { author, category, title, description, url, urlToImage, publishedAt } = post;

  return (
    <div className="post">
      <img className="postImg" src={urlToImage} alt={title} />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">{category}</span>
        </div>
        <a href={url} className="postTitle">
          {title}
        </a>
        <div className="postAuthor">
          <span>Author: {author}</span>
        </div>
        <hr />
        <span className="postDate">{publishedAt}</span>
        <p className="postDesc">{description}</p>
      </div>
    </div>
  );
}

export default Post;