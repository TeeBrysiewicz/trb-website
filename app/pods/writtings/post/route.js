import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class WrittingsPostRoute extends Route {
  @service markdownResolver;

  async model({ slug }) {
    return await this.markdownResolver.file('blog', slug);
  }
}
