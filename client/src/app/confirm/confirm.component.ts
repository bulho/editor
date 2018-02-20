import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    dialogData;
    result = null
    message = "Are you sure you want to delete this item?"

    ngOnInit() {
      this.dialogData = this.data;
      if (this.dialogData.overwrite) {
        this.result = 'overwrite';
        this.message = "Are you sure you want to open this project? \n This will overwrite all information and you will lose your changes."
      } else this.result = 'delete';
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

}
