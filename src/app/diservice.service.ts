import { Injectable, InjectionToken } from '@angular/core';
import { FlowerService } from './flower.service';

@Injectable({
  providedIn: 'root',
})
export class DIServiceService {
  title: string = '来自diserveice';
  flower: string = '我是小白花';
  constructor(private FlowerService:FlowerService) { // 注入一个服务
    this.flower=this.FlowerService.flowerName
  }

  flowerText() {
    console.log(this.flower);
  }
}
