import { Component, OnInit } from '@angular/core';
import { UploadModule } from '../services/upload.module';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private upload: UploadModule) { }

  ngOnInit() {
  }

  project = {
    name: "",
    id:"",
    designBoard: [],
    renderings: [],
    shoppingList: []
  }

  print() {
    console.log(this.project);
    /*var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.project));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "scene.json");
    dlAnchorElem.click();*/
  }

  addDesignBoard() {
    this.project.designBoard.push(
      {
        "src": "../../assets/image.jpg"
      }
    )
  }

  loadFile($event, area, idx): void {
    this.upload.getFile($event).subscribe((img) => {
      console.log(img);
      this.project.designBoard[idx].src = img;
    }, (error) => {
      console.log(error);
    });
    ;
  }




}
