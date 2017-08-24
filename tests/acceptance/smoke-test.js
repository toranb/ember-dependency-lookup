import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance Test');

test('should allow for function like lookups', function(assert) {
  visit('/smoke');
  andThen(function() {
    assert.equal(currentURL(), '/smoke');
  });
  click('a:eq(1)');
  andThen(function() {
    assert.equal(find('.helper').text().trim(), 'helper loaded ...');
    assert.equal(currentURL(), '/finally');
  });
});
