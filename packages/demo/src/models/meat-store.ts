import { types } from "mobx-state-tree"
import { MeatModel } from "./meat"

export const MeatStoreModel = types.model("MeatStore").props({
  meats: types.optional(types.array(MeatModel), []),
})

type MeatStoreModelType = typeof MeatStoreModel.Type
export interface MeatStore extends MeatStoreModelType {}
