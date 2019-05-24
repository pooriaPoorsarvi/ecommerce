import { BreakpointObserver } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


export class SizeStateBootstrap{
  xs = false;
  small = false;
  medium = false;
  large = false;
  xl = false;
}

@Injectable()
export class BootstrapSizeService{
  public stateSnapshot = new SizeStateBootstrap();
  public stateBuffer = new Subject<SizeStateBootstrap>() ;

  private setMode(mode : string, res : boolean){
    this.stateSnapshot[mode] = res;
    this.stateBuffer.next(this.stateSnapshot);
  }

// tslint:disable-next-line: member-ordering
  constructor(breakpointObserver: BreakpointObserver) {

    breakpointObserver.observe([
      "(max-width : 575.9999px)"
    ]).subscribe(
      event => this.setMode("xs", event.matches)
    );

    breakpointObserver.observe([
      "(min-width : 576px) and (max-width : 767.999px)"
    ]).subscribe(
      event => this.setMode("small", event.matches)
    );

    breakpointObserver.observe([
      "(min-width : 768px) and (max-width : 991.999px)"
    ]).subscribe(
      event => this.setMode("medium", event.matches)
    );

    breakpointObserver.observe([
      "(min-width : 992px) and (max-width : 1199.999px)"
    ]).subscribe(
      event => this.setMode("large", event.matches)
    );

    breakpointObserver.observe([
      "(min-width : 1200px)"
    ]).subscribe(
      event => this.setMode("xl", event.matches)
    );

    if(breakpointObserver.isMatched("(min-width : 1200px)")){
      this.setMode("xl", true);
    }else if(breakpointObserver.isMatched("(min-width : 992px)")){
      this.setMode("large", true);
    }else if(breakpointObserver.isMatched("(min-width : 768px)")){
      this.setMode("medium", true);
    }else if (breakpointObserver.isMatched("(max-width : 576px)")){
      this.setMode("small", true);
    }else{
      this.setMode("xs", true);
    }

  }
}

