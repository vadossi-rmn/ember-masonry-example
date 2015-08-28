import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['masonry-grid'],
  didInsertElement: function() {
    console.log("Inserted element!");
    Ember.$('.masonry-grid').masonry({
      itemSelector: '.masonry-item',
      columnWidth: 200
    });
  }
});
