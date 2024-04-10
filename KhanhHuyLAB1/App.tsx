import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Exersise1 from './src/Exersise1'
import Exersise2 from './src/Exersise2'
import Exersise3 from './src/Exersise3'
import Exersise4 from './src/Exersise4'
import Exersise5 from './src/Exersise5'
import Exersise6 from './src/Exersise6'
import Exersise7 from './src/Exersise7'
import Exersise8 from './src/Exersise8'

const App = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'ex1', title: 'Exersise1', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
      { key: 'ex2', title: 'Albums', focusedIcon: 'album' },
      { key: 'ex3', title: 'Recents', focusedIcon: 'history' },
      { key: 'ex4', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    ]);
  return (
    //<Exersise1/>
    //<Exersise2/>
    //<Exersise3/>
    //<Exersise4/>
    //<Exersise5/>
    //<Exersise6/>
    <Exersise7/>
    //<Exersise8/>
  )
}

export default App

const styles = StyleSheet.create({})