const Plane = require('./Plane');

class TestPlane extends Plane {

  constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
    super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
  }
}

exports.module = TestPlane;