import React from "react";
import { StyleSheet, Text, View } from "@react-pdf/renderer";

// // Colors inspired by VSCode theme "Dark Modern".
// const subtitleColor = "#9CDCFE";
// const secondaryColor = "#C586C0";

// Colors inspired by VSCode theme "Light Modern".
const subtitleColor = "#267F99";
const secondaryColor = "#AF00DB";

const styles = StyleSheet.create({
  subheadingWrapper: {
    marginTop: 4,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  additionalSubheadingWrapper: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  subheadingSection: {
    flexDirection: "col",
    marginBottom: 8,
    color: subtitleColor
  },
  leftSubheadingSection: {
    flexDirection: "col",
    marginBottom: 8,
    alignItems: "flex-end"
  },
  titleText: {
    marginBottom: 2,
    fontSize: 9,
    fontWeight: "semibold",
    color: subtitleColor
  },
  durationText: {
    color: secondaryColor,
    fontWeight: "semibold"
  },
  locationText: {
    color: secondaryColor
  }
});

export function Subheading({ title, location, duration, additional = false }) {
  const wrapperStyle = additional ? styles.additionalSubheadingWrapper : styles.subheadingWrapper;
  return (
    <View style={wrapperStyle}>
      <View style={styles.subheadingSection}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.leftSubheadingSection}>
        <Text style={styles.durationText}>{duration}</Text>
        <Text style={styles.locationText}>{location}</Text>
      </View>
    </View>
  );
}
