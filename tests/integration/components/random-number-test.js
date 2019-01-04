import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | random-number', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a random number', async function(assert) {
    // This throws a `Uncaught RangeError: Maximum call stack size exceeded` error
    //   at descriptorFor (meta.js:683)
    //   at set (metal.js:1992)
    //   at ComputedProperty.clobberSet (metal.js:2412)
    //   at ComputedProperty.set (metal.js:2399)
    //   at set (metal.js:1995)
    //   at ComputedProperty.clobberSet (metal.js:2412)
    //   at ComputedProperty.set (metal.js:2399)
    //   at set (metal.js:1995)
    //   at ComputedProperty.clobberSet (metal.js:2412)
    //   at ComputedProperty.set (metal.js:2399)
    //
    await render(hbs`{{random-number randomNumber=1234}}`);

    assert.dom('.random-number').exists();
  });
});
