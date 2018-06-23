import React from "react"
import { View, ViewStyle } from "react-native"
import { MeatStore } from "../../../models/meat-store"
import { inject, observer } from "mobx-react"
import { MeatView } from "./meat-view"

const ROOT: ViewStyle = { padding: 10, alignItems: "center" }

export interface MeatListProps {
  meatStore?: MeatStore
}

@inject("meatStore")
@observer
export class MeatList extends React.Component<MeatListProps, {}> {
  render() {
    const { meats } = this.props.meatStore

    return <View style={ROOT}>{meats.map(meat => <MeatView meat={meat} key={meat.name} />)}</View>
  }
}
