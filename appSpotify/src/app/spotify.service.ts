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
        'Bearer BQAFtwKtPOhByPGt1TSWEmI720KRoarJElmQjsPCelKCq-Gk3Qf5qDvGRTpjYD_okdF5pFihG5-t3vLbK-2auP5RFsJwUx5am4pJJqNjfnx5RQr69GcnLUecjjAvaXSdGsTloJvH9ntotz-VrckWFPoCMnpP279oE2C1mawpQwQgJG8Aw47_dZKNgkMtPphWfaVbm6GpIe8jbTA'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}