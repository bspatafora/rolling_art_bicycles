$(function() {
  var container = $('#photos');
  var oneThird = container.width / 3;

  container.imagesLoaded(function() {
    container.masonry({
      columnWidth: oneThird,
      itemSelector: '.photo'
    });
  });
});
