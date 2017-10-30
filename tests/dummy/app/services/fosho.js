import Service from '@ember/service';

export default Service.extend({
  fire() {
    window.fired = true;
  }
});
