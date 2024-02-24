import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import StudensList from "./screens/StudensList"; // Corregir la importación

export default function App() {
  const stackStudents = createNativeStackNavigator();
  return (
  <NavigationContainer> 
    <stackStudents.Navigator>
      <stackStudents.Screen
      name="StudensList"
      component={StudensList}/>

    </stackStudents.Navigator>
  </NavigationContainer>
  );
}


