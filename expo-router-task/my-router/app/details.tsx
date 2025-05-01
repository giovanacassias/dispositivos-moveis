import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function details() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Details page",
        }}
      />
      <Text>This is the details page</Text>
      <Link href={"/"}>Go back to index!</Link>
    </View>
  );
}
