import {Component } from '@angular/core';


@Component({
  selector: 'app-post-create',
  templateUrl:'./post-create-component.html',
  styleUrls:['./post-create.component.css']
})
export class PostCreateComponent{
 newPostAcknowledgement='';
 postText='';
 enteredValue='';


 // onAddPost(postText: HTMLTextAreaElement){
  onAddPost(){

this.newPostAcknowledgement='You posted a new Post as:';
this.postText=this.enteredValue;

  }

}
