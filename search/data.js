---
---
{% capture js %}

var searchData = [
  {% for article in site.categories.articles %}
    {
      "title": "{{article.title | remove: '"'}}",
      "url": "{{article.url}}",
      "content": "{{article.content | strip_html | newline_to_br | replace: '<br />',' ' | remove: '"'}}"
    }{% if forloop.last == false %},{% endif %}
  {% endfor %},
  {% for resource in site.categories.resources %}
    {
      "title": "{{resource.title | remove: '"'}}",
      "url": "{{resource.url}}",
      "content": "{{resource.content | strip_html | newline_to_br | replace: '<br />',' ' | remove: '"'}}"
    }{% if forloop.last == false %},{% endif %}
  {% endfor %}
];

{% endcapture %}{{js | strip_newlines}}