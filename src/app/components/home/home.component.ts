import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/servises/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any = [];

  constructor(
    private main: MainService
  ) { }

  ngOnInit(): void {
    this.main.getWeather().subscribe((data: any) => {
      console.log(data)
    })

  }

}
