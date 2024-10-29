import { View, Text, Image, ActivityIndicator } from "react-native";
import {
  router,
  useLocalSearchParams,
  useNavigation,
  useRouter,
} from "expo-router";
import { useEffect } from "react";
import UseFetch from "@/hooks/useFetch";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProductDetail = () => {
  const { ID } = useLocalSearchParams();
  const router = useRouter();
  const { data, loading, error } = UseFetch(
    `https://fakestoreapi.com/products/${ID}`
  );
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: `Product ID: ${ID}` });
  }, [ID, navigation]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
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

  if (!data) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No product data available.</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      <Image source={{ uri: data.image }} style={{ width: 200, height: 250 , objectFit:"contain" }} />
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>{data.title}</Text>
      <Text>{data.description}</Text>
      <TouchableOpacity
      onPress={() => router.push('/')}
        style={{ borderWidth: 1, padding: 10, marginVertical: 20 }}
      >
        Go back
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetail;
