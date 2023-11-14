import React, { Component } from 'react'
import { Text, View, Image, useWindowDimensions } from 'react-native'

import Logo from '../../assets/images/control-job.jpg'
import styles from './SignIn.style'

export default function SignIn()  {  

  const {height} = useWindowDimensions();

    return (
      <View style = {styles.container}>
          <Image
            source = {Logo}
            resizeMode = "contain"
            style = {[styles.logo,{height: height * 0.3}]}
          />
      </View>
    )
}
