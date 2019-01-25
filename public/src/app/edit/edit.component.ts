import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  onePet = {
    Name: "",
    type: "",
    description:"",
    skills:[]
  };

  EditErrors : any;

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
      if (data['message']) {
        console.log(data);
        this.EditErrors = {message: "ID is not found. Please try with correct ID or create a new one."};
      }
      else{
        console.log(data);
        this.onePet = data;
      }
    });
  }

  onSubmitEdit(){
    let observable = this._httpService.updatePetByID(this.onePet['_id'], this.onePet);
    observable.subscribe(data => {
      if (data['errors']) {
        this.EditErrors = data;
      }
      else{
        this._router.navigate([`/pets/${this.onePet['_id']}`]);
      }
    });
  }

}
