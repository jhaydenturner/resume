import React from "react";
import { Subheading } from "./common/Subheading";
import Heading from "./common/Heading";
import { List, ListMarker, Sublist } from "./common/listMarkers";

export default function Skills() {
  return (
    <>
      <Heading title="Skills" />
      <Subheading title="Technical Skills" description="Software Development & Design Programs" />
      <List>
        <ListMarker info="Experienced with JavaScript" />
        <Sublist>
          <List>
            <ListMarker
              info="Frontend: React (JSX, hooks, state management, routing), Tailwind CSS, UI/UX design, MobX, CSS, HTML"
              secondary={true}
            />
            <ListMarker info="Backend: Node, API design, API integration, WebSockets, Infrastructure as Code (IaC)" secondary={true} />
          </List>
        </Sublist>
        <ListMarker info="AWS: Lambda, Athena, DynamoDB, Systems Manager, S3, IAM, AWS Glue, CloudWatch" />
        <ListMarker info="Proficient in Python and SQL" />
        <ListMarker info="Version Control with git (Bitbucket, GitHub)" />
        <ListMarker info="Proficient with Adobe Design Software such as Photoshop, Illustrator and InDesign" />
        <ListMarker info="React Native/Expo" />
      </List>
    </>
  );
}
