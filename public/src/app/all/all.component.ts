import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  pets: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    //run right after constructor
    this.getPetsFromService();
  }

  getPetsFromService(){
    let observable = this._httpService.getPets();
    observable.subscribe(data => {
      this.pets = data;
    });
  }
}
