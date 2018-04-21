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
  vid: number = 1;
  currentVid: number = 0;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
      this.videos = [
        this.createVideo('SzJ46YA_RaA'),
        this.createVideo('cSVDk-ugAQs'),
        this.createVideo('B0NtAFf4bvU'),
        this.createVideo('KtvwustmEDI'),
        this.createVideo('i5qpS_D8Law'),
        this.createVideo('mP4AWwp-5qY')
      ]
  }

  ngAfterViewInit(){
    this.select(this.videos[this.currentVid]);
  }
  public nextVideo(){
      this.currentVid+= 1;
    this.onSelected.emit(this.videos[this.currentVid]);
  }
  public prevVideo(){
    this.currentVid-= 1;
    this.onSelected.emit(this.videos[this.currentVid]);
  }
  public select(video: Video){
      this.onSelected.emit(video);
  }
  public addVideo(){
    if(this.vid <= 5){
      this.vid += 1;
    }
  }
  public deleteVideo(){
    if(this.vid > 0){
      this.vid -= 1;
    }
  }
  public createVideo(id: String): Video{
    return {
        'url': this.sanitizer.bypassSecurityTrustResourceUrl(`https://youtube.com/embed/${id}`),
        'img': this.sanitizer.bypassSecurityTrustResourceUrl(`https://img.youtube.com/vi/${id}/0.jpg`)
    }
  }
}
