import { Component } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
  private jbtHeading: string;
  private jbtText: string;
  private jbtBtnText: string;
  private jbtBtnUrl: string;

  constructor() {
    this.jbtHeading = "Hello World"
    this.jbtText = "Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web." 
    this.jbtBtnText = "Read More"
    this.jbtBtnUrl = "/about"
  }
}