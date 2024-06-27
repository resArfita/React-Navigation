import React from 'react'
//tambahkan button
import { View, Text, StyleSheet, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title='Pergi ke Progate'
        onPress={() => navigation.navigate('Progate')}
      />
    </View>
  )
}

//tambahkan ProgateScreen untuk perpindahan layar 2
const ProgateScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Progate!</Text>
      <Button title='Kembali' onPress={() => navigation.goBack()} />
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