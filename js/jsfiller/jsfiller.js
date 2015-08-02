function jsfiller_load(db, loc) {
  $.getScript(db, function() {
    for (i = 0; i < items.length; i++) {
      var html;
      $.ajax({async: false, url: item_types[items[i].type].html, success: function (data) { html = data }});
      tokens = html.match(/\{\$[^\{\$\}]+\$\}/g);
      for (j = 0; j < tokens.length; j++) {
        value = tokens[j].replace(/[\{\$\}]+/g, '');
        item = items[i];
        html = html.replace(tokens[j], eval(value));
      }
      $(loc).append(html);
    }
  });
}
