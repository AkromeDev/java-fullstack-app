import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
// import { MatTableModule } from '@angular/material/table';
// import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { Todo } from 'src/app/models/todo';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent {
  description: string = "some";
  form!: FormGroup;

  constructor(
      private dialog: MatDialog,
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<InputComponent>,
      @Inject(MAT_DIALOG_DATA) data: any
    ) {
      // this.description = data.description;
    }

  ngOnInit() {
      this.form = this.fb.group({
          description: [this.description, []],
          
      });
  }

  openDialog() {
      const dialogConfig = new MatDialogConfig();
      // dialogConfig.disableClose = true;
      // dialogConfig.panelClass = true;
      // dialogConfig.hasBackdrop = true;
      dialogConfig.autoFocus = true;

      this.dialog.open(InputComponent, dialogConfig);
  }

  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });

  onClick() {

  }
  
  save() {
        // this.dialogRef.close();
    }

  close() {
        this.dialogRef.close();
    }
}
