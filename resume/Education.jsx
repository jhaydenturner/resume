import React from "react";
import Heading from "./common/Heading";
import { Subheading } from "./common/Subheading";
import { List, ListMarker } from "./common/listMarkers";

export default function Education() {
  return (
    <>
      <Heading title="Education" />
      <Subheading title="BS, Architectural Studies" description="University of Utah" location="Salt Lake City, UT" duration="May 2020" />
      <List>
        <ListMarker info="Completed scrupulous coursework and an assortment of studio projects by means of iterative design and spatial reasoning." />
        <ListMarker info="Additionally, completed curriculum through a broad, interdisciplinary lens of cultural & social influences, sustainability & resilience, material properties & construction practices, political, economic, and ecological systems, and building technologies & landscape ecologies." />
      </List>
    </>
  );
}
