import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ProfileService} from '../_services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app is working!';
  values: any;

  constructor(private profileService: ProfileService){ }

  ngOnInit(){
    this.profileService.getValues().subscribe(values => {this.values = values});
  }

}
