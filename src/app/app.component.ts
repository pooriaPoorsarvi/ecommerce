import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ecommerce';
  constructor(public route : ActivatedRoute) {}
  ngOnInit(){
  }
}
