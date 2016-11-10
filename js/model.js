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
  model.setLocalStorage( jsonData );

};


/**
 * Set data to local storage
 *
 * @param {string} data - JSON string of all site data
 */
model.setLocalStorage = function( data ) {

  localStorage.setItem( 'vanillaPress', data );

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
 * Get all posts from local storage
 *
 * @return {object} posts - Object containing all posts
 */
model.getPosts = function() {

  var posts = model.getLocalStorage();
  return posts;

}


/**
 * Get single post object from corresponding slug
 *
 * @param  {string} slug - Post slug
 * @return {object} post - Post object
 */
model.getPost = function( slug ) {

  var posts = model.getLocalStorage();

  for ( var i = 0, numPosts = posts.length; i < numPosts; i++ ) {

    if ( slug === posts[i].slug ) {

      return posts[i];

    }

  }

  return null;

};
