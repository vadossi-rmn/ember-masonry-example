import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
      return {
        name: params.name,
        items: ['something', 'something2', 'something3']
      };
  }
});
