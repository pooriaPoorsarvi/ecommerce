import { BrandService } from './../../../../shared-services/brand.service';
import { DialogData } from './auth-dialouge.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { interval } from 'rxjs';

@Component({
  selector: 'app-auth-dialogue',
  templateUrl: './auth-dialogue.component.html',
  styleUrls: ['./auth-dialogue.component.css']
})
export class AuthDialogueComponent implements OnInit {

  login : boolean;

  constructor(
    public dialogRef: MatDialogRef<AuthDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public brand_service : BrandService,
    ) {
      this.login = this.data.login;
    }

  ngOnInit() {
  }


}
