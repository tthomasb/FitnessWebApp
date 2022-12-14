import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Dialog } from 'src/app/enums/dialog';
@Component({
  selector: 'app-dialog-ask-delete',
  templateUrl: './dialog-ask-delete.component.html',
  styleUrls: ['./dialog-ask-delete.component.scss']
})
export class DialogAskDeleteComponent implements OnInit {
@Output() Emitter:EventEmitter<boolean>=new EventEmitter<boolean>();
  constructor(public dialogRef: MatDialogRef<DialogAskDeleteComponent>,
    public dialog: MatDialog
  ) {}
  
  ngOnInit(): void {    
  }

  clickYes(){
    
  }
}
