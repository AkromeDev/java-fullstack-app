import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { TodoService } from './services/todo.service';
import { TableComponent } from './components/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './components/input/input.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableComponent,
    InputComponent,
    MatDialogModule,
  ],
  providers: [
    TodoService,
    InputComponent,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MAT_DATE_FORMATS, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    { provide: DateAdapter, useValue: {} },
  ],
  bootstrap: [AppComponent],
  entryComponents: [InputComponent]
})
export class AppModule { }
