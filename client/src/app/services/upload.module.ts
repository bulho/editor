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

  image(e) {
    const file = e.target.files[0];
    let pattern = /image-*/;
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

  project(d) {
    const pfile = d.target.files[0];
    let extBad = true;
    if( pfile.name.indexOf('.json') >= 0){
      extBad = false;
    }
    const reader = new FileReader();
    reader.readAsText(pfile);
    return Observable.create(observer => {
      if (extBad) {
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
