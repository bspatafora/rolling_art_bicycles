$(function() {
  var container = $('#photos');
  var oneQuarter = container.width / 4;

  container.imagesLoaded(function() {
    container.masonry({
      columnWidth: oneQuarter,
      itemSelector: '.photo'
    });
  });
});
