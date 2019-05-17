import { BrandService } from './../../shared-services/brand.service';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/dataModules/User.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user : UserModel;

  constructor(public userService : UserService,
              public brandService : BrandService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(
      (user) => {
        this.user = user;
        if(this.user.image_profile){
          console.log("hey");
        }
      }
    );
  }

}
