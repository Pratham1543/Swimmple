import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import Awrapper from "./Awrapper"
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import Heading from "../common/heading/Heading";
import Eng from '@mui/icons-material/Engineering';
import Science from '@mui/icons-material/Science';
import Star from '@mui/icons-material/Star';
import Open from '@mui/icons-material/OpenWith';



const About = () => {
  return (
    <>
      <Back title='About Us' />
      <Heading
            
            title="Who are we ?"
          />
      <div className="listNames">
      <List size="lg">
        <ListItem>
            <ListItemDecorator><Eng/></ListItemDecorator>
            <ListItemContent>We are Engineers with a deep passion for sports</ListItemContent>
        </ListItem>
        <ListItem>
            <ListItemDecorator><Science/></ListItemDecorator>
            <ListItemContent>We want to build the first swim Science lab in India</ListItemContent>
        </ListItem>
        <ListItem>
            <ListItemDecorator><Star/></ListItemDecorator>
            <ListItemContent>We have expertise in swimming</ListItemContent>
        </ListItem>
        <ListItem>
            <ListItemDecorator><Open/></ListItemDecorator>
            <ListItemContent>With Time, We Will expand to other Sports</ListItemContent>
        </ListItem>
      </List>
      </div>   
      <Awrapper/>
      
    </>
  )
}

export default About
