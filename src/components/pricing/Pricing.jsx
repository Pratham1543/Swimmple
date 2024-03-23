import React from "react";
import Back from "../common/back/Back";
import "./price.css";
import Faq from "./Faq";
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
      <section className="price padding">
     
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
      </section>
      <Faq />
    </>
  );
};

export default Pricing;
