import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  miles: number;
  kilometers: number;

  convert() {
    this.kilometers = this.miles * 1.60934;
  }
}
