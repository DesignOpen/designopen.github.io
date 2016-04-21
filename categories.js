---
url: "/categories.js"
---
functionCall(
[{% for categ in site.resourceCategories %}
  "{{ categ }}",
{% endfor %}]
);
