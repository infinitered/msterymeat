import React from "react"
import { Provider as MobxProvider } from "mobx-react"
import { IStateTreeNode } from "mobx-state-tree"

export interface ProviderProps {
  /**
   * The root store node.
   */
  store: IStateTreeNode
  children: React.ReactNode
}

/**
 * A mobx-state-tree Provider, but accepts a store and spreads
 * the immediate mst nodes as children into the Provider.
 */
export class RootStoreProvider extends React.Component<ProviderProps, {}> {
  constructor(props) {
    super(props)
    if (!props.store) {
      throw new Error("store is required")
    }
  }

  render() {
    const stores = {}
    return <MobxProvider {...stores} children={this.props.children} />
  }
}
