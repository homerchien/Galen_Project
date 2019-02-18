conf_special_desc = "";
conf_footer_bg_color = "#F5F5F5";
conf_footer_title_color = "#3D4246";
conf_footer_text_color = "#3D4246";
conf_blocks = [{
    "type": "social",
    "settings": {
      "instagram_url": "http://instagram.com",
      "facebook_url": "http://www.facebook.com",
      "twitter_url": "http://twitter.com"
    }
  }, {
    "type": "menu",
    "settings": {
      "title": "SUPPORT",
      "menu": {
        "id": "footer",
        "type": "menu",
        "title": "页尾菜单"
      }
    }
  }, {
    "type": "info",
    "settings": {
      "logo_src": "",
      "richtext": "<p><span>Use this text to share information about your brand with your customers.</span></p>"
    }
  },{
    "type": "newsletter",
    "name": "邮件订阅",
    "limit": 1,
    "settings": [{
      "type": "text",
      "id": "title",
      "label": "标题",
      "default": "Newsletter",
      "info": "订阅用户将被添加到<a href='/customers?tabKey=subscribed&subscribed=true' target='_blank'>顾客名单</a>中"
    }]
  }];
