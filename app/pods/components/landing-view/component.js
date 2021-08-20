import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LandingViewComponent extends Component {
  sections = ['about', 'experience', 'education', 'skills', 'portfolio', 'interests', 'contact'];

  @tracked isOpen = false;

  @action
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
