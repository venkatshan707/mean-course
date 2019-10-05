import { Component, OnInit, } from '@angular/core';
import {Post} from '../post-model';
import { PostsService } from '../../posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
//   posts=[
//     // {title:"First Post",content:"This is firstPost's content"},
//     // {title:"Seco nd Post",content:"This is secondPost's content"},
//     // {title:"Third Post",content:"This is ThirdPost's content"},
// ];

posts: Post[]=[];

// decorator for making posts array id bingadble from outside inputs.
// It's getting value from parent component.
  constructor(public postService :PostsService) { }

  ngOnInit() {
    this.posts=this.postService.getPosts();
  }

}
