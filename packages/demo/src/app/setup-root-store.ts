import { RootStoreModel } from "../models/root-store"

export function setupRootStore() {
  const result = RootStoreModel.create({
    meatStore: {
      meats: [
        { name: "bacon", animal: "pig" },
        { name: "steak", animal: "cow" },
        { name: "hotdog", animal: "unknown" },
      ],
    },
  })

  return result
}
