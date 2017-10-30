import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('smoke');
  this.route('other');
  this.route('rando');
  this.route('finally');
});

export default Router;
