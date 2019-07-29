import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  videoSel: any;
  constructor(
    public _yts: YoutubeService
  ) {
    _yts.getVideos().subscribe(resp => {
      console.log(resp);
      this.videos = resp;
    });
  }

  ngOnInit() {
  }

  verVideo( video: any ) {
    this.videoSel = video;
    $('#exampleModal').modal();
  }

}
