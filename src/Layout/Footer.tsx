import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa'
import { LiaCopyrightSolid } from "react-icons/lia";

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-100 text-black flex  sm:flex-row justify-between items-center p-6 sm:p-4'>
      <div className='flex  sm:flex-row gap-3 items-center'>
        <h2>MSbit Software</h2>
        <NavLink to="">Analytics</NavLink>
        <NavLink className='flex gap-2  ' to="">Website<FaExternalLinkAlt /></NavLink>
      </div>
      <h3 className='text-sm flex gap-2 items-center mt-4 sm:mt-0'>Simplicity <LiaCopyrightSolid />2024</h3>
    </footer >
  )
}

export default Footer;