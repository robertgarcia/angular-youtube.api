import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl:string = "https://www.googleapis.com/youtube/v3/";
  private apiKey:string = "AIzaSyCuZ9nnarxBY4FEwp8CBcxciBSK9Jbyb0A";
  private playlist:string = "UUuaPTYj15JSkETGnEseaFFg";
  private nextPageToken:string = "";

  constructor(
    public http:Http,
    public httpClient:HttpClient
  ) { }

  getVideos(){
    let url = `${ this.youtubeUrl }playlistItems?part=snippet&maxResults=10&playlistId=${ this.playlist }&key=${ this.apiKey }`;
    
    /*let url = `${ this.youtubeUrl }playlistItems`;
    let params: URLSearchParams = new URLSearchParams();
    params.set('part', 'snippet');
    params.set('maxResults', '10');
    params.set('playlistId', this.playlist);
    params.set('key', this.apiKey);*/

    return this.httpClient.get( url ).pipe(map( (resp:any) => {
      //console.log(resp['nextPageToken']);
      this.nextPageToken = resp['nextPageToken'];
      let videos:any[] = [];
      for(let video of resp.items){
        //console.log(video.snippet);
        videos.push(video.snippet)
      }
      return videos;
    }));
    //return this.http.get( url, { search: params } );
  }
}
