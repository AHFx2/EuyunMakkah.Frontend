import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from './Services/dashboard-service';
import { Stats } from './Models/stats';
import Swal from 'sweetalert2';
import { DashboardRecords } from "../dashboard-records/dashboard-records";

@Component({
  selector: 'app-dashboard',
  imports: [DecimalPipe, CommonModule, DashboardRecords],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  Stats: Stats | null = null;
  constructor(private _dashboardService: DashboardService) {}
  ngOnInit(): void {
    this._dashboardService.GetStats().subscribe({
      next: (response) => {
        this.Stats = response.data;
        console.log(this.Stats);
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
}
