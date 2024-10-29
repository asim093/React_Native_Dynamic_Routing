import { View, Text, Button, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import UseFetch from "@/hooks/useFetch";

export default function Index() {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "Main page" });
  }, []);
  const { data, loading, error } = UseFetch(
    "https://fakestoreapi.com/products"
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Home Screen</Text>
      {data &&
        data.map((item) => (
          <View key={item.id} style={{ marginBottom: 16 , justifyContent:"center", alignItems:"center", marginVertical:100}}>
            <img
              src={item.image}
              alt={item.name}
              style={{ height: "120px", width: "120px" }}
            />
            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Button
              title="Click For More"
              onPress={() => router.push(`/Id/${item.id}`)}
            />
          </View>
        ))}
    </ScrollView>
  );
}
