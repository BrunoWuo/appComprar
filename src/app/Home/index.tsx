import { Image, View } from "react-native"

import { Input } from "@/components/Input"
import { Button } from "@/components/Button"

import { styles } from "./styles"


export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />

      <Input placeholder="O que você precisa comprar?"/>
      <Button title="Entrar" onPress={()=>console.log("salvar")}/>

    </View>
  )
}