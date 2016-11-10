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
 * @return {object} pageTitle - Page title DOM element
 */
helpers.getPageTitle = function() {

  return document.getElementById( 'pageTitle' );

}


/**
 * Get DOM element containing page content
 *
 * @return {object} pageContent - Page content DOM element
 */
helpers.getPageContent = function() {

  return document.getElementById( 'pageContent' );

}


/**
 * Get DOM element containing main menu
 *
 * @return {object} mainMenu - Main menu DOM element
 */
helpers.getMainMenu = function() {

  return document.querySelector( '#mainNav ul' );

}
