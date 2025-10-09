import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Create from '../screens/Create';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Insights from '../screens/Insights';


const Tab=createBottomTabNavigator();

const Stack=createNativeStackNavigator();


function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Create" component={Create} />
        <Tab.Screen name="Insights" component={Insights} />
        </Tab.Navigator>
    );
    }

export default function AppNavigator() {
    return(
        
    <Stack.Navigator>
        <Stack.Screen name="BottomTabs" component={MyTabs} />
        <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
    );

  
}