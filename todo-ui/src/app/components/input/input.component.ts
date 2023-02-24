import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
// import { MatInputModule } from '@angular/material/input';
// import { MatTableModule } from '@angular/material/table';
// import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { Todo } from 'src/app/models/todo';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
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
      this.description = data.description;
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
      dialogConfig.autoFocus = true;
      dialogConfig.hasBackdrop = true;


      this.dialog.open(InputComponent, dialogConfig);
  }

  onClick() {

  }
  
  save() {
        // this.dialogRef.close();
    }

  close() {
        this.dialogRef.close();
    }
}
