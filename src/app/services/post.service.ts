import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../model/post';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  loadPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>('http://localhost:3000/posts', post);
  }

  editPost(post: Post, id: number): Observable<Post> {
    return this.http.put<Post>(`http://localhost:3000/posts/${id}`, post);
  }

  removePost(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/posts/${id}`);
}
}

