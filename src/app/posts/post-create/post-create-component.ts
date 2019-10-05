import {Component, } from '@angular/core';
import{NgForm} from '@angular/forms';
import {PostsService } from '../../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl:'./post-create-component.html',
  styleUrls:['./post-create.component.css']
})
export class PostCreateComponent{
 newPostAcknowledgement='';
 posts='';
 postText='';
 constructor (public postsService:PostsService){}
// @Output()
// postCreated=new EventEmitter<Post>();// It's object to emit the value with the help of output decorator
// Adding Generic type Post for EventEmitter.
 // onAddPost(postText: HTMLTextAreaElement){
  onAddPost( form : NgForm){
     if(form.invalid)
     {
       return;
     }
this.newPostAcknowledgement='You posted a new Post as:';
this.postText=form.value.content;


this.postsService.addPost (form.value.title, form.value.content);// emiting the post it's listed by post-list component with
                            //the help of app.component.html

  }

}
