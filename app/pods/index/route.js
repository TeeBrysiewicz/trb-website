import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service router;

  beforeModel() {
    // Revert Theme Setting
    this.router.transitionTo('/landing');

    // TBZ Theme Setting
    // this.router.transitionTo('/writtings');
  }
}
