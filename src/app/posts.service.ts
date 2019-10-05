import { Injectable } from '@angular/core';
import {Post} from './posts/post-model';

export class PostsService {
 private posts :Post[]=[];

 getPosts(){
   return this.posts;// here I am not sending array with pointer posts array. I am sending only copy
                           //of the array. so there is no one can make changes to posts array.
 }
 addPost(title:string,content:string){//This method is used to add a new posts in an array
const post:Post={title:title,content:content};
this.posts.push(post);// pushing current post in post array.
 }
  constructor() { }

}
