import React, { useState } from 'react';
import { NewProject, Project } from '../utils/types';
import CreateProject from '../pages/CreateProject';
import UseProjects from '../hooks/UseProjects';
interface SideBar2Props {
  projectList: Project[];
}

const SideBar2: React.FC<SideBar2Props> = ({ projectList }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { createProject } = UseProjects();

  return (
    <aside
      className="fixed top-12 right-[150px] w-[200px] h-full bg-gray-600 text-white p-4 z-50 transform transition-transform duration-300 ease-in-out"
      style={{ zIndex: 999 }}
    >
      <div className='flex justify-between items-center mb-4'>
        <div className='text-lg font-bold'>Project List</div>
        <button
          onClick={() => setIsPopupOpen(true)} // פתיחת הפופאפ
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          +
        </button>
      </div>

      <ul className='space-y-2'>
        {projectList.length > 0 ? (
          projectList.map((project, index) => (
            <li key={index} className='bg-gray-700 p-2 rounded-lg'>
              {project.name}
            </li>
          ))
        ) : (
          <li className='bg-gray-700 p-2 rounded-lg'>No projects available.</li>
        )}
      </ul>

      {/* הצגת ה-popup בעת לחיצה על "+" */}
      <CreateProject
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onAddProject={(newProject: NewProject) => {
          createProject(newProject);
          setIsPopupOpen(false); // סגירת הפופאפ לאחר הוספה
        }}
      />
    </aside>
  );
}

export default SideBar2;
