const { app, BrowserWindow } = require('electron');



app.whenReady().then(() => {
  createWindow();
})
  
const createWindow = () =>{
  let selectedPage = "graphTab";

  //Create window
  const myWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  //load a webpage
  if(selectedPage == "graphTab"){
    myWindow.loadFile('graphTab.html');
  }
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})