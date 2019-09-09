import {Component, EventEmitter, Output } from '@angular/core';
import{Post} from '../post-model';

@Component({
  selector: 'app-post-create',
  templateUrl:'./post-create-component.html',
  styleUrls:['./post-create.component.css']
})
export class PostCreateComponent{
 newPostAcknowledgement='';
 posts='';
 postText='';
 enteredContent='';
 enteredTitle='';
@Output()
postCreated=new EventEmitter<Post>();// It's object to emit the value with the help of output decorator
// Adding Generic type Post for EventEmitter.
 // onAddPost(postText: HTMLTextAreaElement){
  onAddPost(){

this.newPostAcknowledgement='You posted a new Post as:';
this.postText=this.enteredContent;

const post : Post={
  title:this.enteredTitle,
  content:this.enteredContent,
}
this.postCreated.emit(post);// emiting the post it's listed by post-list component with
                            //the help of app.component.html

  }

}
