import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';



@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  
  onePet = {};
  notFoundError :any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.showOnePet(params['id']);
    });
  }

  showOnePet(id: String) { 
    let observable = this._httpService.getPetByID(id);
    observable.subscribe(data => {
      if (data['errors']) {
        console.log(data);
        this.notFoundError = {message: "ID is not found. Please try with correct ID or create a new one."};
      }
      else{
        this.onePet = data;
      }
    });
  }

  onButtonDelete(id){
    let observable = this._httpService.deletePetByID(id);
    observable.subscribe(data => {
      if (data['errors']) {
        console.log(data);
      }
      this._router.navigate(['/']);
    });
  }

  onLike(id){
    let observable = this._httpService.addLike(id, this.onePet);
    observable.subscribe(data => {
      if (data['errors']) {
        console.log(data);
      }
      this.showOnePet(this.onePet['_id']);
    });
  }
  
}
