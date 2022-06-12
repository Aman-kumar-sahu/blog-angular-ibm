import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
arr1:any[]=[];

  constructor() { 
    this.arr1=[
      {
        id:Math.floor(Math.random()*999),
        title:"Animal 1",
        author:"S K Goyal",
        image:"https://www.teahub.io/photos/full/252-2528037_1920x1200-download-data-id-201174-data-src-walls.jpg",
        postDate:"15/02/2022",
        postCatagory:"Wildlife",
        content:"Welcome to Wikipedia, the free encyclopedia that anyone can edit. 6,465,537 articles in English The arts Biography Geography History Mathematics Science Society Technology All portals From today's featured article Play media Citizens.",
        like:0
      },
      {
        id:Math.floor(Math.random()*999),
        title:"Animal 2",
        author:"S K Goyal",
        image:"https://wallpaperaccess.com/full/522953.jpg",
        postDate:"15/02/2022",
        postCatagory:"Wildlife",
        content:"Welcome to Wikipedia, the free encyclopedia that anyone can edit. 6,465,537 articles in English The arts Biography Geography History Mathematics Science Society Technology All portals From today's featured article Play media Citizens.",
        like:0
      },
      {
        id:Math.floor(Math.random()*999),
        title:"Animal 3",
        author:"S K Goyal",
        image:"https://s1.1zoom.me/big0/793/Tigers_Painting_Art_Night_Glance_535374_1280x853.jpg",
        postDate:"15/02/2022",
        postCatagory:"Wildlife",
        content:"Welcome to Wikipedia, the free encyclopedia that anyone can edit. 6,465,537 articles in English The arts Biography Geography History Mathematics Science Society Technology All portals From today's featured article Play media Citizens.",
        like:0
      },
      {
        id:Math.floor(Math.random()*999),
        title:"Animal 4",
        author:"S K Goyal",
        image:"https://wallpapercave.com/uwp/uwp307154.jpeg",
        postDate:"15/02/2022",
        postCatagory:"Wildlife",
        content:"Welcome to Wikipedia, the free encyclopedia that anyone can edit. 6,465,537 articles in English The arts Biography Geography History Mathematics Science Society Technology All portals From today's featured article Play media Citizens.",
        like:0
      }
    ]
    // this.like=0;
  }
  
  // arr4:any[]=[...this.arr1]
 
}
