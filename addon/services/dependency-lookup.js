import { getOwner, setOwner } from '@ember/application';
import Service from '@ember/service';

const DependencyLookup = Service.extend({
}).reopenClass({
  setOwner(owner) {
    setOwner(this, owner);
  },
  getOwner() {
    if (!getOwner(this)) {
      throw new Error('lookup is without a container, ensure that setOwner was run from the instance-initializers');
    }
    return getOwner(this);
  }
});

const lookup = keyName => {
  const owner = DependencyLookup.getOwner();
  return owner.lookup(keyName);
}

export { lookup };

export default DependencyLookup;
