import React from "react";
import ProfilePic from "./ProfilePic";
import ContactLinks from "./ContactLinks";

const Sidebar: React.FC = () => (
  <aside className="flex flex-row md:flex-col w-full md:w-100 bg-gray-50 border-b md:border-r border-gray-200 shadow-md md:shadow-lg p-4 md:p-8 items-center text-center md:sticky md:top-0 md:h-screen z-20">
    <div className="sidebar-content w-full flex flex-col items-center">
      <ProfilePic />
      <h1 className="text-3xl my-1 md:my-2 text-gray-900">HUY THAI QUANG</h1>
      <p className="text-base text-gray-600 mb-3 md:mb-6 font-medium">
        Senior Software Engineer
      </p>
      <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-2 md:mt-4 mb-3">
        An automation engineer that turns <br />
        to a software engineer <br />
        🤖 ===&gt; 👨🏻‍💻
      </p>
      <ContactLinks />
    </div>
  </aside>
);

export default Sidebar;
