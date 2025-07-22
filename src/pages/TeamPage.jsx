import React, { useEffect, useState } from "react";
import TeamMember from "../components/teampage/TeamMember";
import axios from "axios";

const TeamPage = () => {
  const [team, setTeam] = useState([]);

    useEffect(() => {
    axios.get("https://6870f7127ca4d06b34b8d1a4.mockapi.io/atmnecomm/team")
      .then((response) => {
        setTeam(response.data);
      })
      .catch((error) => {
        console.error("API'den veriler alinamadi:", error);
      });
  }, []);

  return (
   <section className="py-16 px-[112px] text-center">
      <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
      <p className="mb-10 text-gray-500 max-w-xl mx-auto">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member) => (
          <TeamMember
            key={member.id}
            name={member.name}
            role={member.role}
            avatar={member.avatar}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
