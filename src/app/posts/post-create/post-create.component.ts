import { Component } from "@angular/core"
import { NgForm } from "@angular/forms";
import { Post } from "../post.model";
import { PostsService } from "../posts.service";


@Component({
    selector: 'post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {

    enteredTitle: string = '';
    enteredContent: string = '';

    constructor(private postsService: PostsService) { }

    onAddPost(postForm: NgForm) {
        if (postForm.invalid) return;
        this.postsService.addPost({ title: postForm.value.title, content: postForm.value.content });
        postForm.resetForm();
    }
}