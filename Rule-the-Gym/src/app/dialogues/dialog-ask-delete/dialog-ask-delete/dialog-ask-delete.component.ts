import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-ask-delete',
  templateUrl: './dialog-ask-delete.component.html',
  styleUrls: ['./dialog-ask-delete.component.scss']
})

export class DialogAskDeleteComponent {
  //Event emitter for Dialogs in Parent
  @Output() Emitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(public dialogRef: MatDialogRef<DialogAskDeleteComponent>,
    public dialog: MatDialog
  ) { }
}
