import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: "center",
    marginBottom: 12,
  },
  name: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: '#FFF'
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#E23C44',
  },
  buttonText: {
    fontSize: 24,
    color: '#FFF'
  },
});