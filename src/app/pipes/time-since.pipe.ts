import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeSince'
})
export class TimeSincePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const diff:number = new Date().getTime() - new Date(value).getTime()
    let msec:number = diff
    const hh:number = Math.floor(diff / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    const mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000);
    msec -= ss * 1000;
    return `${hh}:${mm > 9  ? mm : '0'+mm}`;
  }

}
