// import { SizeState } from './size-compat.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


export class SizeState{
  xs  = false;
  small = false;
  medium = false;
  large = false;
  xl = false;
}

@Injectable()
export class SizeService{


  private state = new SizeState();
  public stateBuffer = new Subject<SizeState>() ;

  private setMode(mode : string, res : boolean){
    this.state[mode] = res;
    this.stateBuffer.next(this.state);
  }

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      "(max-width : 575.999px)"
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

  }
}































// var handset = breakpointObserver.observe([
//   Breakpoints.Small
// ]);
// handset.subscribe(
//   event => {this.setMode("handset", event.matches)}
// );
// var tablet = breakpointObserver.observe([
//   Breakpoints.Tablet
// ]);
// tablet.subscribe(
//   event => this.setMode("tablet", event.matches)
// );
// var web  = breakpointObserver.observe([
//   Breakpoints.Web
// ]);
// web.subscribe(
//   event => this.setMode("web", event.matches)
// );



// var xs = breakpointObserver.observe([
//   Breakpoints.XSmall
// ]);
// xs.subscribe(
//   event => this.setMode("xs", event.matches)
// );
// var small = breakpointObserver.observe([
//   Breakpoints.Small
// ]);
// small.subscribe(
//   event => this.setMode("small", event.matches)
// );
// var medium = breakpointObserver.observe([
//   Breakpoints.Medium
// ]);
// medium.subscribe(
//   event => this.setMode("medium", event.matches)
// );
// var large = breakpointObserver.observe([
//   Breakpoints.Large
// ]);
// large.subscribe(
//   event => this.setMode("large", event.matches)
// );
// var xl = breakpointObserver.observe([
//   Breakpoints.XLarge
// ]);
// xl.subscribe(
//   event => this.setMode("xl", event.matches)
// );
