import { app, BrowserWindow, screen, Menu } from 'electron';
import * as path from 'path';
import * as url from 'url';

// const dialog = remote.dialog;
const {dialog} = require('electron')
let win, serve;
const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

try {
  require('dotenv').config();
} catch {
  console.log('asar');
}

function createWindow() {

  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height
  });

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //insert
    Menu.setApplicationMenu(mainMenu);

  if (serve) {
    require('electron-reload')(__dirname, {
    });
    win.loadURL('http://localhost:4200');
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}


//new window
function createNewWindow(){
    // dialog.showSaveDialog((fileNames) => {

    // });
  }
//open
  function createOpenWindow(){
    // dialog.showOpenDialog((fileNames) => {

    // });
  }
// Create menu template
const mainMenuTemplate =  [
    // Each object is a dropdown
    {
      label: 'File',
      submenu:[
        {
          label:'New Project',
          accelerator: 'Ctrl+N',
          click(){
            //CODE TODO
            createNewWindow();
            dialog.showErrorBox("New project started!","New project");
          }
        },
        {
          label:'Open Project',
          accelerator: 'Ctrl+O',
          click(){
            //CODE TODO
            createOpenWindow();  
            dialog.showErrorBox("File Opened!","Opened previous projec");
        }
        },
        {
          label:'Save Project',
          accelerator: 'Ctrl+S',
          click(){
            //CODE TODO
            createNewWindow();
            dialog.showErrorBox("File Saved!","Saved file");
          }
        },
        {
          label:'Import video',
          accelerator: 'Ctrl+Alt+I',
          click(){
            //CODE TODO
            createOpenWindow();  
            dialog.showErrorBox("Video imported!","The imported video will be added to the sequence editor");
          }
        },
        {
            label:'Export Video',
            click(){
              //CODE TODO
              dialog.showMessageBox({ type: "info",
              message: "Select Video Preset",
              buttons: ["Hi-Res","Space-saving","Facebook","Instagram","YouTube","GIF"],
              detail: "Select one of the following pre-sets for the video" });
              createNewWindow();
              dialog.showErrorBox("Video Exported!","The exported video will be created in the seclected directory.");
            }
          },
        {
          label: 'Quit',
          accelerator: 'Ctrl+Q',
          click(){
            app.quit();
          }
        }
      ]
    },{
        label: 'Edit',
        submenu:[
          {
            label:'Undo',
            accelerator: 'Ctrl+Z',
            click(){
              //CODE TODO
              dialog.showMessageBox({ type: "info",
                message: "Undo move",
                buttons: ["OK","Other"],
                detail: "Undo the last move\nImported files will be deleted, trimmed clips will be undone, etc" });
            }
          },
          {
            label:'Redo',
            accelerator: 'Ctrl+Y',
            click(){
              dialog.showMessageBox({ type: "info",
                message: "Redo undid move",
                buttons: ["OK"],
                detail: "Re do what was undone" });
              //CODE TODO
            }
          }
        ]
      },{
        label: 'Tools',
        submenu:[
          {
            label:'Select',
            click(){
              dialog.showMessageBox({ type: "info",
                message: "\"Select\" tool selected",
                buttons: ["OK"],
                detail: "The select tool can be used to select video clips, re-arrange the order of videos, and navigate through a video" });
              //CODE TODO
            }
          },
          {
            label:'Trim',
            click(){
              //CODE TODO
            }
          },
          {
            label:'Snapshot',
            click(){
              //CODE TODO
            }
          },
          {
            label:'Filter Menu',
            click(){
              //CODE TODO
            }
          },
          {
            label:'Transition Menu',
            click(){
              //CODE TODO
            }
          }
        ]
      },{
        label: 'Extra',
        submenu:[
          {
            label:'Help',
            click(){
              //CODE TODO
            }
          },
          {
            label:'About',
            click(){
              //CODE TODO
            }
          }
        ]
      }
  ]

try {

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
  // Catch Error
  // throw e;
}
