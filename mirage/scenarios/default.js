export default function(server) {
  // server.createList('item', 5);

  server.create('item', {
    title: 'Ember JSON API Pagination Package',
    tagline: 'Open Source',
    body: 'A JSONAPI spec paginaton package for adding pagination buttons.',
    publishedAt: "August 12 2021",
    imageUrl:'https://i.imgur.com/a5CNlhl.png',
    languages: 'Javascript',
    frameworks: 'Ember',
    libraries: 'JSON API Serializer',
    link: 'https://www.npmjs.com/package/ember-jsonapi-pagination',
  });

  server.create('item', {
    title: 'This Site',
    tagline: "Ember",
    body: 'Ember App',
    publishedAt: 'August 19 2021',
    imageUrl: 'https://img.icons8.com/ios/452/here.png',
    languages: 'Javascript',
    frameworks: 'Ember',
    libraries: 'ember-cli-markdown-resolver, ember-dark-mode, postcss and tailwind to name a few',
    link: 'https://github.com/teebrysiewicz'
  });
}

// Todo: publishedAt date
