import React from "react";
import Heading from "./common/Heading";
import { Subheading } from "./common/Subheading";
import { List, ListMarker } from "./common/listMarkers";

export default function Education() {
  return (
    <>
      <Heading title="Education" />
      <Subheading title="BS, Architectural Studies from the University of Utah" location="Salt Lake City, UT" duration="May 2020" />
      <List>
        <ListMarker info="Completed scrupulous coursework and an assortment of studio projects by means of iterative design and spatial reasoning." />
        <ListMarker info="Accomplished curriculum that explored architecture through a broad, interdisciplinary lens including cultural & social influences as well as political, economic, and ecological systems." />
        <ListMarker info="Acquired experience regarding material properties and construction practices with emphasis on sustainability and resilience." />
        <ListMarker info="Mastered building technologies and landscape ecologies while becoming proficient with industry standard design and drafting tools." />
      </List>
    </>
  );
}
