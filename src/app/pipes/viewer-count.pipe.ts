import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewerCount'
})
export class ViewerCountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const viewerCount = parseInt(value)
    if(viewerCount >= 10000) {
      return `${Math.round(viewerCount/1000)}k`
    }
    return viewerCount;
  }

}
