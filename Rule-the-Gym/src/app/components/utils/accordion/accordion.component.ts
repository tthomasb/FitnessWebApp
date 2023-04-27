import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { DefaultGridAlignColumnsDirective } from '@angular/flex-layout';
import { Dialog } from 'src/app/enums/dialog';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  //setter for Data, so it can be loaded when passed 
  _data:any;
  @Input()set Data(value:any){
    //console.log(value);
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
  };
  // Dialogs
  edit:Dialog.EDIT=Dialog.EDIT;
  start:Dialog.START=Dialog.START;
  delete:Dialog.DELETE=Dialog.DELETE;
  add:Dialog.ADD=Dialog.ADD;


  //Event emitter for Dialogs in Parent
  @Output() dialogEvent:EventEmitter<any>=new EventEmitter<any>();
  
  topLayer!: string[];
  topLayer2!: String[];
  constructor() {     
  }

  ngOnInit(): void {  
    
  }

}
