import Sidebar from "./Sidebar";
import SinglePost from "./SinglePost";
import "./single.css"
import React from "react";

function Single() {
  return (
    <div className="single">
        <SinglePost/>
           <Sidebar/>
        </div>
  )
}
export default Single;