import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },

  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  form: {
    flexDirection: "row",
    width: "100%",
    gap: 12,
    paddingTop: 36,
    paddingBottom: 42,
  },
  input: {
    flex: 1,
    backgroundColor: "#1F1E25",
    height: 56,
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },
  listEmptyText: {
    color:"#FFF",
    fontSize:14,
    textAlign:'center'
  },
});
