// External dependencies

// Local files
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import CareerOrientationSection from "./components/CareerOrientationSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import LanguagesSection from "./components/LanguagesSection";
import ProjectReviewsSection from "./components/ProjectReviewsSection";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex flex-col md:flex-row  flex-1">
        <Sidebar />
        <main className="flex-1 flex flex-col gap-3 md:gap-5 md:p-5 p-3 mx-auto w-full">
          <CareerOrientationSection />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
          <LanguagesSection />
          <ProjectReviewsSection />
        </main>
      </div>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
