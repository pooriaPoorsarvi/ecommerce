import { BootstrapSizeService, SizeStateBootstrap } from './../../shared-services/bootstrap-size.service';
import { Router } from '@angular/router';
import { BrandService } from './../../shared-services/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  sb : SizeStateBootstrap;

  constructor(public bs : BrandService,
              public router : Router,
              public bootstrapSizeService : BootstrapSizeService) { }
  ngOnInit() {

    this.sb = this.bootstrapSizeService.stateSnapshot;

    this.bootstrapSizeService.stateBuffer.subscribe(
      (sb) => {
        this.sb = sb;
      }
    );

  }

  reRoute(ins : string[]){
    this.router.navigate(ins);
  }

}
