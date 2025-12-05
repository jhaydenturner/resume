import React from "react";
import { Document, Font, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import CodingExperience from "./CodingExperience";
import Skills from "./Skills";
import Education from "./Education";

Font.register({
  family: "Monaco",
  fonts: [{ src: "./fonts/Monaco.ttf", fontWeight: "normal" }]
});

// Colors inspired by VSCode theme "Dark Modern".
// const backgroundColor = "#1f1f1f";
// const secondaryColor = "#C586C0";
// const titleColor = "#CE9178";
// const purposeColor = "#DCDCAA";

// Colors inspired by VSCode theme "Light Modern".
const backgroundColor = "#ffffff";
const secondaryColor = "#AF00DB";
const titleColor = "#A31515";
const purposeColor = "#EE0000";

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingVertical: 36,
    paddingHorizontal: 36,
    fontFamily: "Monaco",
    fontSize: 8,
    backgroundColor: backgroundColor
  },
  header: {
    height: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  headerInfo: {
    flexDirection: "col",
    alignItems: "flex-end",
    fontWeight: "semibold",
    gap: 3
  },
  title: {
    marginTop: -6,
    fontSize: 24,
    color: titleColor
  },
  info: {
    color: secondaryColor,
    textDecoration: "none"
  },
  purpose: {
    marginTop: -11,
    flexDirection: "col",
    maxWidth: "60%",
    color: purposeColor,
    fontWeight: "semibold"
  }
});

const MyDocument = () => (
  <Document>
    <Page size="Letter" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>J. Hayden Turner</Text>
        <View style={styles.headerInfo}>
          <Link style={styles.info} src="mailto:jhaydenturner@gmail.com">
            jhaydenturner@gmail.com
          </Link>
          <Link style={styles.info} src="https://www.linkedin.com/in/jht22/">
            https://www.linkedin.com/in/jht22/
          </Link>
          <Text style={styles.info}>385-299-9137</Text>
        </View>
      </View>
      <View style={styles.purpose}>
        <Text>
          Seeking a full time position where I can apply my enthusiasm for problem solving through successful design and computer
          programming.
        </Text>
      </View>
      <CodingExperience />
      <Skills />
      <Education />
    </Page>
  </Document>
);

export default MyDocument;
