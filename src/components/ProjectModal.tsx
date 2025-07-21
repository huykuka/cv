import React from 'react';

export interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  tech: string;
  details: string;
  stack: string;
  responsibilities: string;
  architecture: string;
  painPoints: string;
  demoUrl?: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  open,
  onClose,
  title,
  tech,
  details,
  stack,
  responsibilities,
  architecture,
  painPoints,
  demoUrl,
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-2xl font-bold focus:outline-none"
          aria-label="Close"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="w-full aspect-video bg-gray-200 rounded mb-4 flex items-center justify-center">
          <span className="text-gray-400">[Image/Video Placeholder]</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="text-xs text-gray-600 mb-2">{tech}</div>
        <p className="mb-4 text-gray-700">{details}</p>
        <ul className="mb-4 text-gray-700 text-sm list-disc list-inside">
          <li><strong>Tech Stack:</strong> {stack}</li>
          <li><strong>Responsibilities:</strong> {responsibilities}</li>
          <li><strong>Architecture:</strong> {architecture}</li>
          <li><strong>Pain Points:</strong> {painPoints}</li>
          {demoUrl && (
            <li>
              <strong>Demo:</strong>{' '}
              <a href={demoUrl} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                View Demo
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProjectModal;
