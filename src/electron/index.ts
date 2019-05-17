process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "1"

console.log("App starting...")

import {
  app,
  shell,
  BrowserWindow,
} from "electron"
import path from "path"

app.on("ready", createWindow)

function createWindow(): BrowserWindow {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      sandbox: false,
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      nativeWindowOpen: true,
      webSecurity: false,
      experimentalFeatures: true,
    },
  })

  win.loadFile("./dist/index.html") // production

  win.webContents.on("will-navigate", (e, url) => {
    console.log("Opening externally...", url)
    e.preventDefault()
    shell.openExternal(url)
  })

  return win
}
