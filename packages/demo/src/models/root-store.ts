import { types } from "mobx-state-tree"
import { MeatStoreModel } from "./meat-store"

export const RootStoreModel = types.model("RootStore").props({
  meatStore: types.optional(MeatStoreModel, {}),
})
