import { animate, sequence, state, style, transition, trigger } from "@angular/animations";


const dropIn =  sequence([
  animate('.4s ease-in', style({transform: 'translateY(0px) scale(1,1)', opacity:'1'})),
  animate('.1s cubic-bezier(0.22, 1, 0.36, 1)', style({transform: 'translateY(0px) scale(1.3,.6)'})),
  animate('.03s cubic-bezier(0.32, 0, 0.67, 0)', style({transform: 'translateY(0px) scale(1,1)'})),
  animate('.2s ease-out', style({transform: 'translateY(-70px)  ', opacity:'1'})),
  animate('.2s ease-in', style({transform: 'translateY(0)', opacity:'1'})),
  animate('.1s ease-out', style({transform: 'translateY(-28px)', opacity:'1'})),
  animate('.1s ease-in', style({transform: 'translateY(0px)', opacity:'1'})),
  animate('.05s ease-out', style({transform: 'translateY(10px)', opacity:'1'})),
  animate('.05s ease-in', style({transform: 'translateY(0px)', opacity:'1'})),
])

const dropUp =   animate('400ms 50ms cubic-bezier(.11,.79,.8,.88)', style({ transform: "translateY(-150%)" }))


export const dropInOut = trigger('dropInOut', [
  state('false', style({transform: 'translateY(-500px) scale(.9,1.1)', opacity:'0'})),
  state('true', style({transform: 'translateY(0px) scale(1,1)', opacity:'1'})),
  transition('false => true',[dropIn]),
  transition('true => false',[animate('100ms', style({transform: "scale(.8, 1.2)"})),dropUp])]);

