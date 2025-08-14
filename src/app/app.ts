import { Component, signal } from '@angular/core';
import { Dashboard } from "./Components/dashboard/dashboard";
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('EuyunMakkah');
}
