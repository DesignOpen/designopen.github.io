---
---
functionCall(
[{% for categ in site.resourceCategories %}
  "{{ categ }}",
{% endfor %}]
);
