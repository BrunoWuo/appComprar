import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"

import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import { Filter } from "@/components/Filter"
import { Item } from "@/components/Item"

import { styles } from "./styles"
import { FilterStatus } from "@/types/FilterStatus"

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING]
const ITEMS = Array.from({ length: 100 }).map((_, index)=> String(index))

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Entrar" onPress={() => console.log("salvar")} />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {
            FILTER_STATUS.map((status =>
              <Filter key={status} status={status} isActive />
            ))
          }
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        {/* {
          ITEMS.map((value) => 
              <Item
                key={value}
                data={{ status: FilterStatus.DONE, description: String(value) }}
                onStatus={() => console.log("Status")}
                onRemove={() => console.log("Remover")}
              />)
          } */}

          <FlatList 
            data={ITEMS}
            keyExtractor={item=>item}
            renderItem={({item})=>
              <Item
                data={{ status: FilterStatus.DONE, description: item }}
                onStatus={() => console.log("Status")}
                onRemove={() => console.log("Remover")}
              />
            }
          />
      </View>

    </View>
  )
}