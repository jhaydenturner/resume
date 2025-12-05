import React from "react";
import { StyleSheet, Text, View } from "@react-pdf/renderer";

const yellowColor = "#DCDCAA";
// const orangeColor = "#CE9178";
const lavenderColor = "#C586C0";

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
    color: yellowColor
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
    color: yellowColor
  },
  durationText: {
    color: lavenderColor,
    fontWeight: "semibold"
  },
  locationText: {
    color: lavenderColor
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
