import { Component, OnInit,OnDestroy } from '@angular/core';
import {Post} from '../post-model';
import { PostsService } from '../../posts.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{
//   posts=[
//     // {title:"First Post",content:"This is firstPost's content"},
//     // {title:"Seco nd Post",content:"This is secondPost's content"},
//     // {title:"Third Post",content:"This is ThirdPost's content"},
// ];

posts: Post[]=[];

// decorator for making posts array id bingadble from outside inputs.
// It's getting value from parent component.
  constructor(public postService :PostsService) { }

private postsSub:Subscription;

  ngOnInit() {
    this.posts=this.postService.getPosts();


    //We are setting Listener to the Subject presented in posts.service.ts
   this.postsSub= this.postService.getPostUpdatedListener()
    .subscribe((posts:Post[])=>{
       this.posts=posts;
    });// Subscribing here to new updates.
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();// This unsubscrption prevents this subscribed post array if we closed this component and staying in another component.
    //This providing secrurity by making  subscribed post array unavailable to other Components when this PostList component is closed.
  }

}
