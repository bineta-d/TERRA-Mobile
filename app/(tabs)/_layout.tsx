import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';
import { red } from 'react-native-reanimated/lib/typescript/Colors';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs 
    screenOptions={() => ({
      tabBarActiveTintColor: colorScheme === 'dark' ? 'white' : 'black',
      tabBarStyle: {
        backgroundColor: '#F5E8D7',
      },
      headerStyle: {
        backgroundColor: '#F5E8D7',
      },
      headerBackTitle: 'Back', 
    })}
  >
      {/* Home Screen */}
      <Tabs.Screen name="index" options={{ title: 'Home',
      tabBarIcon:({color,size}) =>(
        <Ionicons name="home-outline" size={size} color={color} />
      )
    }} />

    {/* Saved View */}
    <Tabs.Screen name="SavedView" options={{ title: 'Saved', 
    tabBarIcon:({color,size}) =>(
      <Ionicons name="heart-outline" size={size} color={color} />
    ) }} />
{/* Add View */}
<Tabs.Screen name="NewListingView" options={{ title: 'Add',
    tabBarIcon:({color,size}) =>(
      <Ionicons name="add-circle-outline" size={size} color={color} />
    ) }} />
    

  {/* Chat View */}
      <Tabs.Screen name="ChatView" options={{ title: 'Messages' ,
    tabBarIcon:({color,size}) =>(
      <Ionicons name="chatbubble-outline" size={size} color={color} />
    )
    }} />
    
    {/* Profile View */}
      <Tabs.Screen name="ProfileView" options={{ title: 'Profile' ,
    tabBarIcon:({color,size}) =>(
      <Ionicons name="person-circle-outline" size={size} color={color} />
    )
    }} />

    </Tabs>
  );
}
