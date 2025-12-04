import React from "react";
import { StyleSheet, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  heading: {
    marginTop: 12,
    fontWeight: "bold",
    fontSize: 13,
    textTransform: "uppercase"
  }
});

export default function Heading({ title }) {
  return <Text style={styles.heading}>{title}</Text>;
}
