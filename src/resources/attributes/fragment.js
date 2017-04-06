/**
 * naming convention --> AttributeName + CustomAttribute
 * ---
 * alternative:
 * import {customAttribute} from 'aurelia-framework';
 *
 * @customAttribute('fragment')
 */

export class FragmentCustomAttribute {
  static inject = [Element]

  constructor(host) {
    this.host = host;
  }

  attached() {
    this.host.classList.add('fragment');
  }
}
