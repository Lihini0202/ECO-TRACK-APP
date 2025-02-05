import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeDashboard from './screens/HomeDashboard';
import GoalTracker from './screens/GoalTracker'; // New screen
import EducationalHub from './screens/EducationalHub'; // New screen
import VirtualCoach from './screens/VirtualCoach'; // New screen
import NewsFeed from './screens/NewsFeed'; // New screen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Welcome Screen */}
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }} // Hide header for the welcome screen
        />

        {/* Home Dashboard */}
        <Stack.Screen
          name="Home"
          component={HomeDashboard}
          options={{ title: 'EcoTrack Dashboard' }} // Custom title for the home screen
        />

        {/* New Screens */}
        <Stack.Screen
          name="GoalTracker"
          component={GoalTracker}
          options={{ title: 'Goal Tracker' }} // Custom title for the goal tracker screen
        />
        <Stack.Screen
          name="EducationalHub"
          component={EducationalHub}
          options={{ title: 'Educational Hub' }} // Custom title for the educational hub screen
        />
        <Stack.Screen
          name="VirtualCoach"
          component={VirtualCoach}
          options={{ title: 'Virtual Coach' }} // Custom title for the virtual coach screen
        />
        <Stack.Screen
          name="NewsFeed"
          component={NewsFeed}
          options={{ title: 'News Feed' }} // Custom title for the news feed screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;