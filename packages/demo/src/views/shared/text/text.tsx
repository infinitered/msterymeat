import React from "react"
import {
  Text as ReactNativeText,
  TextProperties as ReactNativeTextProperties,
  TextStyle,
} from "react-native"
import { color } from "../../../theme"

const BASE: TextStyle = { color: color.text, fontSize: 18 }

const presets = {
  copy: { ...BASE } as TextStyle,
  bold: { ...BASE, fontWeight: "800", color: color.brand } as TextStyle,
  header: { ...BASE, fontSize: 40, fontWeight: "800" } as TextStyle,
}

type PresetNames = keyof typeof presets

interface TextProps extends ReactNativeTextProperties {
  text?: string
  preset: PresetNames
  style?: TextStyle
}

export class Text extends React.Component<TextProps, {}> {
  render() {
    const { text, preset, style, ...rest } = this.props
    const content = this.props.text || this.props.children
    const presetStyle = presets[preset] || presets.copy
    const rootStyle: TextStyle = { ...presetStyle, ...style }

    return <ReactNativeText style={rootStyle} children={content} {...rest} />
  }
}
