import {Component, OnInit} from '@angular/core';
import {SidebarRow} from '../../models/sidebar-row';
import {SidebarSection} from '../../models/sidebar-section';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sections: SidebarSection[];

  constructor() {}

  ngOnInit() {
    this.sections = [
      {
        'title': 'Edit',
        'rows': [
          {'title': 'Undo', 'icon': 'insert_emoticon'},
          {'title': 'Redo', 'icon': 'insert_emoticon'},
          {'title': 'Delete', 'icon': 'insert_emoticon'},
        ]
      },
      {
        'title': 'Tools',
        'rows': [
          {'title': 'Select', 'icon': 'insert_emoticon'},
          {'title': 'Trim', 'icon': 'insert_emoticon'},
          {'title': 'Snap', 'icon': 'insert_emoticon'},
        ]
      },
      {
        'title': 'Transitions',
        'rows': [
          {'title': 'Undo', 'icon': 'insert_emoticon'},
          {'title': 'Redo', 'icon': 'insert_emoticon'},
          {'title': 'Delete', 'icon': 'insert_emoticon'},
        ]
      },
      {
        'title': 'Filters',
        'rows': [
          {'title': 'Undo', 'icon': 'insert_emoticon'},
          {'title': 'Redo', 'icon': 'insert_emoticon'},
          {'title': 'Delete', 'icon': 'insert_emoticon'},
        ]
      }    
    ]
  }
}
