/**
 * View file for displaying content
 */

/**
 * The main view object.
 *
 */
var view = {};

view.init = function() {};


/**
 * Get and display all posts
 *
 */
view.showPosts = function() {

  var posts = model.getPosts(),
      postsFrag = document.createDocumentFragment(),
      postsWrapper = document.createElement( 'div' ),
      pageContent = helpers.getPageContent();

  for ( var i = 0, max = posts.length; i < max; i++ ) {

    postsWrapper.appendChild( view.buildPost( posts[i] ) );

  }

  postsWrapper.id = 'blogPosts';
  postsFrag.appendChild( postsWrapper );
  pageContent.appendChild( postsFrag );

};


/**
 * Get and display a single post
 *
 * @param  {object} slug - Slug of post to show
 */
view.showPost = function( slug ) {

  var post = model.getPost( slug ),
      titleEl = helpers.getPageTitle(),
      contentEl = helpers.getPageContent();

  titleEl.innerHTML = post.title;
  contentEl.innerHTML = post.content;

};


/**
 * Build HTML markup for single post
 *
 * @param  {object} post - Post object to use
 * @return {object} articleEl - Document object with formatted post content
 */
view.buildPost = function( post ) {

  var articleEl = document.createElement('article'),
      aEl = document.createElement('a'),
      titleEl = document.createElement('h3'),
      titleText = document.createTextNode(post.title),
      divEl = document.createElement('div');

  aEl.setAttribute( 'href', '#' + post.slug );
  aEl.appendChild( titleText );
  titleEl.appendChild( aEl );
  divEl.innerHTML = post.content;
  articleEl.appendChild( titleEl );
  articleEl.appendChild( divEl );

  return articleEl;

};


/**
 * Clear page title and content
 *
 */
view.clearContent = function() {

  var titleEl = helpers.getPageTitle(),
      contentEl = helpers.getPageContent();

  titleEl.innerHTML = '';
  contentEl.innerHTML = '';

};
