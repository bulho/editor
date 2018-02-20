import { Component, OnInit } from '@angular/core';
import { UploadModule } from '../services/upload.module';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private upload: UploadModule, private dialog: MatDialog) { }

  ngOnInit() {
  }

  //project data model
  project = {
    name: "",
    id: "",
    designBoard: [],
    renderings: [],
    shoppingList: []
  }
  overwriteProject = {
    name: "",
    id: "",
    designBoard: [],
    renderings: [],
    shoppingList: []
  }
  editMode = false;

  //generates project json file
  print() {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.project));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", this.project.name + ".json");
    dlAnchorElem.click();
  }

  //adds or deletes an item
  edit(item, action, idx) {
    if (item === 'designBoard') {
      if (action === 'add') this.project.designBoard.push({ "src": "../../assets/image.jpg" });
      if (action === 'delete') this.project.designBoard.splice(idx, 1);
    }
    else if (item === 'renderings') {
      if (action === 'add') this.project.renderings.push({ "src": "../../assets/image.jpg" })
      if (action === 'delete') this.project.renderings.splice(idx, 1);
    }
    else if (item === 'shoppingList') {
      if (action === 'add')
        this.project.shoppingList.push({
          "src": "../../assets/image.jpg",
          "description": "enter item description",
          "quantity": 0,
          "price": 0,
          "link": "enter full link address here",
          "linkText": "enter link text here"
        });
      if (action === 'delete') this.project.shoppingList.splice(idx, 1);
    }
  }

  //loads image files
  loadImg($event, area, idx): void {
    this.upload.image($event).subscribe((img) => {
      if (area === 'designBoard') this.project.designBoard[idx].src = img;
      if (area === 'renderings') this.project.renderings[idx].src = img;
      if (area === 'shoppingList') this.project.shoppingList[idx].src = img;
    }, (error) => {
      console.log(error);
    });
    ;
  }

  //manages confirm dialog
  openDialog(item, idx, ow): void {
    
    if (!ow) ow = false;
    let dialogRef = this.dialog.open(ConfirmComponent, {
      data: { area: item, index: idx, overwrite: ow }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'delete') this.edit(item, 'delete', idx);
      if (result === 'overwrite') this.project = this.overwriteProject;
    });
  }

  //loads project file
  loadProject($event): void {
    this.upload.project($event).subscribe((p) => {
      this.overwriteProject = JSON.parse(p);
      this.openDialog('',0,true);
    }, (error) => {
      console.log(error);
    });
    ;
  }


}
