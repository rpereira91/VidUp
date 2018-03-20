const electron = require('electron');

const dialog = electron.dialog;
const url = require('url');
const path = require('path');
const fs = require('fs');
//const smalltalk = require('smalltalk');
const{app,BrowserWindow, Menu} = electron;

let mainWindow;
let addWindow;
var fileName = "New File";
//when app is ready
app.on('ready', function(){
    //create a new window
    mainWindow = new BrowserWindow({});
    //load html into window
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'mainWindow.html'),
      protocol: 'file:',
      slashes: true  
    }));

    //build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //insert
    Menu.setApplicationMenu(mainMenu);
});
//new window
function createNewWindow(){
    dialog.showSaveDialog((fileNames) => {

    });
  }
//open
  function createOpenWindow(){
    dialog.showOpenDialog((fileNames) => {

    });
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
  ];