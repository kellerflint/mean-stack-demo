import { Component, EventEmitter, Output } from "@angular/core"


@Component({
    selector: 'post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {

    enteredTitle: string = '';
    enteredContent: string = '';

    @Output()
    postCreated = new EventEmitter();

    onAddPost() {
        const post = {
            title: this.enteredTitle,
            content: this.enteredContent
        }
        this.postCreated.emit(post);
    }
}