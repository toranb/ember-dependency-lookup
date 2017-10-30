import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import { initialize } from 'ember-dependency-lookup/instance-initializers/dependency-lookup';

moduleForComponent('ui-button', 'Integration | Component | ui button', {
  integration: true,
  beforeEach() {
    window.fired = false;
    initialize(this);
  }
});

test('lookup component integration test example', function(assert) {
  this.render(hbs`{{ui-button}}`);

  assert.equal(this.$('button').text().trim(), 'go time');

  this.$('button').trigger('click');

  return wait().then(() => {
    assert.equal(window.fired, true);
  });
});
