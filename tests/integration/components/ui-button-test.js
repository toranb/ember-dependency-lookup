import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { initialize } from 'ember-dependency-lookup/instance-initializers/dependency-lookup';

module('Integration | Component | ui button', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    window.fired = false;
    initialize(this.owner);
  });

  test('lookup component integration test example', async function(assert) {
    await render(hbs`{{ui-button}}`);

    assert.dom('button').hasText('go time');

    await click('button');

    return settled().then(() => {
      assert.equal(window.fired, true);
    });
  });
});
