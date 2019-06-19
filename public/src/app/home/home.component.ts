import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors = {};

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(){
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      console.log("created author", data);
      this.authors = data['data'];
      console.log(this.authors)
    })
  }

  delete(id){
    let observable = this._httpService.destroyAuthor(id);
    observable.subscribe(data => {
      console.log('Deleting this author', data)
      this.getAuthors();
    })
    this.getAuthors();
    this._router.navigate(['/']);
  }

}
