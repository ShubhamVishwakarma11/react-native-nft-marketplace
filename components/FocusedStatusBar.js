import { StatusBar, View, Text } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/core'

const FocusedStatusBar = (props) => {
  const IsFocused = useIsFocused();

  return IsFocused ? <StatusBar animated={true} {...props} /> : null;
}


export default FocusedStatusBar;