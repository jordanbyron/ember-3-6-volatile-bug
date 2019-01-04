import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  randomNumber: computed(function() {
    return Math.random();
  }).volatile()
});
