import { Component, OnInit, Input } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  myDate = new Date();

  @Input() index: number;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;

  constructor(private postsService: PostsService,
  private router:Router) { }

  ngOnInit() {
  }

  onLove()
  {
    this.postsService.love(this.index);
  }
  onDont()
  {
    this.postsService.dont(this.index);
  }
  onSupprime()
  {
    console.log(this.index);
    this.postsService.supprime(this.index);

  }


}
