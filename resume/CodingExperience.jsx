import React from "react";
import Heading from "./common/Heading";
import { Subheading } from "./common/Subheading";
import { List, ListMarker } from "./common/listMarkers";

export default function CodingExperience() {
  return (
    <>
      <Heading title="coding experience" />
      <Subheading title="Full Stack Engineer at Repact" location="Lehi, UT" duration="Jan 2023 - Nov 2025" />
      <List>
        <ListMarker info="Worked on a team of 5-6 developers in a startup to build a clean, efficient SaaS product. Simplified complex shipping issues for 3PLs and direct shippers by providing a well rounded platform for managing shipments, viewing data, and billing customers." />
        <ListMarker info="Fully responsible for development of several major features: insights dashboard, document center to upload/download files, custom client reports delivered via email, and PDF autoparser tool to extract data from contracts." />
        <ListMarker info="Maintained and enhanced existing complex features in the platform such as shipment and carrier invoice detail pages, spreadsheet tools to input data from tables of anolog/digital files, and collection of data from external sources via custom scripts. Also modernized color palette and implemented throughout the product." />
      </List>
      <Subheading
        title="Software Engineer Intern at Nascent Labs"
        location="Salt Lake City, UT"
        duration="Mar 2022 - Jan 2023"
        additional={true}
      />
      <List>
        <ListMarker info="Refined and advanced understanding of HTML, CSS, JavaScript (React) and Python." />
        <ListMarker info="Created several Python mini-games with Pygame." />
        <ListMarker info="Built several web and mobile apps: To-Do App, Pokédex Clone, In-Or-Out Office Tracker for employees, and Magic The Gathering Companion/Deck Builder." />
      </List>
    </>
  );
}
