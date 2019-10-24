
import {Post} from './posts/post-model';
import {Subject} from 'rxjs';// This package help us to create observables
import { HttpClient } from '@angular/common/http';
    //Observables concept is nothing but objects that help us to pass the  data around.
export class PostsService {
 private posts :Post[]=[];

private postsUpdated=new Subject<Post[]>();
// I am creating new instance of Subject class with Generic type of Post //Passing a list of posts as payload

/* getPosts(){
  //  return this.posts;// here I am not sending array with pointer posts array. I am sending only copy
                           //of the array. so there is no one can make changes to posts array.
 return [...this.posts];// rather than sending original post array to the receiver now I am sending copy of (...) posts
                          //by doing like this the receiver can't change the actual post array.(This is Event driven Approch()Triggered when event is occured using observables)
} */

constructor(private myhttpClinet :HttpClient){

}
getPosts(){
this.myhttpClinet.get<{message: string , posts:Post[]}>('http://localhost:3000/api/posts')
.subscribe((postData)=>{
  this.posts=postData.posts;
  this.postsUpdated.next([...this.posts]);
});
}

getPostUpdatedListener(){
  return this.postsUpdated.asObservable();// This makes postsUpdated Subject is listenable from other components(Ex: PostListComponent.ts).
}


 addPost(title:string,content:string){//This method is used to add a new posts in an array
const post:Post={id:null,title:title,content:content};
this.posts.push(post);// pushing current post in post array.

this.postsUpdated.next([...this.posts]);
//Here Subject object's next index updated with new posts whatever you give at one after another.
//This (Subject) Emitting whatever posts we are added but we need one listener to that Subject obj for listen new updates.
 // The listeners may present from other Components .ts files.

 }





}
