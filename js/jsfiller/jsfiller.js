function jsfiller_load(db) {
  $.getScript(db, function() {
    for (i = 0; i < items.length; i++) {
      html = content_item_types[items[i].type].html;
      tokens = html.match(/\$[^\$]+\$/g);
      for (j = 0; j < tokens.length; j++) {
        value = tokens[j].replace('$item.', '$_' + items[i].id + '.');
        value = eval(value.replace(/[\$]+/g, ''));
        html = html.replace(tokens[j], value);
      }
      $(".content").append(html);
    }
  });
}
