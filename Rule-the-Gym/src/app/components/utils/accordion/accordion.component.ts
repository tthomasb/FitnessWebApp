import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  //setter for Data, so it can be loaded when passed
  _data:any;
  @Input()set Data(value:any){
    // console.log(value);
    this._data=value;
    if(!value)return;
    this.topLayer2=[];
    
    for(let w of value.toLoop){
      // console.log(w);
      if(!this.topLayer2.includes(w[value.topLayer])){
        this.topLayer2.push(w[value.topLayer]);
        this.topLayer=[];
      }
    }
  };

  //Getter for Data
  get Data():any{
    return this._data;
  }


  //Event emitter for Dialogs in Parent
  @Output() dialogEvent:EventEmitter<string>=new EventEmitter<string>();
  
  topLayer!: string[];
  topLayer2!: String[];
  constructor() {     
  }

  ngOnInit(): void {  
    
  }

}