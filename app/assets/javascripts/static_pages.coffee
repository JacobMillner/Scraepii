# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
ready = ->
	$('a.page-scroll').bind 'click', (event) ->
	  link = $(this)
	  $('html, body').stop().animate { scrollTop: $(link.attr('href')).offset().top - 50 }, 500
	  event.preventDefault()
	  return
	$('body').scrollspy
	  target: '.navbar-fixed-top'
	  offset: 80
  
$(document).ready(ready)
$(document).on('page:load', ready)
