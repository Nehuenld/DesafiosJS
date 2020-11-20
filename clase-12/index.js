var color = prompt("Elegi tu color (ingles)red y clickea")

$(function() {
    $('.rojo').click(function() {
      $(this).css('background-color', color)
    })
  })
