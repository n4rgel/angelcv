import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as datajson from './cv.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  data: any;
  constructor(private router: Router) {}
  ngOnInit() {
    console.log(datajson);
    this.data = datajson;
  }
 
}
