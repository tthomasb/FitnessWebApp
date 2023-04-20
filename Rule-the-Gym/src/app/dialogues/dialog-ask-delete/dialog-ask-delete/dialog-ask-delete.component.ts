import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { Dialog } from 'src/app/enums/dialog';
@Component({
  selector: 'app-dialog-ask-delete',
  templateUrl: './dialog-ask-delete.component.html',
  styleUrls: ['./dialog-ask-delete.component.scss']
})
export class DialogAskDeleteComponent implements OnInit {
  //Event emitter for Dialogs in Parent
  @Output() Emitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(public dialogRef: MatDialogRef<DialogAskDeleteComponent>,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  clickYes() {

  }
}
