import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Post from "./src/components/Post";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>PDM Social Network</Text>
      <StatusBar style="auto" />
      <Post
        author="User1"
        title="I'm selling a car"
        content="$4000"
        likes={55}
      />
      <Post
        author="User2"
        title="I'm looking for a new car"
        content="Up to $3500"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
