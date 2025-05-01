import { View, Text, Button } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

export default function id() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View>
      <Stack.Screen
        options={{
          title: "Product: " + id,
        }}
      />

      <Text>Product number {id}</Text>
      <Button title="Ir para index" onPress={() => router.back()}></Button>
    </View>
  );
}
