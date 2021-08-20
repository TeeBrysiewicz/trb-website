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
  },

  altImageUrlTwo() {
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

  databases() {
  },

  link() {
    return 'https://google.com'
  }

});
