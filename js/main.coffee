---
---
findPos = (obj) ->
  curleft = curtop = 0
  if obj.offsetParent
    curleft = obj.offsetLeft
    curtop = obj.offsetTop
    while obj = obj.offsetParent
      curleft += obj.offsetLeft
      curtop += obj.offsetTop
  [
    curleft
    curtop
  ]
document.addEventListener 'DOMContentLoaded', ->
  @triangle = Sizzle('.triangle1')[0]
  trianglePos = findPos @triangle
  @triangleTop = trianglePos[1]
  window.onscroll = (event)=>
    console.log @triangleTop
    if (window.pageYOffset >= @triangleTop - 50)
      @triangle.classList.add('down');
    console.log @triangle


  # console.log Sizzle('.triangle1')[0].scrollTop
