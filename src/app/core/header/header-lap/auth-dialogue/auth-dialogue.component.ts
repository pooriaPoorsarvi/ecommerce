import { SpinnerService } from 'src/app/shared-services/spinner.service';
import { BrandService } from './../../../../shared-services/brand.service';
import { DialogData } from './auth-dialouge.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { interval } from 'rxjs';

@Component({
  selector: 'app-auth-dialogue',
  templateUrl: './auth-dialogue.component.html',
  styleUrls: ['./auth-dialogue.component.css'],
  providers : [SpinnerService]
})
export class AuthDialogueComponent implements OnInit {

  login : boolean;
  spinner_needed : boolean = false;

  constructor(
    public spinnerService : SpinnerService,
    public dialogRef: MatDialogRef<AuthDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public brand_service : BrandService,
    ) {
      this.login = this.data.login;
    }

  ngOnInit() {
    this.spinner_needed = this.spinnerService.in_use_snapp_shot;
    this.spinnerService.in_use_buffer.subscribe(
      (value) => {
        this.spinner_needed = value;
      }
    );
  }


}
