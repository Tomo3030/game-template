import { animate, sequence, state, style, transition, trigger } from "@angular/animations";


export const scaleInOut = trigger('scaleInOut', [
  state('false', style({transform: 'scale(.1)', opacity:'0'})),
  state('true', style({transform: 'scale(1)', opacity:'1'})),
  transition('false => true',[animate('.2s ease-in')]),
  transition('true => false',[animate('.2s ease-out')])
]);

