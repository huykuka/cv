import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const sampleProject = {
  title: "Sample Project Name",
  tech: "2024 — React, NestJS, PostgreSQL",
  summary: "Short summary of the project. Click for more details.",
  details:
    "This is a detailed review of the project. You can add your story, responsibilities, and more here.",
  stack: "React, NestJS, PostgreSQL, Docker, TailwindCSS",
  responsibilities: "Fullstack development, architecture design, CI/CD",
  architecture: "Microservices with RESTful APIs",
  painPoints: "Scaling, deployment, real-time updates",
  demoUrl: "#",
};

const ProjectReviewsSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="project-reviews">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title={sampleProject.title}
          tech={sampleProject.tech}
          summary={sampleProject.summary}
          onReadReview={() => setModalOpen(true)}
        />
      </div>
      <ProjectModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={sampleProject.title}
        tech={sampleProject.tech}
        details={sampleProject.details}
        stack={sampleProject.stack}
        responsibilities={sampleProject.responsibilities}
        architecture={sampleProject.architecture}
        painPoints={sampleProject.painPoints}
        demoUrl={sampleProject.demoUrl}
      />
    </section>
  );
};

export default ProjectReviewsSection;
