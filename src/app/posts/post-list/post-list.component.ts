import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { takeUntil } from 'rxjs/operators'
// test change
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];

  constructor(private postsService: PostsService) { }

  private ngUnsubscribe = new Subject();

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();

    this.postsService.getPostUpdateListener()
      .pipe(
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe(
        (items: Post[]) => this.posts = items,
        err => console.log(err),
        () => console.log('done')
      );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
