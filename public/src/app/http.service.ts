import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  getAuthors(){
    return this._http.get('/authors')
  }

  getAuthor(id:any){
    return this._http.get(`/author/${id}`)
  }

  createAuthor(author:any){
    return this._http.post('/create', author)
  }

  updateAuthor(id:any, author:any){
    return this._http.put(`/update/${id}`, author)
  }

  destroyAuthor(id:any){
    return this._http.delete(`/destroy/${id}`)
  }

}