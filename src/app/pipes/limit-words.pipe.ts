import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitWords'
})
export class LimitWordsPipe implements PipeTransform {

  transform(str: string, limit: number, trail = '…'): string {
    let result = str || '';
    if (str) {
      const words = str.split(/\s+/);
      if (words.length > limit) {
          result = words.slice(0, limit).join(' ') + trail;
      }
      return result;
    }
  }

}
