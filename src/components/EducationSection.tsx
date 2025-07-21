import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import bkLogo from "../assets/education/bk.png";
import awsLogo from "../assets/skills/aws.png";

const EducationSection: React.FC = () => (
  <section
    id="education"
    className=" bg-white rounded-lg p-6 md:p-10 shadow-md border border-gray-200"
  >
    <h2 className="text-2xl text-blue-600 mb-8 border-b-2 border-gray-200 pb-2 flex items-center gap-4">
      <FontAwesomeIcon
        icon={faGraduationCap}
        className="text-xl md:text-2xl text-blue-600"
      />
      <span>Education &amp; Certifications</span>
    </h2>
    <div className="flex flex-col gap-4 mt-6">
      <div className="bg-white rounded-lg p-5 shadow-md border border-gray-200">
        <div className="flex items-start space-x-4">
          <img
            src={bkLogo}
            alt="Bach Khoa University Logo"
            className="w-10 h-10 object-contain"
          />
          <div className="edu-text md:flex-1">
            <span className="block font-semibold text-gray-900">
              Bachelor of Engineering (Mechatronics Engineering)
            </span>
            <span className="block text-sm text-gray-600">
              Bach Khoa University
            </span>
          </div>
          <div className="edu-meta md:text-right md:ml-auto">
            <span className="block text-sm text-gray-500 mt-1 md:mt-0">
              2015 - 2019
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-5 shadow-md border border-gray-200">
        <div className="flex items-start space-x-4">
          <img
            src={awsLogo}
            alt="AWS Logo"
            className="w-10 h-10 object-contain"
          />
          <div className="edu-text md:flex-1">
            <span className="block font-semibold text-gray-900">
              AWS Certified Solutions Architect - Associate
            </span>
            <span className="block text-sm text-gray-600">
              Amazon Web Services
            </span>
          </div>
          <div className="edu-meta md:text-right md:ml-auto">
            <span
              className="block text-sm text-gray-500 mt-1 md:mt-0"
              aria-label="Issued by Amazon Web Services on August 2023"
            >
              Issued: Aug 2023
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
