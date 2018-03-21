import {Component, OnInit, Output, EventEmitter, AfterViewInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from '../../models/video'



@Component({
  selector: 'app-sequence-editor',
  templateUrl: './sequence-editor.component.html',
  styleUrls: ['./sequence-editor.component.scss']
})
export class SequenceEditorComponent implements OnInit, AfterViewInit {
    @Output() onSelected =  new EventEmitter<Video>();
  videos: Video[];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
      this.videos = [
        this.createVideo('3xbmnYHhIr0'),
        this.createVideo('kzlUyrccbos'),
        this.createVideo('TdjAJeUy0zM'),
        this.createVideo('p2HmeaM8XsM'),
        this.createVideo('K9u8zFVjX1g')
      ]
  }

  ngAfterViewInit(){
    this.select(this.videos[0]);
  }

  public select(video: Video){
      this.onSelected.emit(video);
  }

  public createVideo(id: String): Video{
    return {
        'url': this.sanitizer.bypassSecurityTrustResourceUrl(`https://youtube.com/embed/${id}`),
        'img': this.sanitizer.bypassSecurityTrustResourceUrl(`https://img.youtube.com/vi/${id}/0.jpg`)
    }
  }
}
