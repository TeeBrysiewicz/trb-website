import Model, { attr } from '@ember-data/model';

export default class ItemModel extends Model {
  @attr('string') title;
  @attr('string') tagline;
  @attr('string') body;
  @attr('date') publishedAt;
  @attr('string') imageUrl;
  @attr('string') altImageUrlOne;
  @attr('string') altImageUrlTwo;
  @attr('string') languages;
  @attr('string') frameworks;
  @attr('string') libraries;
}
