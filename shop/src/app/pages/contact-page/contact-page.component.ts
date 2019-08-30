import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  model = { email: '', subject: '', message: '' };
  submitted = false;

  onSubmit(userResponse: boolean) {
    if (userResponse) {
      this.submitted = true;
      console.log(this.model);
    }
  }
}
