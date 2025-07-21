import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';

export interface ProjectCardProps {
  title: string;
  tech: string;
  summary: string;
  onReadReview: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tech, summary, onReadReview }) => (
  <div className="project-card cursor-pointer bg-gray-50 hover:bg-blue-50 transition rounded-lg shadow-sm border border-gray-200 p-5 flex flex-col items-start" tabIndex={0}>
    <div className="w-full aspect-video bg-gray-200 rounded mb-3 flex items-center justify-center">
      <FontAwesomeIcon icon={faDiagramProject} className="text-4xl text-gray-300" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
    <div className="text-xs text-gray-600 mb-2">{tech}</div>
    <p className="text-gray-700 mb-2 line-clamp-3">{summary}</p>
    <button
      className="mt-auto text-blue-600 hover:underline text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
      onClick={onReadReview}
      aria-label={`Read detailed review for ${title}`}
    >
      Read Review
    </button>
  </div>
);

export default ProjectCard;
