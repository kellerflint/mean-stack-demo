import { Component } from "@angular/core"


@Component({
    selector: 'post-create',
    templateUrl: './post-create.component.html',
})
export class PostCreateComponent {

    enteredValue: string = '';
    newPost = "";

    savePost() {
        this.newPost = this.enteredValue;
    }
}