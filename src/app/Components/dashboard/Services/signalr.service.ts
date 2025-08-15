import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { RecivedGarbageRecord } from '../Models/recived-garbage-record';
import { BehaviorSubject } from 'rxjs';
import { GarbageRecord } from '../Models/garbage-record';

@Injectable({
  providedIn: 'root',
})
export class SignalrService {
  private hubConnection!: signalR.HubConnection;
  private newRecordSource = new BehaviorSubject<GarbageRecord | null>(null);
  public newRecord$ = this.newRecordSource.asObservable();

  constructor() {}
  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('ws://localhost:5260/detectionNotifierHub', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('SignalR Connection started'))
      .catch((err) =>
        console.log('Error establishing SignalR connection: ' + err)
      );

    this.hubConnection.on(
      'RecivedGarbageRecord',
      (recived: GarbageRecord) => {
        this.newRecordSource.next(recived); // بث البيانات الجديدة
      }
    );
  };

  stopConnection() {
    if (this.hubConnection) {
      this.hubConnection.stop();
    }
  }
}
