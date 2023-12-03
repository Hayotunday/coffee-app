import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router'

import { styles } from '../styles/global.style';

export default function index() {
  return (
    <SafeAreaView>
      <Stack.Screen options={{}} />

      <>
        <View style>
          <Text>Index</Text>
        </View>
      </>
    </SafeAreaView>
  )
}