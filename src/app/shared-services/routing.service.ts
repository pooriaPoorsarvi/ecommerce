import { SpinnerService } from 'src/app/shared-services/spinner.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class RoutingService{
  constructor(private router : Router,
              private route : ActivatedRoute,
              private spinnerService : SpinnerService){}

  goToShoppingCart(){
    var key = this.spinnerService.getUniqueKey();
    this.spinnerService.add(key);
    this.router.navigate(['payment']).then(
      ()=>{
        this.spinnerService.remove(key);
      }
    );
  }
}






