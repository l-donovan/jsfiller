function jsfiller_load(db) {
  $.getScript(db, function() {
    for (i = 0; i < items.length; i++) {
      html = item_types[items[i].type].html;
      tokens = html.match(/\{\$[^\{\$\}]+\$\}/g);
      for (j = 0; j < tokens.length; j++) {
        value = tokens[j].replace(/[\{\$\}]+/g, '');
        item = items[i];
        html = html.replace(tokens[j], eval(value));
      }
      $(".content").append(html);
    }
  });
}
