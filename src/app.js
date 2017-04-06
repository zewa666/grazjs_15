import Reveal from 'reveal.js';
import { I18N } from 'aurelia-i18n';
import { EventAggregator } from 'aurelia-event-aggregator';

export class App {
  static inject = [I18N, EventAggregator];

  constructor(i18n, ea) {
    this.i18n = i18n;
    this.ea = ea;

    this.selectedLanguage = this.i18n.getLocale();
    this.ea.subscribe('i18n:locale:changed', payload => {
      this.selectedLanguage = payload.newValue;
    });
  }

  attached() {
    Reveal.initialize({
      center: false
    });
  }

  switchLanguage(lang) {
    this.i18n.setLocale(lang);
  }
}
