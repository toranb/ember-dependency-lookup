import Ember from 'ember';
import { lookup } from 'ember-dependency-lookup';

export default Ember.Helper.helper(function() {
  Ember.run.later(() => {
    lookup('service:-routing').transitionTo('finally');
  }, 300);
  return 'helper loaded ...';
});
