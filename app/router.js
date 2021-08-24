import EmberRouter from '@ember/routing/router';
import config from 'trb-website/config/environment';
import { inject as  service } from '@ember/service';

export default class Router extends EmberRouter {
  @service metrics;
  location = config.locationType;
  rootURL = config.rootURL;

  constructor() {
    super(...arguments);
    this.on('routeDidChange', () => {
      this._trackPage();
    });
  }

  _trackPage() {
    let page = this.currentURL;
    let title = this.currentRouteName;

    this.metrics.trackPage({ page, title });
  }
}

Router.map(function () {
  this.route('landing');
  this.route('items', function() {
    this.route('index', { path: '/' }, function() {
      this.route('show', { path: '/:id' });
    });
  });
  this.route('blog', function() {
    this.route('post', { path: ':slug' });
  });
});
