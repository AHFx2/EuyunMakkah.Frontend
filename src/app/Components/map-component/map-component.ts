import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
@Component({
  selector: 'app-map-component',
  imports: [],
  templateUrl: './map-component.html',
  styleUrl: './map-component.css',
})
export class MapComponent implements OnInit {
  map!: Leaflet.Map;
  cetroid: Leaflet.LatLngExpression = [5.16546865, -8.646513]
  ngOnInit() {
    // this.map = Leaflet.map('map', {
    //   center: this.cetroid,
    //   zoom: 12,
    // });

    // const title = Leaflet.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
    //   attribution:
    //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    //     maxZoom: 18,
    //     minNativeZoom: 10
    // });

    // title.addTo(this.map)

    var map = Leaflet.map('map').setView([51.505, -0.09], 13);

Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

Leaflet.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();
  }
}
