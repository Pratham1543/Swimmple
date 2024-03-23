import React from "react";
import Back from "../common/back/Back";
import "./price.css";
import Faq from "./Faq";
import "../allcourses/courses.css";
import Heading from "../common/heading/Heading";
import GoToTopButton from "../home/GoToTopButton";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "../ui/table";

const Pricing = () => {
  return (
    <>
      <Back title="Choose The Right Plan" />
      <section className="price padding ">
        <div className="container">
          <div className="grid2 coursesCard">
            <div className="items">
              <div className="content flex">
                <div className="text">
                  <p>
                    "Our pricing plans are designed to cater to the needs of
                    athletes at different levels, offering a range of options
                    from single sessions to yearly subscriptions. Each plan
                    includes live delay feedback, qualitative feedback with a
                    sports analyst, and the opportunity for a 1:1 session with a
                    sports scientist. With our detailed reports and tailored
                    training sessions, we aim to enhance your swimming
                    performance and help you achieve your goals effectively.
                    Contact us for more information on pricing and how our
                    services can benefit your athletic journey."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Heading subtitle="OUR PRICING" title="Pricing & Packages" />
          <div className="price container">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead />
                  <TableHead>Single session</TableHead>
                  <TableHead>3 sessions</TableHead>
                  <TableHead>6 sessions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium"># of hours</TableCell>
                  <TableCell>4.5</TableCell>
                  <TableCell>4.5 x 3</TableCell>
                  <TableCell>4.5 x 6</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Live Delay feedback
                  </TableCell>
                  <TableCell>Y</TableCell>
                  <TableCell>Y</TableCell>
                  <TableCell>Y</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Qualitative feedback with sports analyst
                  </TableCell>
                  <TableCell>Y</TableCell>
                  <TableCell>Y</TableCell>
                  <TableCell>Y</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    1:1 sports scientist session
                  </TableCell>
                  <TableCell>Y</TableCell>
                  <TableCell>Y</TableCell>
                  <TableCell>Y</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Detailed report</TableCell>
                  <TableCell>Y</TableCell>
                  <TableCell>Y</TableCell>
                  <TableCell>Y</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Price (INR)</TableCell>
                  <TableCell>30,000</TableCell>
                  <TableCell>80,000</TableCell>
                  <TableCell>150,000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
      <Faq />
      <GoToTopButton />
    </>
  );
};

export default Pricing;
