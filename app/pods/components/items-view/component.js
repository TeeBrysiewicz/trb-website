import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemsViewComponent extends Component {
  @tracked isOpen = true;

  @action
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
