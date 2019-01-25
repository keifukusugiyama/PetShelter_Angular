import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPets(){
    //run http get request to /api/pets (express routes.js and controller.js) and return to caller
    return this._http.get('/api/pets');
  }

  getPetByID(id: String){
    //run http get request to /api/pets/id with the passed in id parameter, goes to express routes.js and controller.js and return to caller
    return this._http.get(`/api/pets/${id}`);
  }

  addPet(newPet){
    return this._http.post('/api/pets', newPet);
  }

  updatePetByID(id: String, onePet){
    return this._http.put(`/api/pets/${id}`, onePet);
  }

  deletePetByID(id: String){
    return this._http.delete(`/api/pets/${id}`);
  }

  addLike(id:String, onePet){
    return this._http.put(`/api/pets/${id}/like`, onePet);
  }

}
