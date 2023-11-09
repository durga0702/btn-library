import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  spinLoader = false;
  buttonValid = true;
  public config = {
    title:'Submit',
    buttonClass:'bg-red-500',
    showLoader:true,
  }

  onButtonClicked(){
     this.spinLoader = true;
     this.buttonValid = false;
  }
}
