import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
// name:any;
// email:any;
title:any;
author:any;
postDate:any;
like:number=0;
postCatagory:any;
content:any;
image:any;
  constructor(public dataService:DataService,private route:Router) { 
    
  }
arr3:any[]=[];
  ngOnInit(): void {
    this.arr3=this.dataService.arr1;
  }
  // disp=()=>{
  //   console.log(this.arr3);
  // }
  submitHandle=(login:any)=>{
    // this.arr1=[...this.arr1];
    this.dataService.arr1.push({id:Math.floor(Math.random()*999),title:this.title,author:this.author,image:this.image,postDate:this.postDate,postCatagory:this.postCatagory,content:this.content,like:0});
    // this.arr1=[...this.arr1];
    setTimeout(()=>{this.route.navigate([''])},4000);
    alert("Successful submission, going to homepage in 4 sec");
    console.log(this.dataService.arr1);
    console.log(login);
    // return this.arr1;
  }
}
