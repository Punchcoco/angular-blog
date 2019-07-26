import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import {NewPostComponent} from './new-post/new-post.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostsService } from './services/posts.service';


const appRoutes : Routes = [
  {path :'post', component: PostListComponentComponent},
  {path :'new',component: NewPostComponent},
  {path :'',component: PostListComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    NewPostComponent,
    PostListComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
