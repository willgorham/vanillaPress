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

};


/**
 * Get DOM element containing page content
 *
 * @return {object} pageContent - Page content DOM element
 */
helpers.getPageContent = function() {

  return document.getElementById( 'pageContent' );

};


/**
 * Get DOM element containing main menu
 *
 * @return {object} mainMenu - Main menu DOM element
 */
helpers.getMainMenu = function() {

  return document.querySelector( '#mainNav ul' );

};


/**
 * Get DOM element containing editor
 *
 * @return {object} editor - Editor DOM element
 */
helpers.getEditorEl = function() {

  return document.getElementById( 'editor' );

};


/**
 * Get DOM element containing editor toggle
 *
 * @return {object} editorToggle - Editor toggle DOM element
 */
helpers.getEditorToggleEl = function() {

  return document.getElementById( 'editorToggle' );

};


/**
 * Get DOM element containing editor title field
 *
 * @return {object} editorTitle - Editor title DOM element
 */
helpers.getEditorTitleEl = function() {

  return document.getElementById( 'editTitle' );

};


/**
 * Get DOM element containing editor content field
 *
 * @return {object} editorContent - Editor content DOM element
 */
helpers.getEditorContentEl = function() {

  return document.getElementById( 'editContent' );

};


/**
 * Get DOM element containing editor update button
 *
 * @return {object} editorUpdateBtn - Editor update button DOM element
 */
helpers.getEditorUpdateBtn = function() {

  return document.getElementById( 'editUpdateBtn' );

};


/**
 * Create DOM link object
 *
 * @param {string} href - Link location
 * @param {object} contents - Link contents element
 * @return {object} link - Link DOM element
 */
helpers.buildLink = function( href, contents ) {

  var link = document.createElement( 'a' );

  link.href = href;

  return link;

};

/**
 * Create li for main menu out of page object
 *
 * @param  {object} page - Page content object
 * @return {object} - DOM li element
 */
helpers.buildMenuItem = function( page ) {

  var listItem = document.createElement( 'li' ),
      link = document.createElement( 'a' ),
      linkText = document.createTextNode( page.title );


  link.href = 'home' === page.slug ? '#' : '#' + page.slug;
  link.appendChild( linkText );
  listItem.appendChild( link );

  return listItem;

};
