import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Directive({
  selector: '[appAddConfirmation]'
})
export class AddConfirmationDirective {
  @Input('question') question: string = '';
  @Output('response') response = new EventEmitter<boolean>();
  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    const answer = confirm(this.question);
    this.response.emit(answer);
  }
}
