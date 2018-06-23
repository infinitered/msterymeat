const path = require("path")
const blacklist = require("metro/src/blacklist")

module.exports = {
  getTransformModulePath() {
    return require.resolve("react-native-typescript-transformer")
  },
  getSourceExts() {
    return ["ts", "tsx"]
  },
  // unfortunately we need to tell metro where to find msterymeat's dependencies :(
  extraNodeModules: {
    mobx: path.resolve(__dirname, "node_modules/mobx"),
    "mobx-react": path.resolve(__dirname, "node_modules/mobx-react"),
    "mobx-state-tree": path.resolve(__dirname, "node_modules/mobx-state-tree"),
    react: path.resolve(__dirname, "node_modules/react"),
  },
  // unfortunately we have to tell metro that our symlinked deps are off limits :(
  getBlacklistRE: () => blacklist([/..\/msterymeat\/node_modules\/.*/]),
  // unfortunately we have to tell metro that the project roots are ourself AND our symlinked dependency :(
  getProjectRoots: () => [path.resolve(__dirname), path.resolve(__dirname, "..", "msterymeat")],
}
