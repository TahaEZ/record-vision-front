import { app, BrowserWindow } from 'electron'
import path from 'path'
import { spawn } from 'child_process'
import treeKill from 'tree-kill'

let mainWindow
let child

function createWindow() {
    mainWindow = new BrowserWindow({})
    mainWindow.maximize()

    const isDev = import.meta.env.MODE === 'development'
    if (isDev) {
        mainWindow.webContents.openDevTools({ mode: 'bottom' })
    }

    const jarPath = path.resolve(__dirname, '../../../record-vision.jar')
    child = spawn('java', ['-jar', jarPath])

    const pathToProductionHtml = path.join(__dirname, '../renderer/index.html')
    mainWindow.loadURL(isDev ? 'http://localhost:5173' : pathToProductionHtml)
    mainWindow.on('closed', () => (mainWindow = null))
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (child) {
        treeKill(child.pid)
    }
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow == null) {
        createWindow()
    }
})
