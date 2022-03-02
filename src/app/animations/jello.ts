import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';


export const jello = trigger('jello', [
  state('false', style('*')),
  state('true', style('*')),
  transition('false => true',animate(900, keyframes([
    style({transform:"scale(1,1)", offset:0}),
    style({transform:"scale(.75,1.25)", offset:.3}),
    style({transform:"scale(1.25,.75)", offset:.4}),
    style({transform:"scale(.85,1.15)", offset:.5}),
    style({transform:"scale(1.05,.95)", offset:.65}),
    style({transform:"scale(.95,1.05)", offset:.75}),
    style({transform:"scale(1,1)", offset:1}),
  ]))),
]);

