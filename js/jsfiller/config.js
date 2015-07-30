var link = {
  html:
  '<div id="db_$item.id$" class="content-item">' +'\n'+
  '   <img style="width: 10%;" src="$item.data.thumbnail$"></img>' +'\n'+
  '   <a href="$item.data.link$">$item.data.title$</a>' +'\n'+
  '</div>',
};

var text = {
  html:
  '<div id="db_$item.id$" class="content-item">' +'\n'+
  '   <h3>$item.data.title$</h3>' +'\n'+
  '   <div class="divider"></div>' +'\n'+
  '   <p>$item.data.body$</p>' +'\n'+
  '</div>',
}

var content_item_types = {
  'link': link,
  'text': text,
};
