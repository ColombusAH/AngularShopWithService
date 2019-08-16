import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  ElementRef,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.css']
})
export class SocialLinkComponent implements AfterContentInit {
  @ContentChildren('link') socialLinks: QueryList<ElementRef>;
  constructor() {}

  ngAfterContentInit(): void {
    this.socialLinks.forEach(el => {
      el.nativeElement.target = '_blank';
    });
  }
}
