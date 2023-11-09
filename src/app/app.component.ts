import { Component } from '@angular/core';
import { CONFIG } from './test-btn/button.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  spinLoader = false;
  buttonValid = true;
  public config:CONFIG = {
    title:'Submit',
    buttonClass:'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex transition ease-in-out duration-150',
    showLoader:true,
  }

  onButtonClicked(){
     this.spinLoader = true;
     this.buttonValid = false;
  }
}
