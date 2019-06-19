import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author = {
    name: '',
  }
  id = ''
  errors = []

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.id = params['id']

    });
    var x = this.getAuthor(this.id)
    console.log(x);
  }

  // onSubmit(){
  //   this.updateAuthor(this.id, this.author);
  //   this._router.navigate(['/']);
  // }

  onSubmit(id:any, author:any){
    let observable = this._httpService.updateAuthor(this.id, this.author);
    observable.subscribe(data=> {
      if(data['message'] === "Success"){
        this._router.navigate(['/']);
      } else {
        this.errors.push(data['error']['errors']['name']['message'])
      }
    })
  }

  getAuthor(id){
    let observable = this._httpService.getAuthor(id);
    observable.subscribe((data)=> {
      console.log("got the author!", data);
      console.log(data);
      console.log(data['data'].name)
      this.author.name = data['data'].name
    })
  }

}
