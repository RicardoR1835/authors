import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  author = {
    name: '',
  }
  errors = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
  }

  onSubmit(author:any){
    this.errors = [];
    let observable = this._httpService.createAuthor(this.author);
    observable.subscribe(data => {
      if(data['message'] === "Success"){
      console.log("created author", data);
      this.author.name = '';
      this._router.navigate(['/']);
    } else {
      this.errors.push(data['error']['errors']['name']['message'])
    }
    })
  }



}
