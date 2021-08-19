import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ItemsIndexShowRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('item', params.id);
  }
}
