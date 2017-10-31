import { later } from '@ember/runloop';
import Helper from '@ember/component/helper';
import { lookup } from 'ember-dependency-lookup';

export default Helper.helper(function() {
  later(() => {
    lookup('service:-routing').transitionTo('finally');
  }, 300);
  return 'helper loaded ...';
});
