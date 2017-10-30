import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SpotifyService {
	private searchUrl: string;
	private artistUrl: string;
	private albumsUrl: string;
	private albumUrl: string;

    private redirect_uri:string;
    private client_id ='996080937ebb4594a0979146c9c0c121';
    private client_secret = '0bda3cfd213c4622bc6c562586568ec8';
	private access_token:string;
	private encoded = btoa(this.client_id + ':' + this.client_secret);
    private base64 = 'OTk2MDgwOTM3ZWJiNDU5NGEwOTc5MTQ2YzljMGMxMjE6MGJkYTNjZmQyMTNjNDYyMmJjNmM1NjI1ODY1NjhlYzg=';

	constructor(private _http: Http) {

	}

	getToken() {
        var params = ('grant_type=client_credentials');

        var headers = new Headers();
        headers.append( 'Authorization', 'Basic ' + this.encoded);
       
        headers.append('Content-Type' , 'application/x-www-form-urlencoded');

        return this._http.post('https://accounts.spotify.com/api/token', params , {headers : headers} )
        .map(res=> res.json());
	}

    searchMusic(str:string, type='artist' ,token:string) {
       	console.log(this.encoded); 
       	this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=50&type='+type;
       	let headers = new Headers();
       	headers.append('Authorization' , 'Bearer ' + token);

       	return this._http.get(this.searchUrl , {headers : headers})
       	.map(res => res.json());   
    }

    getArtist(id:string, token:string) {
       	console.log(this.encoded); 
       	this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
       	let headers = new Headers();
       	headers.append('Authorization' , 'Bearer ' + token);

       	return this._http.get(this.artistUrl , {headers : headers})
       	.map(res => res.json());   
    }


     getAlbums(artistId:string ,token:string) {
       this.albumsUrl = 'https://api.spotify.com/v1/artists/'+ artistId + '/albums/?query=&limit=50';
       let headers = new Headers();
       headers.append('Authorization' , 'Bearer ' + token);

       return this._http.get(this.albumsUrl , {headers : headers})
       .map(res => res.json());      
	}




   getAlbum(id:string ,token:string) {
       this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;
       let headers = new Headers();
       headers.append('Authorization' , 'Bearer ' + token);

       return this._http.get(this.albumUrl , {headers : headers})
       .map(res => res.json());
	}
}
