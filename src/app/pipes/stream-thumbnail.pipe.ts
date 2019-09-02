import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'streamThumbnail'
})
export class StreamThumbnailPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    const replacedValue = value.replace("{width}", "94").replace("{height}", "60")
    
    return replacedValue
  }

}
