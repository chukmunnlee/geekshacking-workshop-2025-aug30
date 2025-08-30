import { Component, inject, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main implements OnInit {

  private title = inject(Title)

  protected imgIdx = 0

  ngOnInit(): void {
    //UNCOMMENT this
    //this.imgIdx = Math.floor(Math.random() * 31)
    this.updateTitle()
  }

  update(dir: number) {
    let _imgIdx = this.imgIdx + dir
    if (_imgIdx < 0)
      _imgIdx = 30
    else if (_imgIdx > 30)
      _imgIdx = 0
    this.imgIdx = _imgIdx
    //UNCOMMENT this
    this.updateTitle()
  }

  private updateTitle() {
    this.title.setTitle(`Countingbook - ${this.imgIdx}`)
  }

}
