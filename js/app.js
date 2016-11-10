
/**
 * Main app file.  Initializes app components.
 */


/**
 * The main app object.
 *
 */
var vanillaPress = {

  init: function() {

    // Add any functions here you want
    // to run to start the application
    model.init();
    router.init();
    view.init();

  }

};

vanillaPress.init();
