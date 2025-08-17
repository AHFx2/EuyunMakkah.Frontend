import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/Services/dashboard-service';
import { ActivatedRoute } from '@angular/router';
import { GarbageDetailsClass } from '../dashboard/Models/garbage-details-class';
import { CommonModule } from '@angular/common';
import { StatusColor } from '../dashboard/Directives/status-color';

@Component({
  selector: 'app-garbage-details',
  imports: [CommonModule, StatusColor],
  templateUrl: './garbage-details.html',
  styleUrl: './garbage-details.css'
})
export class GarbageDetails implements OnInit{
  garbageDetails:GarbageDetailsClass | null = null;
  @Input() garbageId!:number;
  constructor(private _dashboardService:DashboardService, private route:ActivatedRoute) {
    
  }
  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this._dashboardService.GetGarbageDetails(id).subscribe({
      next: (res) => {
        this.garbageDetails = res.data;
        console.log(res.data)
        console.info(res.data.image)

      },
      error: () => {}



    })
  }

  getImage(fileName:string) {
    return "http://localhost:5260/uploads/images/" + fileName
  }
}
