import React from "react";
import TeamCard from "../team/TeamCard";
import "../team/team.css";
import "../about/about.css";
import Heading from "../common/heading/Heading";

const Team = () => {
  return (
    <>
      <section className="team padding">
        <Heading title="Swimple Team" />
        <div className="container grid">
          <TeamCard />
        </div>
      </section>
    </>
  );
};

export default Team;
