import React, { useState } from 'react';
import { NewProject, IProject } from '../utils/types';
import CreateProject from '../pages/CreateProject';
import UseProjects from '../hooks/UseProjects';
import { MdNavigateNext } from "react-icons/md";
import { LiaEdit } from "react-icons/lia";
import { RiDeleteBin7Line } from "react-icons/ri";
import Groups from '../components/Groups';

interface SideBar2Props {
  projectList: IProject[];
}

const SideBar2: React.FC<SideBar2Props> = ({ projectList }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const { createProject } = UseProjects();

  const handleToggleGroup = (projectId: string) => {
    setExpandedProjectId(prevId => prevId === projectId ? null : projectId);
  }

  return (
    <aside
      className="fixed top-12 right-[150px] w-[200px] h-full bg-gray-700 text-white p-3 z-50 transform transition-transform duration-300 ease-in-out"
      style={{ zIndex: 999 }}
    >
      <div className='flex justify-center items-center mb-4'>
        <div className='text-lg font-bold'>Project List</div>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 py-1 px-2 rounded"
        >
          +
        </button>
      </div>

      <ul className='space-y-2'>
        {projectList.length > 0 ? (
          projectList.map((project) => (
            <li key={project._id}>
              <div className='bg-gray-800 px-1 py-2 rounded-lg flex items-center justify-between hover:bg-gray-900 transition duration-200'>
                <span className='flex items-center'>
                  {/* when you click we store the id of the project, and it will show the Groups component */}
                  <span
                    className={`p-[2px] mr-1 hover:bg-slate-400 rounded-lg transition-transform duration-100 ${expandedProjectId === project._id ? 'rotate-90' : ''
                      }`}
                  >
                    <MdNavigateNext
                      onClick={() => handleToggleGroup(project._id)}
                      className="cursor-pointer"
                    />
                  </span>
                  {project.name}
                </span>
                <span className='flex items-center'>
                  <p className='p-[2px] mr-1 hover:bg-slate-400 rounded-lg transition duration-300'><LiaEdit /></p>
                  <p className='p-[2px] mr-1 hover:bg-slate-400 rounded-lg transition duration-300'><RiDeleteBin7Line /></p>
                </span>
              </div>
              {expandedProjectId === project._id && <Groups projectId={project._id} />}
            </li>
          ))
        ) : (
          <li className='bg-gray-700 p-2 rounded-lg'>No projects available.</li>
        )}
      </ul>

      <CreateProject
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onAddProject={(newProject: NewProject) => {
          createProject(newProject);
          setIsPopupOpen(false);
        }}
      />
    </aside>
  );
}

export default SideBar2;