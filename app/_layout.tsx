import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />   {/* Home Screen */}
      <Stack.Screen name="About" />    {/* About Screen */}
      {/* <Stack.Screen name="[Id]" />      */}
    </Stack>
  );
}
