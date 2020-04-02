import {Pipe, PipeTransform} from '@angular/core';
import {Post} from '../../model/post';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(posts: Post[], search: string = ''): Post[] {
    if (!search.trim()) {
      return posts;
    }
    return posts.filter(post => {
      return post.title.toLowerCase().includes(search.toLowerCase()) || post.text.toLowerCase().includes(search.toLowerCase());
    });
  }
}
