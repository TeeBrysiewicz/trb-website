import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AboutRoute extends Route {
  @service store;

  model(params) {
    return this.store.findAll('item');
  }

  // afterModel(model) {
  //   this.transitionTo('items.index.show', model.firstObject.id);
  // }
}
