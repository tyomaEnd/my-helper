import {Component, OnInit} from '@angular/core';
import {Post} from './model/post';
import {PostService} from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  posts: Post[] = [];
  search = '';
  selPost: Post;
  editPost: boolean;
  type = new Set<string>();
  visible = false;

  constructor(private postService: PostService) {
  }

  refreshPosts() {
    this.postService.loadPosts()
      .subscribe(posts => {
        this.posts = posts.reverse();
      });
  }

  ngOnInit() {
    this.refreshPosts();
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
      .subscribe(() => {
        this.refreshPosts();
        this.selPost = post;
        this.editPost = true;
      });
  }

  selectPost(p) {
    this.selPost = p;
    this.editPost = false;
  }

  removePost(id: number) {
    this.postService.removePost(id).subscribe(() => {
      this.refreshPosts();
      this.selPost = null;
    });
  }

  changePost() {
    this.postService.editPost(this.selPost, this.selPost.id).subscribe(() => {
    });
  }

  toggleEditPost() {
    this.editPost = !this.editPost;
  }

  filterType(key: string) {
    if (this.type.has(key)) {
      this.type.delete(key);
    } else {
      this.type.add(key);
    }
  }

  join(set: Set<string>): string {
    return Array.from(set.keys()).join(',');
  }
}
