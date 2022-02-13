import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../user';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
