import Header from "./Header";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import "./home.css";
import React from "react";

function Home({ posts }) {
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} /> {/* Pass posts data to Posts component */}
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
