import {
  StyleSheet,
  Platform
} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor: "#f7f9fa",
    // Adjust Platform
    ...Platform.select({
      ios: {
        marginTop: 50
      },
      android: {
        marginTop: 40
      }
    })
  },
  text: {
    padding: 10,
    height: 45,
    width: "80%",
    backgroundColor: "#52BE80",
    marginBottom: 1,
    color: "#000",
    marginBottom:5,
  }
});