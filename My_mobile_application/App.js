import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./screens/HomeScreen";
import CameraScreen from "./screens/CameraScreen";
import AudioScreen from "./screens/AudioScreen";
import BatteryScreen from "./screens/BatteryScreen";
import VibrationScreen from "./screens/VibrationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <TailwindProvider>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen options={{
              title: 'My App',
              headerStyle: {
                backgroundColor: 'white',
              },
              headerTintColor: 'black',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitleAlign: 'center'
            }} name="Home" component={HomeScreen} />
            <Stack.Screen
              name="Camera"
              component={CameraScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Audio"
              component={AudioScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Battery"
              component={BatteryScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Vibration"
              component={VibrationScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
