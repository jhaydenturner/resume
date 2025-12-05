import React from "react";
import { Subheading } from "./common/Subheading";
import Heading from "./common/Heading";
import { List, ListMarker, Sublist } from "./common/listMarkers";

export default function Skills() {
  return (
    <>
      <Heading title="Skills" />
      <Subheading title="Technical Skills" />
      <List>
        <ListMarker info="Experience with JavaScript" />
        <Sublist>
          <List>
            <ListMarker
              info="Frontend: React (JSX, hooks, state management, routing), Tailwind CSS, UI/UX design, MobX, CSS, HTML"
              secondary={true}
            />
            <ListMarker info="Backend: Node, API design, API integration, WebSockets, Infrastructure as Code (IaC)" secondary={true} />
          </List>
        </Sublist>
        <ListMarker info="Experience with SQL & NoSQL databases" />
        <Sublist>
          <List>
            <ListMarker info="SQL: PostgreSQL, Presto (AWS Athena), and MySQL" secondary={true} />
            <ListMarker info="NoSQL: AWS DynamoDB" secondary={true} />
          </List>
        </Sublist>
        <ListMarker info="Experience with Amazon Web Services: Lambda, Athena, DynamoDB, Systems Manager, S3, IAM, AWS Glue, and CloudWatch" />
        <ListMarker info="Experience with version control (git, Bitbucket, GitHub)" />
        <ListMarker info="Experience with Adobe design software such as Photoshop, Illustrator, and InDesign" />
        <ListMarker info="Proficient in React Native/Expo" />
        <ListMarker info="Proficient in Python" />
      </List>
    </>
  );
}
