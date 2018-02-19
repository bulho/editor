import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  project = {
    name:"",
    designBoard:[],
    renderings:[],
    shoppingList:[]
  }

  print(){
    console.log(this.project);
  }

  addDesignBoard(){
    this.project.designBoard.push(
      {
        "src":"../../assets/image.jpg"
      }
    )
  }

}
