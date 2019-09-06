import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts=[
    {title:"First Post",content:"This is firstPost's content"},
    {title:"Second Post",content:"This is secondPost's content"},
    {title:"Third Post",content:"This is ThirdPost's content"},
];

  constructor() { }

  ngOnInit() {
  }

}
