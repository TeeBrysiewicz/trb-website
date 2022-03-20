import EmberRouter from '@ember/routing/router';
import config from 'trb-website/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('writtings', function() {
    this.route('post', { path: ':slug' });
  });

  this.route('about');
  this.route('contact');


  this.route('landing');
  this.route('items', function() {
    this.route('index', { path: '/' }, function() {
      this.route('show', { path: '/:id' });
    });
  });
});
