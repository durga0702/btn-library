import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CONFIG } from './button.interface';

@Component({
  selector: 'app-test-btn',
  templateUrl: './test-btn.component.html',
  styleUrls: ['./test-btn.component.css']
})
export class TestBtnComponent implements OnChanges {
  @Input() config?:CONFIG = {};
  @Input() spinLoader:boolean=false;
  @Input() buttonValid:boolean = true;
  @Output() buttonClicked= new EventEmitter();
 
  onClick(){
    this.buttonClicked.emit(true);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.buttonValid)
    console.log(this.config)
  }
}
