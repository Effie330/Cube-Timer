const { app, BrowserWindow } = require('electron');



app.whenReady().then(() => {
  createWindow();
})
  
const createWindow = () =>{

  //Create window
  const myWindow = new BrowserWindow({
    width: 1400,
    height: 1000,
    webPreferences: {
      nodeIntegration: true
    }
  });

  //Loading graph tab by default
  myWindow.loadFile('graphTab.html');
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})