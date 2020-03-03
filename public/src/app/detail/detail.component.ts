import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: any;
  thispet: any;
  seeLike = true;




  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params['id'];
    });
    this.getPetFromService();
    this.getPetForlike();
  }
  getPetFromService() {
    let observable = this._httpService.getOnePet(this.id);
    observable.subscribe(data => {
      console.log("Found our pet", data);
      this.thispet = data['data']
    })
  }

  getPetForlike() {
    let observable = this._httpService.getOnePet(this.id);
    observable.subscribe(data => {
      console.log("Found our pet", data);
      this.thispet = data['data']
      this.thispet.seeLike = true;
    })
  }
  onDelete(pet_id) {
    let delete_task = this._httpService.deletePet(pet_id);
    delete_task.subscribe(data => {
      //go back home here
      this.router.navigate(['']);
    })
  }
  onLike(thispet) {
    thispet.seeLike = false;
    let addLike = this._httpService.addOneLike(thispet._id, thispet);
    addLike.subscribe(data => {
      console.log("Got data from post back", data);
      this.getPetFromService();
    })
  }

}