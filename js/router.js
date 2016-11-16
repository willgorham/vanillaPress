/**
 * Router file for controlling model-view connections
 */

/**
 * The main router object.
 *
 */
var router = {};

router.init = function() {

  // Load initial page content
  router.loadContent();
  // Listen for URL changes
  router.listenPageChange();

};


/**
 * Get slug hash from URL
 *
 * @return {string} slug - Hash value
 */
router.getSlug = function() {

  var slug = window.location.hash;

  view.clearContent();

  if ( '' === slug ) {

    return null;

  } else {

    return slug.substring( 1 );

  }

};


/**
 * Listen for URL changes
 *
 */
router.listenPageChange = function() {

  window.addEventListener( 'hashchange', router.loadContent, false );

};


/**
 * Show all posts or single post content based on page URL
 *
 */
router.loadContent = function() {

  var slug = router.getSlug();

  if ( null === slug ) {

    view.showContent( 'home' );

  } else if ( 'blog' === slug ) {

    view.showPosts();

  } else {

    view.showContent( slug );

  }

}
