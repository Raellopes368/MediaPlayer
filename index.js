const { BrowserWindow, app, screen } = require('electron');

require('electron-reload')(__dirname);

function createWindow () {
  const {  height } = screen.getPrimaryDisplay().workAreaSize;
  const win = new BrowserWindow({
    width: 520,
    height,
    webPreferences: {
      nodeIntegration: true,
      disableHtmlFullscreenWindowResize: false
    },
    titleBarStyle: 'hidden',
    autoHideMenuBar: true,
    resizable: false
  })

  // win.setMenu(null)

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})