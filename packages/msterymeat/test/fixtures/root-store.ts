import { types, IModelType } from "mobx-state-tree"

// workaround for TS4024
export type __IModelType = IModelType<any, any>

export const RootStore = types.model("RootStore").props({
  name: "",
  age: 1,
})
