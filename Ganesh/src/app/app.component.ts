import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarvellousComponent } from './marvellous/marvellous.component';
import { MyComponentComponent } from './my-component/my-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MarvellousComponent,MyComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ganesh';
}
