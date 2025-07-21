import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrochip,
  faHeart,
  faUsers,
  faChartLine,
  faLaptopCode,
  faFileCode,
  faHandshake,
  faCloudUploadAlt,
  faComments,
  faUsersCog,
  faDesktop,
  faServer,
  faDatabase,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";

const CareerOrientationSection: React.FC = () => (
  <section id="career-orientation">
    <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify flex items-start gap-2">
      <FontAwesomeIcon icon={faMicrochip} className="text-blue-600 mt-1" />
      My long-term goal is to become a leading expert in the IIoT field,
      transitioning into a consultancy or solution architecture role. I am
      passionate about designing and implementing innovative, large-scale IIoT
      solutions that drive digital transformation and deliver significant
      business value.
    </p>
    <br />
    <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify flex items-start gap-2">
      <FontAwesomeIcon icon={faHeart} className="text-red-500 mt-1" />I love
      beautiful things (code, design) and new techs. I'm really interested in
      making good application to help people and shaping my skills.
    </p>
    <br />
    <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify flex items-start gap-2">
      <FontAwesomeIcon icon={faUsers} className="text-green-600 mt-1" />
      Now I'm looking for a good place to work and yes of course, with awesome
      people!
    </p>
    <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
      Achieved Skills
    </h3>
    <ul className="list-none p-0 m-0 text-gray-900">
      <li className="mb-2 flex items-start gap-2">
        <FontAwesomeIcon icon={faChartLine} className="text-blue-600 w-6" />
        <span className="whitespace-normal">
          Proficient in IIoT system architecture, data acquisition, and
          integration strategies
        </span>
      </li>
      <li className="mb-2 flex items-start gap-2">
        <FontAwesomeIcon icon={faLaptopCode} className="text-blue-600 w-6" />
        <span className="whitespace-normal">
          Comfortably working on Linux/Mac OS
        </span>
      </li>
      <li className="mb-2 flex items-start gap-2">
        <FontAwesomeIcon
          icon={faFileCode}
          className="text-blue-600 flex-shrink-0 w-6"
        />
        <span className="whitespace-normal flex-grow">
          Writing clean and beautiful code, good document
        </span>
      </li>
      <li className="mb-2 flex items-start gap-2">
        <FontAwesomeIcon icon={faHandshake} className="text-blue-600 w-6" />
        <span className="whitespace-normal">
          Sense of responsibility and high quality product
        </span>
      </li>
      <li className="mb-2 flex items-start gap-2">
        <FontAwesomeIcon
          icon={faCloudUploadAlt}
          className="text-blue-600 w-6"
        />
        <span className="whitespace-normal">
          Setup and deploy apps/websites in Linux/Window environment on cloud
          hosting environments (AWS)
        </span>
      </li>
      <li className="mb-2 flex items-start gap-2">
        <FontAwesomeIcon icon={faComments} className="text-blue-600 w-6" />
        <span className="whitespace-normal">
          Communication skills: Clearly articulate complex technical concepts to
          diverse audiences, fostering effective collaboration and
          understanding.
        </span>
      </li>
      <li className="mb-2 flex items-start gap-2">
        <FontAwesomeIcon icon={faUsersCog} className="text-blue-600 w-6" />
        <span className="whitespace-normal">
          Leadership skills : inspire the team members, help them in resolving
          technical problems, guiding new team member
        </span>
      </li>
    </ul>
    <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
      Skill Range
    </h3>
    <ul className="list-none p-0 m-0 text-gray-900">
      <li className="mb-2 flex items-start gap-2">
        <FontAwesomeIcon icon={faDesktop} className="text-blue-600 w-6" />
        <span className="whitespace-normal">Frontend</span>
      </li>
      <li className="mb-2 flex items-start gap-2">
        <FontAwesomeIcon icon={faServer} className="text-green-600 w-6" />
        <span className="whitespace-normal">Backend</span>
      </li>
      <li className="mb-2 flex items-start gap-2">
        <FontAwesomeIcon icon={faDatabase} className="text-red-600 w-6" />
        <span className="whitespace-normal">Database</span>
      </li>
      <li className="mb-2 flex items-start gap-2">
        <FontAwesomeIcon icon={faMicrochip} className="text-purple-600 w-6" />
        <span className="whitespace-normal">Hardware</span>
      </li>
      <li className="mb-2 flex items-start gap-2">
        <FontAwesomeIcon icon={faCloud} className="text-indigo-600 w-6" />
        <span className="whitespace-normal">Cloud Computing</span>
      </li>
    </ul>
  </section>
);

export default CareerOrientationSection;
