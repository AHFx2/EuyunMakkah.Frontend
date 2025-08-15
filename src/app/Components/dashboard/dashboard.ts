import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from './Services/dashboard-service';
import { Stats } from './Models/stats';
import Swal from 'sweetalert2';
import { DashboardRecords } from "../dashboard-records/dashboard-records";
import { SignalrService } from './Services/signalr.service';
import { GarbageRecord } from './Models/garbage-record';

@Component({
  selector: 'app-dashboard',
  imports: [DecimalPipe, CommonModule, DashboardRecords],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  Stats: Stats | null = null;
  constructor(private _dashboardService: DashboardService, private _signalRService:SignalrService) {}
  ngOnInit(): void {
    this._dashboardService.GetStats().subscribe({
      next: (response) => {
        this.Stats = response.data;
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

    this._signalRService.newRecord$.subscribe({
      next: data => {
        console.log("From the dashboard");
        if (this.Stats != null && data != null)
        {
          this.Stats.totalGarbges += 1;
          if (data.status == "Unprocessed")
          {
            this.Stats.totalUnProcessdGarbges += 1;
          }

          else 
          {
            this.Stats.totalProcessdGarbges += 1;
          }
        }
      }
    })
  }
}
