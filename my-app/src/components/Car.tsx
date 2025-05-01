import { View, Text } from "react-native";

type FunctionProps = {
  car: string;
  brand: string;
  hp: number;
};

export default function Car({ car, brand, hp }: FunctionProps) {
  return (
    <View>
      <Text>The car is: {car}</Text>
      <Text>The brand is: {brand}</Text>
      <Text>The hp is: {hp}</Text>
    </View>
  );
}
