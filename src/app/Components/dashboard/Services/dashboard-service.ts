import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../env/environment.development';
import { inject, Injectable } from '@angular/core';
import { ClsResponse } from '../../../Shared/Models/cls-response';
import { Stats } from '../Models/stats';
import { GarbageRecord } from '../Models/garbage-record';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}
  http = inject(HttpClient);
  baseURL = environment.baseURL;

  GetStats() {
    return this.http.get<ClsResponse<Stats>>(`${this.baseURL}/DetectedImages/dashboard-stats`);
  }

  GetGarbageRecords() {
    return this.http.get<ClsResponse<GarbageRecord[]>>(`${this.baseURL}/DetectedImages/records`);
  }
}
