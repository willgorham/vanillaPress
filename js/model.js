/**
 * Model file for handling data
 */

/**
 * The main model object.
 *
 */
var model = {};

model.init = function() {

  // Initialize data in local storage
  model.setLocalStorage( data );

};


/**
 * Set data to local storage
 *
 * @param {object} data - Data to store
 */
model.setLocalStorage = function( data ) {

  localStorage.setItem( 'vanillaPress', JSON.stringify( data ) );

};


/**
 * Get data from local storage
 *
 * @return {object} data - Object containing all site data
 */
model.getLocalStorage = function() {

  return JSON.parse( localStorage.getItem( 'vanillaPress' ) );

};


/**
 * Remove data from local storage
 *
 */
model.removeLocalStorage = function() {

  localStorage.removeItem( 'vanillaPress' );

};


/**
 * Get all content of designated type from local storage
 *
 * @param {string} contentType - Content type to query
 * @return {object[]} contents - Array of all contents of type contentType
 */
model.getContents = function( contentType ) {

  var contents = model.getLocalStorage()[contentType];
  return contents;

}


/**
 * Get single content object from corresponding slug
 *
 * @param  {string} contentType - Content type to query
 * @param  {string} slug - Content slug
 * @return {object} content - Content object
 */
model.getContent = function( contentType, slug ) {

  var contents = model.getLocalStorage()[contentType];

  for ( var i = 0, max = contents.length; i < max; i++ ) {

    if ( slug === contents[i].slug ) {

      return contents[i];

    }

  }

  return null;

};
