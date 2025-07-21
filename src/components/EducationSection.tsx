import React from "react";
import bkLogo from "../assets/education/bk.png";
import awsLogo from "../assets/skills/aws.png";

const EducationSection: React.FC = () => (
  <section id="education">
    <div className="flex flex-col gap-4">
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
