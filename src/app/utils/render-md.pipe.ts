import { Pipe, PipeTransform } from '@angular/core';
import { HtmlRenderer, Parser } from 'commonmark';

@Pipe({ name: 'renderMd' })
export class RenderMdPipe implements PipeTransform {
 reader: Parser;
 writer: HtmlRenderer;
 constructor() {
    this.reader = new Parser();
    this.writer = new HtmlRenderer();
 }

 transform(value: any): string {
  const parsed = this.reader.parse(value);
  return this.writer.render(parsed);
 }
}