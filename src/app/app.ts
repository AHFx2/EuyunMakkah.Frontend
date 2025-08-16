import { Component, OnInit, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SignalrService } from './Components/dashboard/Services/signalr.service';
import { MapComponent } from "./Components/map-component/map-component";
// import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@Component({
  selector: 'app-root',
  imports: [RouterModule, MapComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {

  constructor(private _signalRService: SignalrService) {
    
  }
  ngOnInit(): void {
    // this._signalRService.startConnection();
  }
  protected readonly title = signal('EuyunMakkah');
}
