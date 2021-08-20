import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({

  title() {
    return faker.lorem.words();
  },

  tagline() {
    return faker.lorem.sentence();
  },

  body() {
    return faker.lorem.paragraph();
  },

  publishedAt() {
    return faker.date.past();
  },

  imageUrl() {
    return faker.image.imageUrl();
  },

  altImageUrlOne() {
    return faker.image.imageUrl();
  },

  altImageUrlTwo() {
    return faker.image.imageUrl();
  },

  languages() {
    return faker.lorem.words();
  },

  frameworks() {
    return faker.lorem.words();
  },

  libraries() {
    return faker.lorem.words();
  },

  link() {
    return 'https://google.com'
  }

});
