// External dependencies
import { motion } from "framer-motion";

// Local files
import Sidebar from "./components/Sidebar";
import AccordionSection from "./components/AccordionSection";
import CareerOrientationSection from "./components/CareerOrientationSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import LanguagesSection from "./components/LanguagesSection";
import ProjectReviewsSection from "./components/ProjectReviewsSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex flex-col md:flex-row  flex-1">
        <Sidebar />
        <main className="flex-1 flex flex-col gap-3 md:gap-5 md:p-5 p-3 mx-auto w-full">
          {/* Refactored: Animated sections using a loop for maintainability */}
          {[
            {
              key: "career",
              title: (
                <span className="flex items-center gap-2">
                  <span role="img" aria-label="compass">
                    🧭
                  </span>{" "}
                  Career Orientation
                </span>
              ),
              content: <CareerOrientationSection />,
              delay: 0,
              defaultOpen: true,
            },
            {
              key: "experience",
              title: (
                <span className="flex items-center gap-2">
                  <span role="img" aria-label="briefcase">
                    💼
                  </span>{" "}
                  Experience
                </span>
              ),
              content: <ExperienceSection />,
              delay: 0.08,
            },
            {
              key: "skills",
              title: (
                <span className="flex items-center gap-2">
                  <span role="img" aria-label="gear">
                    ⚙️
                  </span>{" "}
                  Skills
                </span>
              ),
              content: <SkillsSection />,
              delay: 0.16,
            },
            {
              key: "education",
              title: (
                <span className="flex items-center gap-2">
                  <span role="img" aria-label="graduation">
                    🎓
                  </span>{" "}
                  Education
                </span>
              ),
              content: <EducationSection />,
              delay: 0.24,
            },
            {
              key: "languages",
              title: (
                <span className="flex items-center gap-2">
                  <span role="img" aria-label="language">
                    🌐
                  </span>{" "}
                  Languages
                </span>
              ),
              content: <LanguagesSection />,
              delay: 0.32,
            },
            {
              key: "projects",
              title: (
                <span className="flex items-center gap-2">
                  <span role="img" aria-label="projects">
                    📚
                  </span>{" "}
                  Project Reviews
                </span>
              ),
              content: <ProjectReviewsSection />,
              delay: 0.4,
            },
          ].map((section) => (
            <motion.section
              key={section.key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: section.delay }}
            >
              <AccordionSection
                title={section.title}
                defaultOpen={section.defaultOpen}
              >
                {section.content}
              </AccordionSection>
            </motion.section>
          ))}
        </main>
      </div>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
