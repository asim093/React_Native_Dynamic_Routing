import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';


const Home = ({ navigation}) => {
  const router = useRouter();
  const navigate = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
        title="Go to About" 
        onPress={() => router.push('About')} 
      />
    </View>
  );
};

export default Home;
