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
        'Bearer BQA64uGraUiqdpIaUCiPI7kLnhcU_gIe6fG3n_suYJQzzqiZ1FBeo8oE4rCWzfn3y5bAuRAiX-z70YFgj1iRo9zOC-DqN352tNZUbntGpJYxZRDZVxl2qIEhUvyU2LkwyIcxQjtsfJCCcNob4dKSaIS0e-81dk_OWVbiL3V9uBrZdzL2iwN8vd1G7uFpZmU1hLnY-G_0gkfpx_0'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}