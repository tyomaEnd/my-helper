import { Pipe, PipeTransform } from '@angular/core';
import {Post} from '../model/post';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], type: string): Post[] {
    const types = type.split(',');
    return posts.filter(post => {
      return (types.length === 1 && types[0] === '') || types.includes(post.type);
    });
  }}
