const { app, BrowserWindow } = require('electron');



app.whenReady().then(() => {
  createWindow();
})
  
const createWindow = () =>{

  //Create window
  const myWindow = new BrowserWindow({
    width: 1400,
    height: 1000,
    minWidth: 1100,
    minHeight: 700,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  //Loading graph tab by default
  myWindow.loadFile('graphTab.html');
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})