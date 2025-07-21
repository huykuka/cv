import React from "react";
import profilePic from "../assets/avt/huy.JPG";

const ProfilePic: React.FC = () => (
  <div className="profile-pic-container flex flex-col items-center justify-center">
    <img
      src={profilePic}
      alt="Huy Thai Quang"
      title="Huy Thai Quang"
      className="w-24 h-24 md:w-30 md:h-30 rounded-full object-cover border-4 border-blue-600 mb-4"
    />
  </div>
);

export default ProfilePic;
