export default function(server) {
  // server.createList('item', 5);

  // server.create('item', {
  //   title: 'Work Summary',
  //   tagline: 'Paid Experience',
  //   body: 'I obtained an internship right after LEARN Bootcamp, so most of the meaningful work I have done has been paid work. This is a summary of my collective work experience.',
  //   publishedAt: "February 22 2022",
  //   imageUrl: 'assets/ember-jsonapi-pagination.png',
  //   languages: 'Work In Progress',
  //   frameworks: 'WIP',
  //   libraries: 'JSON API Serializer',
  //   link: 'https://www.npmjs.com/package/ember-jsonapi-pagination',
  // });

  server.create('item', {
    title: 'Ember JSON API Pagination Package',
    tagline: 'Open Source',
    body: 'A JSONAPI spec paginaton package for adding pagination buttons.',
    publishedAt: "August 12 2021",
    imageUrl: 'assets/ember-jsonapi-pagination.png',
    languages: 'Javascript',
    frameworks: 'Ember',
    libraries: 'JSON API Serializer',
    link: 'https://www.npmjs.com/package/ember-jsonapi-pagination',
  });

  server.create('item', {
    title: 'All Things Swift',
    tagline: 'a monthly Swift meetup',
    body: 'All Things Swift meets once a month in both Chicago and San Diego. San Diego\'s event is hosted by Andrew Wilhelm and Yosef Rosenberg, while Chicago\'s event is hosted by Feagal Walsh and Tobias Brysiewicz. Both meet ups are currently following the "Lightening Talk" format of 5-10 minute talks. This is not only a meetup, but also includes a static site with video and blog content from each meetup.',
    publishedAt: 'March 21 2016',
    imageUrl: 'assets/ats-logo.png',
    languages: 'Javascript, Ruby',
    frameworks: 'none',
    libraries: 'Jekyll',
    databases: 'none',
    link: 'https://allthingsswift.org'
  });

  server.create('item', {
    title: 'Tasting Room Del Mar',
    tagline: 'a native iOS application',
    body: 'Tasting Room Del Mar is a restaurant in Del Mar, CA. The owners wanted to do something different with their business and offer more to their customers. Working together we created a mobile app that allows customers to intelligently browse the expansive wine, food and beer lists, place inhouse & takeaway orders directly from their phones, and checkout through applepay or a cc. This set the foundation for us to build a brand new resturant experience with the goal of creating a more immersive customer experience.',
    publishedAt: 'May 21 2016',
    imageUrl: 'assets/trdm-app-1.jpg',
    altImageUrlOne: 'assets/trdm-app-4.png',
    altImageUrlTwo: 'assets/trdm-app-3.jpg',
    languages: 'Swift 2',
    frameworks: 'Cocoa Touch',
    libraries: 'Clover, Parse',
    databases: 'NodeChef',
    link: 'https://yournorthcounty.com/tasting-room-del-mar/'
  });

  server.create('item', {
    title: 'Honey Drops For Children Of The World',
    tagline: 'a static website',
    body: 'Since 2010, HDCW has visited cities around the US, Guatemala, Dominican Republic, and Madagascar dedicating their time and effort to assisting children and families with new homes and schools. HDCW has worked in conjunction with other organizations to achieve similar goals. HDCW are re-positioning themselves in becoming an influential voice for developing educational programs and building new efficient schools.',
    publishedAt: 'November 5 2015',
    imageUrl: 'assets/hdcw-1.png',
    altImageUrlOne: 'assets/hdcw-5.jpg',
    altImageUrlTwo: 'assets/hdcw-6.jpg',
    languages: 'Javascript',
    frameworks: 'none',
    libraries: 'Bootstrap',
    databases: 'none',
    link: 'https://hdcw.firebaseapp.com/'
  });

  server.create('item', {
    title: 'This Site',
    tagline: "Ember",
    body: 'Ember App',
    publishedAt: 'August 19 2021',
    imageUrl: 'assets/this-site.png',
    languages: 'Javascript',
    frameworks: 'Ember',
    libraries: 'ember-cli-markdown-resolver, ember-dark-mode, postcss and tailwind to name a few',
    link: 'https://github.com/TeeBrysiewicz/trb-website'
  });

  server.create('item', {
    title: 'Lite App',
    tagline: 'a native iOS application',
    body: 'Lite is a financial education iOS application aimed at helping individuals become financially fit. I was hired as a freelancer to help redesign the UX/UI first and foremost. We then moved to App Store deployment requirements. We then worked on adding several new features and functionality.',
    publishedAt: 'May 5 2016',
    imageUrl: 'assets/lite-logo.png',
    languages: 'Swift 2',
    frameworks: 'Cocoa Touch',
    libraries: 'AWS',
    databases: 'Mongo DB',
    link: 'https://apprecs.com/ios/1121126488/lite-app-simple-personal-finance-education-budget-money'
  });

  server.create('item', {
    title: 'Big City Weather',
    tagline: 'a native iOS application',
    body: 'Big City Weather is a simple iOS application that ties in with Open Weather API to show a five day forecast per each of the ten big US cities.',
    publishedAt: 'June 12 2016',
    imageUrl: 'assets/bcw-logo.jpg',
    altImageUrlOne: 'assets/bcw-1.png',
    altImageUrlTwo: 'assets/bcw-2.png',
    languages: 'Swift 2',
    frameworks: 'Cocoa Touch',
    libraries: 'Open Weather Map API',
    databases: 'Core Data',
    link: 'https://github.com/TeeBrysiewicz/BigCityWeather'
  });

  server.create('item', {
    title: 'Fun Finder',
    tagline: 'a ruby on rails web application',
    body: 'This was my team’s final project for LEARN Bootcamp. It is an event scheduler and finder for people looking to go out and socialize.',
    publishedAt: 'November 23 2015',
    imageUrl: 'assets/ff-1.png',
    altImageUrlOne: 'assets/ff-2.png',
    languages: 'Ruby',
    frameworks: 'Ruby on Rails',
    libraries: 'jQuery',
    databases: 'PostgreSQL',
    link: 'no link available'
  });

}

  // server.create('item', {
  //   title:
  //   tagline:
  //   body:
  //   publishedAt:
  //   imageUrl:
  //   languages:
  //   frameworks:
  //   libraries:
  //   link:
  // });
