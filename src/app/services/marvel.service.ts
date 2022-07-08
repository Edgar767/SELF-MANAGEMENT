import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  urlMarvel = environment.urlMarvelApi;

  constructor(private http: HttpClient) { }

  getComic(){

    var publickey = '02303d7fe9940bd0127b55ce2106aabb';
    var privatekey = '7d81ac092669079f2faa01c4d7d62f649aa9e470';
    var ts = "2022";
    var stringToHash = ts + privatekey + publickey;
    var hash = "ce295c2b8f1e5767d17051a9466e1257";
    var baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
    var limit = 20;
    var url = baseUrl + '?limit=' + limit + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;

    return this.http.get(`${url}`);
  }

}
