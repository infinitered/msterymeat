import React from "react"
import { Text } from "../../shared/text"
import { View, ViewStyle } from "react-native"
import { Meat } from "../../../models/meat"

const ROOT: ViewStyle = { paddingVertical: 4, flexDirection: "row" }
export interface MeatViewProps {
  meat: Meat
}

export class MeatView extends React.Component<MeatViewProps, {}> {
  render() {
    const { name, animal } = this.props.meat
    return (
      <View style={ROOT}>
        <Text text={name} preset="bold" />
        <Text text=" = " preset="copy" />
        <Text text={animal} preset="copy" />
      </View>
    )
  }
}
