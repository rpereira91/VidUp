import {Component, OnInit} from '@angular/core';
import {Video} from '../../models/video';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currVideo: Video;
  constructor() {}

  ngOnInit() {
      this.currVideo = null;
  }

  public videoSelected(video: Video) {
    this.currVideo = video;
  }
}
