'use strict';

module.exports = function(app) {
  var listController = require('../controllers/controller');

  // todoList Routes
  app.route('/places')
    .get(listController.list_all_places)
    .post(listController.add_a_place);


  app.route('/places/:placeId')
    .get(listController.read_place)
    .put(listController.update_place)
    .delete(listController.delete_place);
};
