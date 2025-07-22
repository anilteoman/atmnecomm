import React from "react";

const TeamMember = ({ name, role, avatar }) => {
  return (
    <div className="bg-slate-200 rounded-xl shadow-md overflow-hidden text-center p-4">
      <img
        src={avatar}
        alt={name}
        className="w-32 h-32 mx-auto object-cover"
      />
      <h3 className="m-4 text-lg font-bold">{name}</h3>
      <p className="text-blue-600 font-semibold">{role}</p>
    </div>
  );
};

export default TeamMember;
