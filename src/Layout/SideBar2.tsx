import React from 'react';
import { Project } from '../utils/types';

interface SideBar2Props {
    projectList: Project[];
}

const SideBar2: React.FC<SideBar2Props> = ({ projectList }) => {
  return (
    <aside
      className="fixed top-12 right-[150px] w-[200px] h-full bg-gray-600 text-white p-4 z-50 transform transition-transform duration-300 ease-in-out"
      style={{ zIndex: 999 }}
    >
      <div className='text-center text-lg font-bold mb-4'>Project List</div>
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
    </aside>
  );
}

export default SideBar2;
