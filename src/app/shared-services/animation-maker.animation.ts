

import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group,
  animation,
  AnimationTriggerMetadata
} from '@angular/animations';


var list1 = []
for(let i  = 0; i <= 100 ; i ++){
  var style_show_r = style({
    transform : 'translateX(' + -1*i + "%)",
  });
  var style_show_l = style({
    transform : 'translateX(' + i + "%)",
  });
  var state1 = state("_sr_"+i, style_show_r);
  var state2 = state("_sl_"+i, style_show_l);
  list1.push(state1);
  list1.push(state2);
}

list1.push(transition("*<=>*", animate(300)));

export const  slider100 = trigger("slider100", list1);


