import Sidebar from "./Sidebar"; // Importing the Sidebar component
import "./settings.css"; // Importing the CSS file for styling
import React from "react"; // Importing React library

function Settings() { // Defining the Settings component
  return ( // Returning JSX elements
    <div className="settings"> {/* Container for settings */}
      <div className="settingsWrapper"> {/* Wrapper for settings content */}
        <div className="settingsTitle"> {/* Title section */}
          <span className="settingsUpdateTitle">Update Your Account</span> {/* Update account title */}
          <span className="settingsDeleteTitle">Delete Account</span> {/* Delete account title */}
        </div>
        <form className="settingsForm"> {/* Form for updating account */}
          <label>Profile Picture</label> {/* Label for profile picture */}
          <div className="settingsPP"> {/* Container for profile picture */}
            <img
              src="https://media.istockphoto.com/id/1381637603/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=w64j3fW8C96CfYo3kbi386rs_sHH_6BGe8lAAAFS-y4="
              alt=""
            /> {/* Profile picture */}
            <label htmlFor="fileInput"> {/* Label for file input */}
              <i className="settingsPPIcon fa-regular fa-user"></i> {/* Icon for profile picture */}
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} /> {/* File input for selecting profile picture */}
          </div>
          <label>Username</label> {/* Label for username */}
          <input type="text" placeholder="John Doe" /> {/* Input field for username */}
          <label>Email</label> {/* Label for email */}
          <input type="text" placeholder="JohnDoe@gmail.com" /> {/* Input field for email */}
          <label>Password</label> {/* Label for password */}
          <input type="text"  /> {/* Input field for password */}
          <buttons className="settingsSubmit"></buttons> {/* Submit button */}
        </form>
      </div>
      <Sidebar /> {/* Rendering the Sidebar component */}
    </div>
  );
}
export default Settings; // Exporting the Settings component
