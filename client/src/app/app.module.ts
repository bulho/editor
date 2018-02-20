import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatExpansionModule, MatProgressBarModule, MatCheckboxModule, MatSliderModule, MatProgressSpinnerModule, MatSlideToggleModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { RoutingModule } from './services/routing.module';
import { UploadModule } from './services/upload.module';
import { MainComponent } from './main/main.component';
import { ConfirmComponent } from './confirm/confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FlexLayoutModule, HttpClientModule, FormsModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatExpansionModule, MatProgressBarModule, MatCheckboxModule, MatSliderModule, MatProgressSpinnerModule, MatSlideToggleModule
    RoutingModule, UploadModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ConfirmComponent]
})
export class AppModule { }
