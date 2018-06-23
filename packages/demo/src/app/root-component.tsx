import { RootStoreProvider } from "msterymeat"
import React, { Component } from "react"
import { TextStyle, View, ViewStyle, StyleSheet } from "react-native"
import { color } from "../theme"
import { MeatList } from "../views/meat/meat-list"
import { Text } from "../views/shared/text"
import { setupRootStore } from "./setup-root-store"

interface RootComponentProps {}

const rootStore = setupRootStore()

const ROOT: ViewStyle = { flex: 1, justifyContent: "center", alignItems: "center" }
const HEADER: TextStyle = {
  borderColor: color.brand,
  borderBottomWidth: StyleSheet.hairlineWidth,
  marginBottom: 10,
}

export default class RootComponent extends Component<RootComponentProps, {}> {
  render() {
    return (
      <RootStoreProvider store={rootStore}>
        <View style={ROOT}>
          <View style={HEADER}>
            <Text text="Time For Meat!" preset="header" />
          </View>
          <MeatList />
        </View>
      </RootStoreProvider>
    )
  }
}
