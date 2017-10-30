import Component from '@ember/component';
import { lookup } from 'ember-dependency-lookup';

export default Component.extend({
  actions: {
    gotime() {
      lookup('service:fosho').fire();
    }
  }
});
