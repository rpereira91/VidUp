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
            dialog.showMessageBox({ type: "info",
            message: "New project started",
            detail: "Select where you want to save the file in the local directory" });
          }
        },
        {
          label:'Open Project',
          accelerator: 'Ctrl+O',
          click(){
            //CODE TODO
            dialog.showMessageBox({ type: "info",
            message: "File Opened!",
            detail: "Opened previous project" });
        }
        },
        {
          label:'Save Project',
          accelerator: 'Ctrl+S',
          click(){
            //CODE TODO
            dialog.showMessageBox({ type: "info",
            message: "File Saved!",
            detail: "Select where you want to save the file to" });
          }
        },
        {
          label:'Import video',
          accelerator: 'Ctrl+I',
          click(){
            //CODE TODO
            dialog.showMessageBox({ type: "info",
            message: "Video imported!",
            detail: "The imported video will be added to the sequence editor" });
          }
        },
        {
            label:'Export Video',
            accelerator: 'Ctrl+E',
            click(){
              //CODE TODO
              dialog.showMessageBox({ type: "info",
              message: "Select Video Preset",
              buttons: ["Hi-Res","Space-saving","Facebook","Instagram","YouTube","GIF"],
              detail: "Select one of the following pre-sets for the video" });
              createNewWindow();
              dialog.showMessageBox({ type: "info",
              message: "Video Exported!"});
            }
          },
        {
          label: 'Quit',
          accelerator: 'Ctrl+Alt+Q',
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
                buttons: ["OK"],
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
              dialog.showMessageBox({ type: "info",
              message: "\"Trim\" tool selected",
              buttons: ["OK"],
              detail: "The trim tool can be used to fix the length of the video segments or the video as a whole" });
            }
          },
          {
            label:'Snapshot',
            click(){
              //CODE TODO
              dialog.showMessageBox({ type: "info",
              message: "\"Snapshot\" tool selected",
              buttons: ["OK"],
              detail: "Save a snapshot of the current video instance" });
            }
          },
          {
            label:'Filter Menu',
            click(){
              //CODE TODO

              dialog.showMessageBox({ type: "info",
              message: "Select a filter to use",
              buttons: ["Black and White", "Color Tint","Gaussian Blur"],
              detail: "Save a snapshot of the current video instance" });
            }
          },
          {
            label:'Transition Menu',
            click(){
              //CODE TODO
            }
          }
        ]
      }, {
        label: 'Audio',
        submenu: [
            {
                label: 'Adjust audio level',
                click: function () {
                    dialog.showMessageBox({ type: "info",
                    message: "Adjust audio level menu",
                    buttons: ["OK"],
                    detail: "Fix the volume of the audio channels for current selected clip\nYou're able to use an audio clip to overwrite the clips audio" });
                    //CODE TODO
                }
            },
            {
                label: 'Add audio',
                click: function () {
                    dialog.showMessageBox({ type: "info",
                    message: "Add an audio clip",
                    buttons: ["OK"],
                    detail: "Adds an audio clip to sequence editor" });
                    //CODE TODO
                }
            }
        ]
    },
    {
        label: 'Extra',
        submenu:[
          {
            label:'Help',
            click(){
              dialog.showMessageBox({ type: "info",
              message: "Help",
              buttons: ["OK"],
              detail: "This is just a prototype, there is no functionality yet\nTo add a video click the  plus in the squence editor \nTo delete a video click the garbage bin\nTo make a thumbnail bigger click on it\nTo scroll through the videos press next and previous" });
            }
          },
          {
            label:'About',
            click(){
              dialog.showMessageBox({ type: "info",
              message: "About",
              buttons: ["OK"],
              detail: "Phase 1:\nPatrick Deshwal and Ralph Pereira" });
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
