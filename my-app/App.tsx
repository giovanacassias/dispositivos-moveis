import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Pet from "./src/components/Pet";
import Car from "./src/components/Car";

export default function App() {
  let obj = {
    car: "Fusca",
    brand: "Volkswagen",
    hp: 150,
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Pet></Pet>
      <Car car={obj.car} brand={obj.brand} hp={obj.hp} />
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
