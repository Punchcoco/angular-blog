import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';
import {PostsService} from '../services/posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit, OnDestroy {

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postSubscription = this.postsService.postSubject.subscribe(
      (posts: any[]) =>{
        this.posts = posts
      }
    );
    this.postsService.emitPostSubject();
  }
  title = 'Posts';

  posts: any[];
  postSubscription: Subscription;

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }



}
