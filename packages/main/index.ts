import * as os from 'os'
import { join } from 'path'
import { app, BrowserWindow, ipcMain, nativeTheme } from 'electron'
import { autoUpdater } from 'electron-updater'
const isWin7 = os.release().startsWith('6.1')
if (isWin7) app.disableHardwareAcceleration()

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

if (!app.requestSingleInstanceLock()) {
  app.quit()
  process.exit(0)
}

let win: BrowserWindow | null = null
let winLoading: BrowserWindow | null = null
const ipc = ipcMain
const PACKAGE_ROOT = __dirname

async function createWindow() {
  autoUpdater.checkForUpdatesAndNotify()
  // loading window
  winLoading = new BrowserWindow({
    width: 300,
    height: 300,
    show: true,
    frame: false,
    resizable: false,
    alwaysOnTop: true,
    backgroundColor: '#23272e',
    roundedCorners: true,
    autoHideMenuBar: true,
    transparent: true,
  })

  win = new BrowserWindow({
    show: false,
    title: 'Main window',
    minWidth: 800,
    minHeight: 600,
    icon: join(PACKAGE_ROOT, '../../buildResources/icon.ico'),
    webPreferences: {
      preload: join(PACKAGE_ROOT, '../preload/index.cjs'),
      contextIsolation: false,
      nodeIntegration: true
    },
    center: true,
    frame: false,
    resizable: true,
    autoHideMenuBar: true,
    roundedCorners: true,
    darkTheme: true,
    vibrancy: 'under-window',
    titleBarStyle: 'hidden',
    hasShadow: true,
    titleBarOverlay: {
      color: '#2b2d38',
      symbolColor: '#ffffff',
      height: 36
    },
    transparent: os.platform() === 'linux'
    // https://github.com/electron/electron/issues/20357
  })

  // winLoading.on('closed', () => {
  //   winLoading = null
  // })

  const waitForLoading = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))
  // Test actively push message to the Electron-Renderer
  win.webContents.on('did-finish-load', async () => {
    await waitForLoading(3000)
    if (winLoading) winLoading.close()
    win?.show()
    win?.webContents.send('main-process-message', new Date().toLocaleString())
  })

  const dataCharset = 'data:text/html;charset=utf-8,'
  const file =
    dataCharset + encodeURIComponent(loadView('Markdown Preview - loading'))

  if (app.isPackaged) {
    win.loadFile(join(PACKAGE_ROOT, '../renderer/index.html'))
    winLoading.loadURL(file)
  } else {
    // 🚧 Use ['ENV_NAME'] avoid vite:define plugin
    const url = `http://${process.env['VITE_DEV_SERVER_HOST']}:${process.env['VITE_DEV_SERVER_PORT']}`

    win.loadURL(url)
    winLoading.loadURL(file)
    // winLoading.webContents.openDevTools({ mode: 'undocked' })
  }

  // Handle window events
  ipc.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'dark'
    } else {
      nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
  })

  ipc.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'dark'
  })

  ipc.on('closeApp', () => {
    win?.close()
  })

  ipc.on('minimizeApp', () => {
    win?.minimize()
  })

  ipc.on('maximizeRestoreApp', () => {
    if (win?.isMaximized()) {
      win?.restore()
    } else {
      win?.maximize()
    }
  })
  // // Check if is Maximized
  // win.on('maximize', () => win?.webContents.send('isMaximized'))
  // win.on('unmaximize', () => win?.webContents.send('isRestored'))
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  win = null
  winLoading = null
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('second-instance', () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized()) win.restore()
    win.focus()
  }
})

app.on('activate', () => {
  const allWindows = BrowserWindow.getAllWindows()
  if (allWindows.length) {
    allWindows[0].focus()
  } else {
    createWindow()
  }
})


const loadView = (title: string) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <meta charset="UTF-8">
        <style>
        body {
          overflow: hidden;
          padding: 0;
          margin: 0;
          height: 100%;
          width: 100%;
          position: relative;
          color: #B4B4B4;
          font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          -webkit-app-region: drag;
        }
        svg {
          // width: 50px;
          height: 70px;
          color: #0099ff;
        }
        main {
          display: grid;
          place-items: center;
          place-content: center;
          height: 100vh;
        }
        h1 {
          padding: 0;
          margin: 0;
          color: #B4B4B4;
          font-family: tahoma;
          font-size: 3rem;
          font-weight: 100;
          line-height: 1.5;
          text-transform: uppercase;
          white-space: nowrap;
          overflow: hidden;
          position: relative;
          width: 550px;
          transform: scale(0.38);
        }
        h1 span {
          font-size: 40px;
          margin-left: 40px;
        }
        .message {
          background-color: #23a3e9;
          color: #23272e;
          display: block;
          font-weight: 600;
          overflow: hidden;
          position: absolute;
          padding-left: 0.5rem;
          top: 0.2rem;
          left: 270px;
          animation: openclose 5s ease-in-out infinite;
        }
        .word1, .word2, .word3 {
          font-family: tahoma;
        }
        @keyframes openclose {
          0% {top: 0.2rem;width: 0;}
          5% {width: 0;}
          15% {width: 200px;}
          30% {top: 0.2rem;width: 200px;}
          33% {top: 0.2rem;width: 0;}
          35% {top: 0.2rem;width: 0;}
          38% {top: -4.5rem;}
          48% {top: -4.5rem;width: 180px;}
          62% {top: -4.5rem;width: 180px;}
          66% {top: -4.5rem;width: 0;text-indent: 0;}
          71% {top: -9rem;width: 0;text-indent: 5px;}
          86% {top: -9rem;width: 285px;}
          95% {top: -9rem;width: 285px;}
          98% {top: -9rem;width: 0;text-indent: 5px;}
          100% {top: 0;width: 0;text-indent: 0;}
        }
        .created {
          font-size: 0.7rem;
          opacity: 0.2;
        }
        </style>
      </head>
      <body>
        <main>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11.5 1a.5.5 0 0 0-.5.5v3.793L9.854 8.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L12 9.293V5.5a.5.5 0 0 0-.5-.5zM3.56 7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11h1.06V7.01z"></path></svg>
          <h1>
            <span>always be</span>
            <div class="message">
              <div class="word1">happy</div>
              <div class="word2">code</div>
              <div class="word3">creating</div>
            </div>
          </h1>
          <span class='created'>Copyright (c) 2022 Luis Gabriel Janco</span>
        </main>
      </body>
    </html>
  `
}
