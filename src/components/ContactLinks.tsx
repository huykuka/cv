import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const ContactLinks: React.FC = () => (
  <div className="flex flex-col gap-4 w-full">
    <a
      href="tel:+84981216940"
      className="text-gray-600 flex items-center gap-3 p-1 md:p-2 rounded transition-colors duration-200 hover:bg-gray-200 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
      aria-label="Call phone number (+84) 0981216940"
    >
      <FontAwesomeIcon
        icon={faPhone}
        className="text-lg md:text-xl w-6 text-center mr-2 text-blue-600"
      />
      (+84) 0981216940
    </a>
    <a
      href="mailto:thaiquanghuy.c3a@gmail.com"
      className="text-gray-600 flex items-center gap-3 p-1 md:p-2 rounded transition-colors duration-200 hover:bg-gray-200 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
      aria-label="Send email to thaiquanghuy.c3a@gmail.com"
    >
      <FontAwesomeIcon
        icon={faEnvelope}
        className="text-lg md:text-xl w-6 text-center mr-2 text-blue-600"
      />
      thaiquanghuy.c3a@gmail.com
    </a>
    <a
      href="https://www.linkedin.com/in/thái-quang-huy-91920314b/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 flex items-center gap-3 p-1 md:p-2 rounded transition-colors duration-200 hover:bg-gray-200 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
      aria-label="Visit LinkedIn profile"
    >
      <FontAwesomeIcon
        icon={faLinkedin}
        className="text-lg md:text-xl w-6 text-center mr-2 text-blue-600"
      />
      LinkedIn
    </a>
    <a
      href="https://github.com/huykuka"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 flex items-center gap-3 p-1 md:p-2 rounded transition-colors duration-200 hover:bg-gray-200 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
      aria-label="Visit GitHub profile"
    >
      <FontAwesomeIcon
        icon={faGithub}
        className="text-lg md:text-xl w-6 text-center mr-2 text-blue-600"
      />
      GitHub
    </a>
  </div>
);

export default ContactLinks;
