import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

//Components
import { AppComponent } from './app.component';

//Materila UI Modules
import {MatTableModule, MatPaginatorModule, MatDatepickerModule,
MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatSortModule, MatToolbarModule, MatOptionModule, MatSelectModule,
MatNativeDateModule, MatRadioModule, MatCheckboxModule} from '@angular/material';
import { TradeGridViewComponent } from './components/trade-grid-view/trade-grid-view.component'


@NgModule({
  declarations: [
    AppComponent,
    TradeGridViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatSortModule,
    MatToolbarModule,
    MatOptionModule,
    MatSelectModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
