import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        ' Bearer BQAzKP_pvLVwq8CKgIkUCgkLT8Vq24kjG6fuBMlfJnTFkBrPoUZc20426c8jMycdxz5WibnVpF4JRDhdlokDvmjJ7nm_RObMpEImRuZzCu8_Y9RztgmbIouKWvqTZarHq2X6V4O0RIZT_oXwen8Iib9NseEWmeSRM9CieEoQ0-pberYpWhMnmp35_VBkxxyb2E4b_IdEhkONpXs'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }


  searchArtist(query:string){
    const url = `https://api.spotify.com/v1/search?q=${query}&type=artist`;
    const headers = new HttpHeaders({
      Authorization:
        ' Bearer BQAzKP_pvLVwq8CKgIkUCgkLT8Vq24kjG6fuBMlfJnTFkBrPoUZc20426c8jMycdxz5WibnVpF4JRDhdlokDvmjJ7nm_RObMpEImRuZzCu8_Y9RztgmbIouKWvqTZarHq2X6V4O0RIZT_oXwen8Iib9NseEWmeSRM9CieEoQ0-pberYpWhMnmp35_VBkxxyb2E4b_IdEhkONpXs'
    });

    let obsArtist = this.http.get(url, { headers });
    return obsArtist;


  }

  searchAlbum(query:string){
    const url = `https://api.spotify.com/v1/search?q=${query}&type=album`;
    const headers = new HttpHeaders({
      Authorization:
        ' Bearer BQAzKP_pvLVwq8CKgIkUCgkLT8Vq24kjG6fuBMlfJnTFkBrPoUZc20426c8jMycdxz5WibnVpF4JRDhdlokDvmjJ7nm_RObMpEImRuZzCu8_Y9RztgmbIouKWvqTZarHq2X6V4O0RIZT_oXwen8Iib9NseEWmeSRM9CieEoQ0-pberYpWhMnmp35_VBkxxyb2E4b_IdEhkONpXs'
    });

    let obsAlbum = this.http.get(url, { headers });
    return obsAlbum;


  }
}