import {Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import {SidebarRow} from '../../models/sidebar-row';
import {SidebarSection} from '../../models/sidebar-section';

// import * as path from 'path';
// import * as url from 'url';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('mainVolume') input:ElementRef; 
  sections: SidebarSection[];
  volume: number = 50;
  constructor() {}

  ngOnInit() {
    this.volume = this.input.nativeElement.value;   
    this.sections = [
      {
        'title': 'Edit',
        'rows': [
          {'title': 'Undo', 'icon': 'undo',},
          {'title': 'Redo', 'icon': 'redo'},
        ]
      },
      {
        'title': 'Tools',
        'rows': [
          {'title': 'Select', 'icon': 'mouse'},
          {'title': 'Trim', 'icon': 'content_cut'},
          {'title': 'Snap', 'icon': 'camera_alt'},
        ]
      },
      {
        'title': 'Transitions',
        'rows': [
          {'title': 'Slide', 'icon': 'slideshow'},
          {'title': 'Fade', 'icon': 'slideshow'},
          {'title': 'Zoom in', 'icon': 'slideshow'},
        ]
      },
      {
        'title': 'Filters',
        'rows': [
          {'title': 'Black and white', 'icon': 'format_color_fill'},
          {'title': 'Color Corrector', 'icon': 'format_color_fill'},
          {'title': 'Blur', 'icon': 'format_color_fill'},
        ]
      }    
    ]
    
  }
  ngOnChanges(){
    this.volume = this.input.nativeElement.value;       
  }
  public volumeChange(){
    this.volume = this.input.nativeElement.value;   
  }
  public undoPopUp(){
<<<<<<< Updated upstream
    console.log(this.input.nativeElement.value);    
=======
    // const {dialog} = require('electron')
    
    // dialog.showErrorBox("File Opened!","Opened previous projec");
    // // app.quit();
>>>>>>> Stashed changes
  }
}
