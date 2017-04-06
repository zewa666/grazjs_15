import {
  containerless,
  bindable
 } from 'aurelia-framework';

@containerless()
export class Slide {
  @bindable() name;
}
