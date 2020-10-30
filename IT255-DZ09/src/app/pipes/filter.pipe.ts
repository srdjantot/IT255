import { Pipe, PipeTransform } from '@angular/core';
import { Video } from '../models/video.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: Video[], searchText: string): Video[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(video => {
      return video.title.toLowerCase().includes(searchText);
    });
  }

}
