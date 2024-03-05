import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,//You must set this property in reactive forms
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
  imports: [ReactiveFormsModule],
})
export class ReactiveFormsComponent {
  name = new FormControl('');
Password= new FormControl('');


  updateName() {
    this.name.setValue("Mani");
    this.Password.setValue("Kings@123");

  }

}
