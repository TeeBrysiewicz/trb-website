import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ItemsIndexRoute extends Route {
  @service store;

  model(params) {
    return this.store.findAll('item');
  }
}
