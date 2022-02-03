const { app, BrowserWindow } = require('electron');



app.whenReady().then(() => {
  createWindow();
})
  
const createWindow = () =>{
  export var selectedPage = "timerTab";

  //Create window
  const myWindow = new BrowserWindow({
    width: 1400,
    height: 1000,
    webPreferences: {
      nodeIntegration: true
    }
  });

  //load a webpage
    
  if(selectedPage == "graphTab"){
    myWindow.loadFile('graphTab.html');
  }else if(selectedPage == "timerTab"){
    myWindow.loadFile('timerTab.html');
  } else if(selectedPage == "solveTimesTab"){
    myWindow.loadFile('solveTimesTab.html');
  }
  
  console.log(selectedPage);
}
export default selectedPage;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})