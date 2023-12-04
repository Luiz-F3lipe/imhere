import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 56,
    borderRadius: 5,
    color: '#FFF',
    backgroundColor: '#1F1E25',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#31CF67',
  },
  buttonText: {
    fontSize: 24,
    color: '#FFF'
  },
  form: {
    width: '100%',
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 48,
  },
  listEmptyText: {
    color: '#FFF',
    textAlign: 'center',
  }
})