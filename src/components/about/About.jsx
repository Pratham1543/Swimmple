import React from "react";
import "./about.css";
import Back from "../common/back/Back";
import AboutCard from "./AboutCard";
import GoToTopButton from "../home/GoToTopButton";
import Awrapper from "./Awrapper";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import Heading from "../common/heading/Heading";
import Eng from "@mui/icons-material/Engineering";
import Science from "@mui/icons-material/Science";
import Star from "@mui/icons-material/Star";
import Open from "@mui/icons-material/OpenWith";
import TeamCard from "../team/TeamCard";
import "../team/team.css";
const About = () => {
  return (
    <>
      <GoToTopButton />
      <Back title="About Us" />
      <Heading title="Who are we ?" />
      <div className=" Listnames">
        <List size="lg">
          <ListItem>
            <ListItemDecorator>
              <Eng />
            </ListItemDecorator>
            <ListItemContent>
              We are Engineers with a deep passion for sports
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Science />
            </ListItemDecorator>
            <ListItemContent>
              We want to build the first swim Science lab in India
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Star />
            </ListItemDecorator>
            <ListItemContent>We have expertise in swimming</ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Open />
            </ListItemDecorator>
            <ListItemContent>
              With Time, We Will expand to other Sports
            </ListItemContent>
          </ListItem>
        </List>
      </div>
      <Awrapper />
      <section className="team padding">
        <div className="container">
          <div className="grid2 coursesCard">
            <div className="items">
              <div className="content flex">
                <div className="text">
                  <p>
                    "Meet the dedicated individuals behind Swimple, each
                    bringing a unique set of skills and expertise to drive
                    innovation and excellence in sports science. Our team is
                    committed to revolutionizing the way athletes train and
                    perform, leveraging cutting-edge technology and a passion
                    for sports to help athletes reach their full potential. Get
                    to know the faces shaping the future of sports performance
                    at Swimple."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid">
            <TeamCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
