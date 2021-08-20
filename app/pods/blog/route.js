import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BlogRoute extends Route {
  @service markdownResolver;

  async model() {
    const directory = await this.markdownResolver.tree('blog')
    const filesSortedByDate = directory.files.sort(
      (a, b) => new Date(b.attributes.date) - new Date(a.attributes.date)
    )

    return filesSortedByDate
  }

  afterModel(model) {
    this.transitionTo('blog.post', model.firstObject.attributes.slug);
  }
}
