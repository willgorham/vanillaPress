/**
 * Helpers file for extra functions
 */

/**
 * The main model object.
 *
 */
var helpers = {};


/**
 * Get DOM element containing page title
 *
 * @return {object} pageTitle - Page title element
 */
helpers.getPageTitle = function() {

  return document.getElementById( 'pageTitle' );

}


/**
 * Get DOM element containing page content
 *
 * @return {object} pageContent - Page content element
 */
helpers.getPageContent = function() {

  return document.getElementById( 'pageContent' );

}
