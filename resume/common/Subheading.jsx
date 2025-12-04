import React from "react";
import { StyleSheet, Text, View } from "@react-pdf/renderer";

const lightGray = "#B6B6B6";
const darkGray = "#555555";

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
    marginBottom: 8
  },
  leftSubheadingSection: {
    flexDirection: "col",
    marginBottom: 8,
    alignItems: "flex-end"
  },
  titleText: {
    marginBottom: 2,
    fontSize: 9,
    fontWeight: "semibold"
  },
  descriptionText: {
    color: lightGray,
    fontWeight: "semibold"
  },
  durationText: {
    color: darkGray,
    fontWeight: "semibold"
  },
  locationText: {
    color: lightGray
  }
});

export function Subheading({ title, description, location, duration, additional = false }) {
  const wrapperStyle = additional ? styles.additionalSubheadingWrapper : styles.subheadingWrapper;
  return (
    <View style={wrapperStyle}>
      <View style={styles.subheadingSection}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      <View style={styles.leftSubheadingSection}>
        <Text style={styles.durationText}>{duration}</Text>
        <Text style={styles.locationText}>{location}</Text>
      </View>
    </View>
  );
}
