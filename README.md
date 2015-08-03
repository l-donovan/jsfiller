# jsfiller
### What is this?
`jsfiller` is a plaintext database system built entirely in Javascript.

It parses templates in an augmented html/css format for database entries, which allows for simple integration with heavily styled web pages.

### What is this 'augmented html/css format'?
`jsfiller`'s template format implements very quick and easy logical operations and variable calls and definitions in HTML. These calls are demarcated by tags. `jsfiller` also uses the `item` keyword, to access any properties of the database object currently being handled.

For example:
```html
<html>
  <head>...</head>
  <body>
    <h1>{$ item.data.title $}</h1>
    <h2>Here is this object's id: {$ item.id $}</h2>
    <h2>Four times two is: {$ 4 * 2 $}</h2>
    <!--{$ x = 10 $}-->
    <h2>{$ x $} times 2 is {$ x * 2 $}</h2>
  </body>
</html>
```

Any reasonable javascript can be handled in these tags, and persists throughout the rest of the template.


### How is it all put together?
A more in-depth example of a `jsfiller` project's file structure is shown in the example provided in this repo. However, here is the basic file structure (only the two starred files are necessary to get a database up and running):
```
/
├── content
│   ├── databases
│   │   └── databaseName.js *
│   ├── images
│   │   └── imageName.jpg
│   ├── templates
│   │   └── templateName.html
│   └── videos
│       └── videoName.mp4
├── css
│   └── style.css
├── index.html
└── js
    └── jsfiller.js *

```
