import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mean-course';

  posts: any = [
    { title: "title 1", content: "Content 1" },
    { title: "title 2", content: "Content 2" },
    { title: "title 3", content: "Content 3" }
  ];

  onPostAdded(post: any) {
    this.posts.push(post)
  }

}
