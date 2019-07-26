import { Injectable } from '@angular/core';
import {NgForm } from '@angular/forms';
import {Subject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  postSubject = new Subject<any[]>();

  private posts = [
    {
      index:0,
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      loveIts: 1,
      created_at: Date
    },
    {
      index:1,
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      loveIts: -1,
      created_at: Date
    },
    {
      index:2,
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      loveIts: 0,
      created_at: Date
    }
  ];

  emitPostSubject(){
    this.postSubject.next(this.posts.slice());
  }

  addPost(title: string, content:string){
    const post= {index:0,title:'',content:'',loveIts:0,created_at:Date};
    post.index = this.posts.length;
    post.title = title;
    post.content = content;
    post.loveIts = 0;
    this.posts.push(post);
    this.emitPostSubject();

  }

  supprime(i:number){
    this.posts.splice(i,1);
    this.emitPostSubject();

  }
  love(i:number){
    this.posts[i].loveIts +=1;
  }
  dont(i:number){
    this.posts[i].loveIts -=1;
  }


}
