import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  )
}

//tambahkan ProgateScreen untuk perpindahan layar 2
const ProgateScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Progate!</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      {/*tambahkan initialRoutName */}
      <Stack.Navigator initialRouteName='Home'> 
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Progate' component={ProgateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App