items.push({
  type: 'link',
  id: 0,
  data: {
    title: 'This is a title!',
    link: 'http://www.facebook.com',
    thumbnail: '/images/thumbnail/f348gh230gj.jpeg'
  }
});

items.push({
  type: 'link',
  id: 1,
  data: {
    title: 'This is a different title!',
    link: 'http://www.facebook.com',
    thumbnail: '/images/thumbnail/f348gh230gj.jpeg'
  }
});

items.push({
  type: 'text',
  id: 2,
  data: {
    title: 'This is a text item',
    body: 'Hello, World! This text item is showcasing the jsfiller system!<br>\
          Note that box shadows increase based on id number'
  }
});

items.push({
  type: 'video',
  id: 3,
  data: {
    title: 'Big Buck Bunny',
    video: {
      source: '/videos/bbb.mp4',
      width: '100%',
      height: 'auto',
      controls: true,
    }
  }
})
