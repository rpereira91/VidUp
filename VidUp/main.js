const electron = require('electron');

const dialog = electron.dialog;
const url = require('url');
const path = require('path');
const fs = require('fs');
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
          }
        },
        {
          label:'Open Project',
          accelerator: 'Ctrl+O',
          click(){
            //CODE TODO
            createOpenWindow();  
        }
        },
        {
          label:'Save Project',
          accelerator: 'Ctrl+S',
          click(){
            //CODE TODO
            createNewWindow();
          }
        },
        {
          label:'Import video',
          accelerator: 'Ctrl+Alt+I',
          click(){
            //CODE TODO
            createOpenWindow();  
          }
        },
        {
            label:'Export Video',
            click(){
              //CODE TODO
              createNewWindow();
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
            }
          },
          {
            label:'Redo',
            accelerator: 'Ctrl+Y',
            click(){
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