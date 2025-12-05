import React from "react";
import { StyleSheet, Text } from "@react-pdf/renderer";

// Colors inspired by VSCode theme "Dark Modern".
// const titleColor = "#569CD6";

// Colors inspired by VSCode theme "Light Modern".
const titleColor = "#0451A5";

const styles = StyleSheet.create({
  heading: {
    marginTop: 12,
    fontWeight: "bold",
    fontSize: 13,
    textTransform: "uppercase",
    color: titleColor
  }
});

export default function Heading({ title }) {
  return <Text style={styles.heading}>{title}</Text>;
}
