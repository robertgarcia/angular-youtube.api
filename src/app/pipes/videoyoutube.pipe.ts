import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'videoyoutube'
})
export class VideoyoutubePipe implements PipeTransform {

  constructor(
    private dom: DomSanitizer
  ) {}

  transform(value: string): any {
    const url = 'https://www.youtube.com/embed/';
    return this.dom.bypassSecurityTrustResourceUrl(url + value);
  }

}
