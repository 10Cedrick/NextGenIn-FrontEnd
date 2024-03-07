import React from 'react'
import { Link } from "react-router-dom";
import { MdPerson, MdArrowForward } from "react-icons/md";
export default function ForumListItem({ forum }) {
    const { sujetForum, initiateur, id } = forum;
  return (
    <div className="bg-white p-4 rounded-md mb-4 w-full">
      <h2 className="text-lg font-semibold mb-2">{sujetForum}</h2>
      <div className="flex items-center mb-2">
        <img src={initiateur.avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
        <span className="ml-2">{initiateur.nom}</span>
      </div>
      <Link to={`/forum/${id}`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
          Rejoindre le forum
          <MdArrowForward className="ml-2" />
        </button>
      </Link>
    </div>
  )
}
