import React from 'react'
//tambahkan button & image
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeIcon from './assets/bottomTabIcons/home.png'
import Icon from './assets/bottomTabIcons/bunny.png'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.marginBottom20}>Home Screen</Text>
      <Button
        styles={styles.button}
        title='Pergi ke Progate'
        onPress={() => {
          navigation.navigate('Progate')
        }}
      />
    </View>
  )
}


const ProgateScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Progate!</Text>
      <Text style={styles.marginBottom20}>Ayo belajar!</Text>
      <Button title='Kembali' onPress={() => navigation.goBack()} />
    </View>
  )
}

//const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator> 
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#fff',
            },
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image source={HomeIcon} style={styles.homeIcon} />
            ),
          }} 
        />
        <Tab.Screen
          name='Progate'
          component={ProgateScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image source={Icon} style={styles.bunnyIcon} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginBottom20: {
    marginBottom: 20,
  },
  homeIcon: {
    width: 30,
    height: 30,
    marginTop: 10,
  },
  bunnyIcon: {
    width: 35,
    height: 35,
    marginTop: 10,
  },
})

export default App