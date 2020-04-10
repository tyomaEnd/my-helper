import {Component, OnInit} from '@angular/core';
import {Post} from './model/post';
import {PostService} from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  posts: Post[] = [];
  search = '';
  selPost: Post;

  constructor(private postService: PostService) {
  }

  refresh() {
    this.postService.loadPosts()
      .subscribe(posts => {
        this.posts = posts.reverse();
      });
  }

  ngOnInit() {
    this.refresh();
  }

  addPost() {
    const post: Post = {
      title: 'Новый пост',
      link: '',
      text: 'Текст поста',
      type: 'other',
      date: new Date()
    };
    this.postService.savePost(post)
      .subscribe(result => {
        this.refresh();
      });
  }

  selectPost(p) {
    this.selPost = p;
  }

  changePost() {
    this.postService.editPost(this.selPost, this.selPost.id).subscribe(() => {});
  }
}
