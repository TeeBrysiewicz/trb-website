import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class NavigationComponent extends Component {
  @tracked isOpen = false;
}
