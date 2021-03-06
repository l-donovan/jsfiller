function jsfiller_load(db, loc) {
  id = 0;
  items = [];
  $(loc).empty();
  $.getScript(db, function() {
    for (i = 0; i < items.length; i++) {
      items[i].id = id;
      $.ajax({async: false, url: "content/templates/" + items[i].type + ".html", success: function (html) {
        tokens = html.match(/\{\$[^\{\$\}]+\$\}/g);
        for (j = 0; j < tokens.length; j++) {
          value = tokens[j].replace(/[\{\$\}]+/g, '');
          item = items[i];
          html = html.replace(tokens[j], eval(value));
        }
        $(loc).append(html);
      }});
      id++;
    }
  });
}
