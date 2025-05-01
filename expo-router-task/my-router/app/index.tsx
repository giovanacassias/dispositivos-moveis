import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Link, Stack } from "expo-router";

export default function index() {
  const idRandom = Math.round(Math.random() * 10);

  return (
    <View>
      <Stack.Screen
        options={{
          title: "HOMEPAGE",
        }}
      />
      <Text>You're in the index</Text>
      <Link href={"/details"}>Go to details</Link>
      <Link
        href={{
          pathname: "/product/[id]",
          params: { id: idRandom },
        }}
      >
        Go to product
      </Link>
    </View>
  );
}
