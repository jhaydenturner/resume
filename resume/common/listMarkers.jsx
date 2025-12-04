import React from "react";
import { View } from "@react-pdf/primitives";
import { StyleSheet, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  list: {
    gap: 3,
    maxWidth: 540
  },
  listItem: {
    flexDirection: "row",
    maxWidth: 526,
    marginBottom: 8
  },
  marker: {
    width: 10,
    marginRight: 4
  },
  secondaryMarker: {
    width: 10,
    marginRight: 4,
    fontWeight: "bold"
  },
  sublist: {
    marginLeft: 24,
    maxWidth: 502
  }
});

export function ListMarker({ info, secondary = false }) {
  const markerStyle = secondary ? styles.secondaryMarker : styles.marker;
  const listMarker = secondary ? "+" : "-";
  return (
    <View style={styles.listItem}>
      <Text style={markerStyle}>{listMarker}</Text>
      <Text>{info}</Text>
    </View>
  );
}

export function List({ children }) {
  return <View style={styles.list}>{children}</View>;
}

export function Sublist({ children }) {
  return <View style={styles.sublist}>{children}</View>;
}
