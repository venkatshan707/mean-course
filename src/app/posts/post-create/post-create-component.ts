import {Component, EventEmitter, Output } from '@angular/core';


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
postCreated=new EventEmitter();// It's object to emit the value with the help of output decorator

 // onAddPost(postText: HTMLTextAreaElement){
  onAddPost(){

this.newPostAcknowledgement='You posted a new Post as:';
this.postText=this.enteredContent;

const post={
  title:this.enteredTitle,
  content:this.enteredContent,
}
this.postCreated.emit(post);// emiting the post it's listed by post-list component with
                            //the help of app.component.html

  }

}
