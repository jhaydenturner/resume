import React from "react";
import { Document, Font, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import CodingExperience from "./CodingExperience";
import Skills from "./Skills";
import Education from "./Education";

Font.register({
  family: "Monaco",
  fonts: [{ src: "./fonts/Monaco.ttf", fontWeight: "normal" }]
});

const lightGray = "#B6B6B6";
const darkGray = "#555555";

const styles = StyleSheet.create({
  page: {
    position: "relative",
    paddingVertical: 36,
    paddingHorizontal: 36,
    fontFamily: "Monaco",
    fontSize: 8
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
    fontSize: 24
  },
  info: {
    color: darkGray,
    textDecoration: "none"
  },
  purpose: {
    marginTop: -11,
    flexDirection: "col",
    maxWidth: "60%",
    color: lightGray,
    fontWeight: "semibold"
  }
});

const MyDocument = () => (
  <Document>
    <Page size="Letter" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>J. Hayden Turner</Text>
        <View style={styles.headerInfo}>
          <Link style={styles.info} src="mailto:hayden.turner1@gmail.com">
            hayden.turner1@gmail.com
          </Link>
          <Link style={styles.info} src="https://www.linkedin.com/in/jeremy-hayden-turner/">
            https://www.linkedin.com/in/jeremy-hayden-turner/
          </Link>
          <Text style={styles.info}>385-299-9137</Text>
        </View>
      </View>
      <View style={styles.purpose}>
        <Text>
          Seeking a full time position which would benefit from my enthusiasm for problem solving by means of successful design, computer
          programming, and building software.
        </Text>
      </View>
      <CodingExperience />
      <Skills />
      <Education />
    </Page>
  </Document>
);

export default MyDocument;
