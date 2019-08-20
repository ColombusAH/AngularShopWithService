import { trigger, transition, animate, style } from '@angular/animations';

export let fade = trigger('fade', [
  transition(':enter', [style({ opacity: 0 }), animate(1000)])
]);
