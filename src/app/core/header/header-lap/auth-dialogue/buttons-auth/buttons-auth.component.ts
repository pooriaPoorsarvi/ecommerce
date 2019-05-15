import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buttons-auth',
  templateUrl: './buttons-auth.component.html',
  styleUrls: ['./buttons-auth.component.css']
})
export class ButtonsAuthComponent implements OnInit {


  // TODO this model can be deprecated and be implimented inside components themselves

  @Input() mssg : string ;

  constructor() { }

  ngOnInit() {
  }

}
