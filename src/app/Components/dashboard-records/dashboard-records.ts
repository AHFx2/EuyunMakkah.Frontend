import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { GarbageRecord } from '../dashboard/Models/garbage-record';
import { DashboardService } from '../dashboard/Services/dashboard-service';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GarbageDetails } from '../garbage-details/garbage-details';
import { SignalrService } from '../dashboard/Services/signalr.service';
import { StatusColor } from '../dashboard/Directives/status-color';

@Component({
  selector: 'app-dashboard-records',
  imports: [StatusColor],
  templateUrl: './dashboard-records.html',
  styleUrl: './dashboard-records.css',
})
export class DashboardRecords implements OnInit, OnDestroy {
  Records: GarbageRecord[] = [];

  constructor(
    private _dashboardService: DashboardService,
    private modalService: NgbModal,
    private _signalRService:SignalrService
  ) {}

  ngOnDestroy(): void {
    this._signalRService.stopConnection();
  }

  ngOnInit(): void {
    this._dashboardService.GetGarbageRecords().subscribe({
      next: (response) => {
        this.Records = response.data;
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'لا يوجد معلومات للحالة',
        });
      },
      complete: () => {},
    });

    
    this._signalRService.newRecord$.subscribe(data => {
      if (data != null)
      {
        this.Records.unshift(data);
      }
    })
  }
  openDetails() {
    this.modalService.open(GarbageDetails, { centered: true, size: 'lg' });
  }
}
