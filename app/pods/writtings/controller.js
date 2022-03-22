import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class WrittingsController extends Controller {
  @tracked showMenu = true;

  @action openMenu() {
    this.showMenu = !this.showMenu;
  }

  // @action
  // openMenu() {
  //   this.toggleProperty('showMenu');
  // }
}
