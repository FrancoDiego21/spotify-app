import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  obsTrack : Observable<Object>;
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
    this.obsTrack = this.spotify.searchArtist(this.search);
    this.obsTrack.subscribe((data)=>this.res=data); //visualizzo la ricerca sulla console
  }
}
