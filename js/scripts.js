$(document).ready(function () {
  $("button#catSay").click(function () {
    $("ul#catMeow").prepend("<li>Meow</li>")
    $("ul#dogBark").prepend("<li>Bark</li>")

  })

})