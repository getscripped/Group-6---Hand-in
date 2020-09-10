const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
let win;
function isDev() {
    return process.mainModule.filename.indexOf('app.asar') === -1;
};
function createWindow() {
    win = new BrowserWindow({
       width: 950, height: 800
       //resizable:false
      })
      app.whenReady().then(() => {
        let displays = screen.getAllDisplays()
        let externalDisplay = displays.find((display) => {
          return display.bounds.x !== 0 || display.bounds.y !== 0
        })

        if (externalDisplay) {
          win = new BrowserWindow({
            x: externalDisplay.bounds.x ,
            y: externalDisplay.bounds.y 
          })
        }
      })
    win.loadURL(url.format({
        pathname: path.join(__dirname, '../dist/index.html'),
        protocol: 'file',
        slashes: true
    }));
    if (isDev()) {
        win.webContents.openDevTools()
    }
    win.on('closed', () => {
        win = null
    })
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
