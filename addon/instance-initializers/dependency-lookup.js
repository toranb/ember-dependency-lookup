import DependencyLookup from '../services/dependency-lookup';

export function initialize(appInstance) {
  let container = appInstance.__container__;
  DependencyLookup.setOwner(container.owner);
}

export default {
  name: 'dependency-lookup',
  initialize
};
