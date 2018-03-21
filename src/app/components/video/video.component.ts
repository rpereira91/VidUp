import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

import {Video} from '../../models/video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() video: Video;
  //   videos: Video[];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // this.videos = [
    //   {'url': 'http://www.youtube.com/embed/3xbmnYHhIr0', 'title': ''},
    //   {'url': 'https://www.youtube.com/embed/kzlUyrccbos', 'title': ''}
    // ];
  }

  //   public getRandomVideoUrl(): SafeResourceUrl {
  //     let index = Math.floor(Math.random() * this.videos.length);
  //     return this.sanitizer.bypassSecurityTrustResourceUrl(
  //         this.videos[index].url);
  //   }
}