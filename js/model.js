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
 * Get single content object from corresponding slug and content type
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

/**
 * Get single content object from corresponding slug
 *
 * @param  {string} slug - Content slug
 * @return {object} content - Content object
 */
model.getContentBySlug = function( slug ) {

  var contentObj = model.getContent( 'posts', slug );

  if ( null === contentObj ) {

    contentObj = model.getContent( 'pages', slug );

  }

  return contentObj;

};


/**
 * Get content title from slug
 *
 * @param  {string} slug - Content URL slug
 * @return {string} title - Content title
 */
model.getContentTitle = function( slug ) {

  var title,
      contentObj = model.getContentBySlug( slug );

  if ( null === contentObj ) {

    title = '404 Error';

  } else {

    title = contentObj.title;

  }

  return title;

}


/**
 * Get content text from slug
 *
 * @param  {string} slug - Content URL slug
 * @return {string} text - Content body text
 */
model.getContentText = function( slug ) {

  var text,
      contentObj = model.getContentBySlug( slug );

  if ( null === contentObj ) {

    text = 'Not Found';

  } else {

    text = contentObj.content;

  }

  return text;

}
