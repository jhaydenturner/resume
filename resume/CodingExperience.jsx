import React from "react";
import Heading from "./common/Heading";
import { Subheading } from "./common/Subheading";
import { List, ListMarker } from "./common/listMarkers";

export default function CodingExperience() {
  return (
    <>
      <Heading title="coding experience" />
      <Subheading
        title="Software Developer at Repact"
        description="Full Stack Engineer"
        location="Lehi, UT"
        duration="Jan 2023 - Nov 2025"
      />
      <List>
        <ListMarker info="Worked on a team of 5-6 developers in a startup to build a clean, efficient SaaS product. Simplified complex shipping issues for 3PLs and direct shippers by providing a well rounded platform for managing shipments, viewing data, and billing customers." />
        <ListMarker info="Fully responsible for development of several major features: the insights dashboard charts and colors, document center to upload/download files, custom client reports cetnerwhere specific data could be generated and delivered via email instantly or on a predetermined schedule, and a PDF autoparser tool to extract relevant data from contracts." />
        <ListMarker info="Maintained and enhanced existing complex features in the platform like Repact’s shipment  and carrier invoice detail pages, spreadsheet tools to input values from charts and tables of anolog or digital documents, and the collection of data from external sources via custom scripts. Also assisted in the exploration of color palletes and implemented throughout the product." />
      </List>
      <Subheading
        title="Software Engineer Intern at Nascent Labs"
        description="Internship"
        location="Salt Lake City, UT"
        duration="Mar 2022 - Jan 2023"
        additional={true}
      />
      <List>
        <ListMarker info="Refined and advanced my understanding of HTML, CSS, Python, JavaScript and React." />
        <ListMarker info="Created several python mini-games with Pygame." />
        <ListMarker info="Fully responsible for development of several preliminary web and mobile apps: a To-Do App, Pokédex Clone, In-Or-Out Office Tracker for employees, and a Magic The Gathering Companion/Deck Builder." />
      </List>
    </>
  );
}
