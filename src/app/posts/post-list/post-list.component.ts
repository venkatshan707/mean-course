import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
//   posts=[
//     // {title:"First Post",content:"This is firstPost's content"},
//     // {title:"Second Post",content:"This is secondPost's content"},
//     // {title:"Third Post",content:"This is ThirdPost's content"},
// ];
@Input()
posts=[];
// decorator for making posts array id bingadble from outside inputs.
// It's getting value from parent component.
  constructor() { }

  ngOnInit() {
  }

}
