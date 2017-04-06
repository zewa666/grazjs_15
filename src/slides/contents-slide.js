import {
  inlineView,
  containerless
} from 'aurelia-framework';

@inlineView(`
  <template>
    <slide name="contents-slide">
      <h3>What will be covered?</h3>
      <ul>
        <li repeat.for="topic of topics" fragment>\${topic}</li>
      </ul>
    </slide>
  </template>
`)
@containerless()
export class ContentsSlide {
  topics = [
    'I18N ?!?',
    'International Apps with Aurelia-I18N',
    'Only a few slides',
    'Some code',
    'Conclusion'
  ];
}
