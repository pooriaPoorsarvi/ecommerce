import { MainPageDataServerService } from './../../../dataModules/MainPageDataServer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page-lap',
  templateUrl: './main-page-lap.component.html',
  styleUrls: ['./main-page-lap.component.css']
})
export class MainPageLapComponent implements OnInit {

  constructor(public data : MainPageDataServerService) { }

  ngOnInit() {
  }

}
