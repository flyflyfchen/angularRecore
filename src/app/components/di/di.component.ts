import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { DIServiceService } from 'src/app/diservice.service';
import { App_Config } from 'src/app/interface';
import { FlowerComponent } from '../flower/flower.component';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css']
})
export class DIComponent implements OnInit {

  constructor(
    private DIS:DIServiceService
    // private DI:DIServiceService,
    // private FlowerComponent:FlowerComponent,
    // @Inject('http') private url:string,
    // @Inject(App_Config)  private tokenVal:string
    ) { 
      
      
  }

  ngOnInit(): void {
    // console.log(this.DI.title);
    // console.log(this.FlowerComponent);
    // console.log(this.url);
    // console.log(this.tokenVal);
    this.DIS.flowerText()
    console.log(this.DIS.title);
    
    
    
    
  }

}
