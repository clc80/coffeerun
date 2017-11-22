(function (window) {
  'use strict';
  var App = window.App || {};

  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }
    App.Truck = Truck;
    window.App = App;

})(window);
