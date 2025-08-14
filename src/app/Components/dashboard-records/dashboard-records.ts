import { Component, Input, OnInit } from '@angular/core';
import { GarbageRecord } from '../dashboard/Models/garbage-record';
import { DashboardService } from '../dashboard/Services/dashboard-service';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GarbageDetails } from '../garbage-details/garbage-details';

@Component({
  selector: 'app-dashboard-records',
  imports: [],
  templateUrl: './dashboard-records.html',
  styleUrl: './dashboard-records.css',
})
export class DashboardRecords implements OnInit {
  Records: GarbageRecord[] = [];

  constructor(
    private _dashboardService: DashboardService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this._dashboardService.GetGarbageRecords().subscribe({
      next: (response) => {
        console.log(response);
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
  }
  openDetails() {
    this.modalService.open(GarbageDetails, { centered: true, size: 'lg' });
  }
}
