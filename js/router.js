//
//
//
//
var router = {};

router.init = function() {

  router.loadContent();
  router.listenPageChange();

};


router.getSlug = function() {

  var slug = window.location.hash;

  view.clearContent();

  if ( '' === slug ) {

    return null;

  }
  else {

    return slug.substring( 1 );

  }

};


router.listenPageChange = function() {

  window.addEventListener( 'hashchange', router.loadContent, false );

};


router.loadContent = function() {

  var slug = router.getSlug();

  if ( null === slug ) {

    view.showPosts();

  } else {

    view.showPost( slug );

  }

}
