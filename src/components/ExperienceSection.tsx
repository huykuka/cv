import React from "react";
import JobAccordion from "./JobAccordion";
import sickLogo from "../assets/companies/sick.svg";
import rozitekLogo from "../assets/companies/rozitek.jpg";
import kukaLogo from "../assets/companies/kuka.svg";

const jobs = [
  {
    companyLogo: sickLogo,
    companyAlt: "SICK Logo",
    title: "SENIOR SOFTWARE ENGINEER",
    company: "SICK SENSOR INTELLIGENCE",
    period: "01/2023 – CURRENT",
    summary:
      "Coordinate with different countries in APEC region, together with the Engineering Team in Vietnam to develop and deliver SICK’s iIOT solutions. Proficient in deploying and integrating diverse sensors, gateways, and advanced digital solutions across industrial applications",
    projects: [
      {
        icon: "fas fa-globe-americas",
        text: "Successfully deployed DYSON’s global Track and Trace system, managing over 500,000 assets worldwide.",
      },
      {
        icon: "fas fa-cogs",
        text: "Evolved the asset management system into SICK’s official Asset Tracking Solution.",
      },
      {
        icon: "fas fa-chart-line",
        text: "Built and deployed Overall Equipment Efficiency (OEE) systems for real-time machine status monitoring.",
      },
      {
        icon: "fas fa-file-contract",
        text: "Held full responsibility for an asset tracking solution compliant with the GS1 EPCIS 2.0 standard.",
      },
      {
        icon: "fas fa-eye",
        text: "Developed an isolator pads monitoring system for predictive maintenance.",
      },
    ],
  },
  {
    companyLogo: rozitekLogo,
    companyAlt: "Rozitek Logo",
    title: "SOLUTION LEAD",
    company: "ROZITEK - INTELLIGENT INTRALOGISTICS SOLUTION",
    period: "10/2022 – 01/2023",
    summary: "",
    projects: [
      {
        icon: "fas fa-headset",
        text: "Supported the Sales Team by providing technical pre-sales consultation.",
      },
      {
        icon: "fas fa-rocket",
        text: "Executed project commissioning for AGV systems and software packages.",
      },
      {
        icon: "fas fa-robot",
        text: "Hands-on experience with RCS (Robot Control System) and WMS (Warehouse Management System).",
      },
      {
        icon: "fas fa-code",
        text: "Developed and deployed WebAPI applications for task dispatch communication.",
      },
      {
        icon: "fas fa-hand-paper",
        text: "Took ownership of robotic arm solutions in specialized applications.",
      },
    ],
  },
  {
    companyLogo: kukaLogo,
    companyAlt: "KUKA Logo",
    title: "CUSTOMER SERVICE ENGINEER",
    company: "KUKA ROBOTICS",
    period: "10/2019 – 10/2022",
    summary:
      "Be responsible for all technical matters of KUKA robotics's products in southern Vietnam",
    projects: [
      {
        icon: "fas fa-tools",
        text: "Provided technical expertise and support for KUKA robotics products.",
      },
      {
        icon: "fas fa-wrench",
        text: "Delivered engineering support to troubleshoot and resolve complex technical issues.",
      },
      {
        icon: "fas fa-chalkboard-teacher",
        text: "Conducted knowledge transfer and technical training sessions.",
      },
    ],
  },
];

const ExperienceSection: React.FC = () => (
  <section id="experience">
    {jobs.map((job, idx) => (
      <JobAccordion
        key={idx}
        {...job}
        summary={job.summary ? job.summary.replace(/\/(BR|br)/g, "\n") : ""}
      />
    ))}
  </section>
);

export default ExperienceSection;
