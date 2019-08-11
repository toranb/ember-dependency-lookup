import { click, currentURL, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance Test', function(hooks) {
  setupApplicationTest(hooks);

  test('should allow for function like lookups', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
    await click('a.finally');
    assert.equal(currentURL(), '/finally');
    assert.dom('.helper').hasText('helper loaded ...');
  });
});
