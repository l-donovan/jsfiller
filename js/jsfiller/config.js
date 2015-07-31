item_types = {};

item_types['link'] = {
  html:'\
    <style> \
      .content-item#db_{$ item.id $} { \
        margin: 1em 0em; \
        padding: 0.5em 1.5em; \
        background-color: #D5DAF9; \
        box-shadow: {$ item.id * 5 + 1 $}px {$ item.id * 5 + 1 $}px 2px #555555; \
      } \
    </style> \
    <div id="db_{$ item.id $}" class="content-item"> \
      <img style="width: 10%;" src="{$ item.data.thumbnail $}"></img> \
      <a href="{$ item.data.link $}">{$ item.data.title $}</a> \
    </div>',
};

item_types['text'] = {
  html:'\
    <style> \
      .content-item#db_{$ item.id $} { \
        margin: 1em 0em; \
        padding: 0.5em 1.5em; \
        background-color: #D5DAF9; \
        box-shadow: {$ item.id * 5 + 1 $}px {$ item.id * 5 + 1 $}px 2px #555555; \
      } \
    </style> \
    <div id="db_{$ item.id $}" class="content-item"> \
      <h3>{$ item.data.title $}, id #{$item.id$}</h3> \
      <div class="divider"></div> \
      <p>{$ item.data.body $}</p> \
    </div>',
};

item_types['video'] = {
  html:'\
    <style> \
      .content-item#db_{$ item.id $} { \
        margin: 1em 0em; \
        padding: 0.5em 1.5em; \
        background-color: #D5DAF9; \
        box-shadow: {$ item.id * 5 + 1 $}px {$ item.id * 5 + 1 $}px 2px #555555; \
      } \
    </style> \
    <div id="db_{$item.id$}" class="content-item"> \
      <h3>{$item.data.title$}</h3> \
      <video width="{$item.data.video.width$}" height="{$item.data.video.height$}" controls> \
        <source src="{$item.data.video.source$}" type="video/mp4"> \
      </video> \
    </div>',
}
