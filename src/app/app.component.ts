import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-app';
  data:any;
  constructor(private dataService: DataService){}
  // ngOnInit(): void{
  //   this.dataService.getData().subscribe((data)=>{
  //     this.data = data;
  //   })
  // }
  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
        console.log(data); // Check the structure of the received data
        this.data = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
