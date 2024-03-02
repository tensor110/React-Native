import { View, StyleSheet } from "react-native";
import FlexBoxes from "./FlexBox/FlexBox";

export default function Flexes() {
  return (
    <View style={styles.container}>
      {/* <FlexBoxes style={{ backgroundColor: "red", flex: 1 }}>Box1</FlexBoxes> */}
      {/* <FlexBoxes style={{ backgroundColor: "black", flex: 3 }}>Box2</FlexBoxes> */}
      <FlexBoxes style={{ backgroundColor: "yellow", top:75, left:75 }}>Box3</FlexBoxes>
      <FlexBoxes style={{ backgroundColor: "yellow" }}>Box3</FlexBoxes>
      <FlexBoxes style={{ backgroundColor: "yellow" }}>Box3</FlexBoxes>
      <FlexBoxes style={{ backgroundColor: "orange", position: 'absolute', top:75, left:75 }}>Box4</FlexBoxes>
      {/* <FlexBoxes style={{ backgroundColor: "pink", alignSelf: "flex-start" }}>
        Box5
      </FlexBoxes>
      <FlexBoxes style={{ backgroundColor: "plum", alignSelf: "center", flexBasis: 200, flexGrow: 1 }}>
        Box6
      </FlexBoxes>
      <FlexBoxes style={{ backgroundColor: "purple", alignSelf: "flex-end" }}>
        Box7
      </FlexBoxes> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: 'center',
    flexDirection: "column",
    // gap:20,
    // rowGap: 20,
    // columnGap: 30,
    marginTop: 10,
    borderWidth: 5,
    borderColor: "white",
  },
});
