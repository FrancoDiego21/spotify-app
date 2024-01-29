import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  obsAlbum : Observable<Object>;
  search: string;
  res: any;
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public spotify : SpotifyService){
  } 

  trova(search:HTMLInputElement):void{
    if (!search.value){
      return;
    }
    this.search = search.value;
    this.obsAlbum = this.spotify.searchAlbum(this.search);
    this.obsAlbum.subscribe((data)=>this.res=data); //visualizzo la ricerca sulla console
  }
}
