import { Component } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  templateUrl: './marvellous.component.html',
  styleUrls: ['./marvellous.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class MarvellousComponent {
  public Information: string=""; // Changed 'Information' to 'information' for consistency

  

  public marvellousEvent() {
    console.log("Button was clicked");
  }

  public angularEvent() {
    this.Information = 'Angular button pressed'; 
  }
  public PythonEvent(Value:any)
  {
    console.log("Value");
  }
}
