import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import Write from "./components/Write";
import FooterContainer from "./components/FooterContainer";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";


function App() {
  const [user, setUser] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts data
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.posts || [])); // Ensure posts array is not undefined
  }, []);

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} /> {/* Route for Home component */}
        <Route path="/write" element={<Write user={user} />} /> {/* Route for Write component */}
        <Route path="/about" element={<AboutUs user={user} />} /> {/* Route for About component */}
        <Route path="/contact" element={<ContactUs user={user} />} /> {/* Route for Contact component */}
      </Routes>
      <FooterContainer />
    </Router>
  );
}

export default App;