import path from "path"
import webpack from "webpack"
import HtmlPlugin from "html-webpack-plugin"
import CopyPlugin from "copy-webpack-plugin"
import HardSourcePlugin from "hard-source-webpack-plugin"

const cacheDirectory = undefined //path.resolve(__dirname, ".cache")

const shared: webpack.Configuration = {
  mode: "development",
  context: path.resolve(__dirname),
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: [/focus\/node_modules/],
      },
    ],
  },
}

function config(opts: webpack.Configuration) {
  return Object.assign(
    {},
    shared,
    {
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: `${opts.name}.js`,
        publicPath: "./",
        globalObject: "this",
      },
    },
    opts,
  )
}

export default [
  config({
    name: "electron",
    entry: ["./src/electron"],
    target: "electron-main",
    plugins: [new HardSourcePlugin({ cacheDirectory })],
  }),

  config({
    name: "renderer",
    entry: ["./src/js"],
    target: "electron-renderer",
    plugins: [
      new HtmlPlugin({ title: "Focus" }),
      new HardSourcePlugin({ cacheDirectory }),
    ],
  }),
]
