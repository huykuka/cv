import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTools,
  faWrench,
  faChalkboardTeacher,
  faGlobeAmericas,
  faCogs,
  faChartLine,
  faFileContract,
  faEye,
  faHeadset,
  faRocket,
  faRobot,
  faCode,
  faHandPaper,
} from "@fortawesome/free-solid-svg-icons";

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const iconMap: Record<string, IconDefinition> = {
  "fas fa-tools": faTools,
  "fas fa-wrench": faWrench,
  "fas fa-chalkboard-teacher": faChalkboardTeacher,
  "fas fa-globe-americas": faGlobeAmericas,
  "fas fa-cogs": faCogs,
  "fas fa-chart-line": faChartLine,
  "fas fa-file-contract": faFileContract,
  "fas fa-eye": faEye,
  "fas fa-headset": faHeadset,
  "fas fa-rocket": faRocket,
  "fas fa-robot": faRobot,
  "fas fa-code": faCode,
  "fas fa-hand-paper": faHandPaper,
};

interface ProjectItem {
  icon: string;
  text: string;
}

interface JobAccordionProps {
  companyLogo: string;
  companyAlt: string;
  title: string;
  company: string;
  period: string;
  summary?: string;
  projects: ProjectItem[];
}

const JobAccordion: React.FC<JobAccordionProps> = ({
  companyLogo,
  companyAlt,
  title,
  company,
  period,
  summary,
  projects,
}) => (
  <div className="job accordion bg-white rounded-lg overflow-hidden mb-6 shadow-md border border-gray-200 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lg">
    <div className="accordion-header px-8 py-6 flex items-center justify-between bg-white border-b border-gray-200 cursor-pointer transition-colors duration-200 ease-in-out hover:bg-gray-100">
      <div className="job-title-group flex items-center gap-4">
        <img
          src={companyLogo}
          alt={companyAlt}
          className="company-logo h-8 w-auto max-w-20 object-contain"
        />
        <div className="job-details">
          <h3 className="text-xl text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600">
            {company} | {period}
          </p>
        </div>
      </div>
    </div>
    <div className="accordion-content px-8 py-6 bg-gray-50 border-t border-gray-200">
      {summary && (
        <p className="font-bold text-lg text-gray-900 mb-3">{summary}</p>
      )}
      {projects.length > 0 && (
        <ul className="list-none p-0 m-0">
          {projects.map((proj, idx) => (
            <li
              key={idx}
              className="mb-3 text-gray-900 flex items-start gap-3 flex-wrap"
            >
              <FontAwesomeIcon
                icon={iconMap[proj.icon]}
                className="text-blue-600 text-lg md:text-xl flex-shrink-0 w-6 mr-2"
                aria-hidden="true"
              />
              <span className="flex-grow">{proj.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default JobAccordion;
