import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from "rxjs/Observable"

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class UploadModule {

  getFile(e) {
    const file = e.target.files[0];
    let pattern = /image-*/;
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return Observable.create(observer => {

      if (!file.type.match(pattern)) {
        alert('This file type is not supported please choose the correct file.');
        observer.error('error uploading file');
        observer.complete();
      } else {
        reader.onloadend = () => {
          observer.next(reader.result);
          observer.complete();
        };
      }
    });
  }

 }
