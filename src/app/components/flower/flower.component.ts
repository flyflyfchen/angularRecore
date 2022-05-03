import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {
flower:string='red flowers'
  constructor( ) { 
 
  }

  ngOnInit(): void {
   
    
  }

}
