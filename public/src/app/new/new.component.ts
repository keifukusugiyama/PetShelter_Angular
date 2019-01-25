import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newPet = {
    Name: "",
    type: "",
    description:"",
    skills:[]
  };
  createNewErrors : any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
  }

  onSubmitNew() {
    let observable = this._httpService.addPet(this.newPet);
    observable.subscribe(data => {
      if (data['errors']) {
        console.log(data);
        this.createNewErrors = data;
      }
      else{
        this.goHome();
      }
    });
  }

  goHome() {
    this._router.navigate(['/']);
  }

}
