import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const overlayInOut = trigger('overlayInOut', [
  transition(':enter', [
    style({transform: " scale(.2)", borderRadius: "1000px", opacity: 0}),
    animate('.6s cubic-bezier(0.64, 0, 0.78, 0)', style({transform: "scale(1.5)", borderRadius: "1000px", opacity: 1}))

  ]),
  transition(':leave', [
    animate('.6s cubic-bezier(0.22, 1, 0.36, 1)', style({transform: " scale(0)", borderRadius: "400px", opacity: 0}))
  ])
]);
