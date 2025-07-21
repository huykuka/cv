import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import luaImg from "../assets/skills/lua.png";
import mqttImg from "../assets/skills/mqtt.png";
import k3sImg from "../assets/skills/k3s.png";
// Add other local images as needed

const languages = [
  {
    name: "TypeScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
  },
  {
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "Go",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/2560px-Go_Logo_Blue.svg.png",
  },
  {
    name: "Lua",
    img: luaImg,
  },
];

const frameworks = [
  {
    name: "NestJS",
    img: "https://cdn.worldvectorlogo.com/logos/nestjs.svg",
  },
  {
    name: "Angular",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
  },
  {
    name: "React",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    name: "Docker",
    img: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
  },
  {
    name: "AWS",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png",
  },
  {
    name: "Pulumi",
    img: "https://www.pulumi.com/images/logo/logo.svg",
  },
  {
    name: "PostgreSQL",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png",
  },
  {
    name: "MQTT",
    img: mqttImg,
  },
  {
    name: "K3s",
    img: k3sImg,
  },
];

const SkillsSection: React.FC = () => (
  <section
    id="skills"
    className=" bg-white rounded-lg p-6 md:p-10 shadow-md border border-gray-200"
  >
    <h2 className="text-2xl text-blue-600 mb-8 border-b-2 border-gray-200 pb-2 flex items-center gap-4">
      <FontAwesomeIcon
        icon={faCogs}
        className="text-xl md:text-2xl text-blue-600"
      />
      <span>Languages &amp; Tech Stack</span>
    </h2>
    <div className="col-span-full">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Languages</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-6">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="flex flex-col items-center p-5 bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md"
          >
            <img
              src={lang.img}
              alt={lang.name}
              className="w-10 h-10 object-contain mb-3"
            />
            <span className="text-sm font-medium text-gray-900 text-center">
              {lang.name}
            </span>
          </div>
        ))}
      </div>
    </div>
    <div className="col-span-full mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        Frameworks &amp; Tools
      </h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-6">
        {frameworks.map((fw) => (
          <div
            key={fw.name}
            className="flex flex-col items-center p-5 bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md"
          >
            <img
              src={fw.img}
              alt={fw.name}
              className="w-10 h-10 object-contain mb-3"
            />
            <span className="text-sm font-medium text-gray-900 text-center">
              {fw.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
