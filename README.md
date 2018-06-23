# msterymeat

mobx-state-tree proclivities

# Warning

None of this stuff works. However if that doesn't stop you...

```sh
cd packages/msterymeat
yarn
yarn ci
yarn clean
yarn prepare

cd ../demo
yarn
rm -rf node_modules/msterymeat
ln -s $PWD/../msterymeat $PWD/node_modules/msterymeat
```

# RootStoreProvider

This appears at the top of your application and provides your stores to the rest of the react components to pick up via `@inject`.

What makes this different from the `<Provider />` that comes with `mobx-react` is that it expects a property called `store`.

That `store` has properties which are other stores. And those are the things that get placed into the `<Provider />` as keys.
