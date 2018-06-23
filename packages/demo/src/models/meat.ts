import { types } from "mobx-state-tree"

export const MeatModel = types.model("Meat").props({
  name: types.string,
  animal: types.string,
})

export type MeatModelType = typeof MeatModel.Type
export type MeatModelSnapshotType = typeof MeatModel.SnapshotType
export interface Meat extends MeatModelType {}
export interface MeatSnapshot extends MeatModelSnapshotType {}

export function createMeat(value: MeatSnapshot): Meat {
  const result = MeatModel.create(value)
  return result as Meat
}
