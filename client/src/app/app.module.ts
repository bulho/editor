import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatExpansionModule, MatProgressBarModule, MatCheckboxModule, MatSliderModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { RoutingModule } from './services/routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FlexLayoutModule, HttpClientModule, FormsModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatExpansionModule, MatProgressBarModule, MatCheckboxModule, MatSliderModule, MatProgressSpinnerModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
