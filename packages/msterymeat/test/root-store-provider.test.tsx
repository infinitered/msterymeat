import test from "ava"
import React from "react"
import render from "react-test-renderer"
import { RootStoreProvider } from "../src/root-store-provider"
import { RootStore } from "./fixtures/root-store"

const reactLogsInInternalsSoWeHaveToDoThis = console.error

test.afterEach(() => (console.error = reactLogsInInternalsSoWeHaveToDoThis))

test("interface", t => t.is(typeof RootStoreProvider, "function"))

test("requires at least 1 child", t => {
  console.error = () => undefined

  t.throws(() => {
    const root = RootStore.create({})
    // @ts-ignore
    render.create(<RootStoreProvider store={root} />)
  })
})

test.serial("requires store to be passed", t => {
  console.error = () => undefined

  t.throws(() => {
    render.create(
      // @ts-ignore
      <RootStoreProvider>
        <p>HI</p>
      </RootStoreProvider>,
    )
  })
})

test("renders children", t => {
  const root = RootStore.create({})
  const comp = (
    <RootStoreProvider store={root}>
      <p>hello</p>
    </RootStoreProvider>
  )
  const tree = render.create(comp).toJSON()
  t.not(null, tree)
  if (tree) {
    t.is(tree.type, "p")
    t.deepEqual(tree.children, ["hello"] as any)
  }
})
