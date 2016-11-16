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
  if ( null === model.getLocalStorage() ) {
    model.setLocalStorage( data );
  }

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
model.getContentType = function( contentType ) {

  var contents = model.getLocalStorage()[contentType];

  return contents;

};


/**
 * Get specific content based on slug and type
 *
 * @param  {string} slug - Slug for desired content
 * @param  {string} contentType - Type of content desired
 * @return {object} content obj - Content object contating all conetnt info
 */
model.getContentByType = function( slug, contentType ) {

  var contents = model.getContentType( contentType );

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
model.getContent = function( slug ) {

  var contentObj = model.getContentByType( slug, 'posts' );

  if ( null === contentObj ) {

    contentObj = model.getContentByType( slug, 'pages' );

  }

  if ( null === contentObj ) {

    contentObj = {
      title: '404 Error',
      content: 'Not Found'
    };

  }

  return contentObj;

};


/**
 * Get content object of current page
 *
 * @return {object} content object - Content object of current page
 */
model.getCurrentContent = function() {

  var slug = router.getSlug();

  if ( null === slug ) {

    slug = 'home';

  }

  return model.getContent( slug );

};


/**
 * Get content title from slug
 *
 * @param  {string} slug - Content URL slug
 * @return {string} title - Content title
 */
model.getContentTitle = function( slug ) {

  var contentObj = model.getContent( slug );

  return contentObj.title;

};


/**
 * Get content text from slug
 *
 * @param  {string} slug - Content URL slug
 * @return {string} text - Content body text
 */
model.getContentText = function( slug ) {

  var contentObj = model.getContent( slug );

  return contentObj.content;

};


/**
 *
 */
model.saveContent = function( contentObj ) {

  var data = model.getLocalStorage(),
      date = new Date();

  if ( 'post' === contentObj.type ) {

    data.posts.forEach( function( post ) {
      if ( contentObj.id === post.id ) {
        post.title = contentObj.title;
        post.content = contentObj.content;
        post.modified = date.toISOString();
      }
    });

  }

  if ( 'page' === contentObj.type ) {

    data.pages.forEach( function( page ) {
      if ( contentObj.id === page.id ) {
        page.title = contentObj.title;
        page.content = contentObj.content;
        page.modified = date.toISOString();
      }
    });

  }

  model.setLocalStorage( data );

}
