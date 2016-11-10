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

  var posts = model.getContents('posts'),
      postsFrag = document.createDocumentFragment(),
      pageContent = helpers.getPageContent(),
      pageTitle = helpers.getPageTitle();

  for ( var i = 0, max = posts.length; i < max; i++ ) {

    postsFrag.appendChild( view.buildPost( posts[i] ) );

  }

  pageContent.appendChild( postsFrag );
  pageTitle.innerHTML = 'Blog Posts';

};


/**
 * Get and display a single post
 *
 * @param  {object} slug - Slug of post to show
 */
view.showPost = function( slug ) {

  var post = model.getContent( 'posts', slug ),
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
  divEl.appendChild( document.createTextNode( post.content ) );
  articleEl.appendChild( titleEl );
  articleEl.appendChild( divEl );

  return articleEl;

};


/**
 * Create main menu links for pages
 *
 */
view.createMainMenu = function() {

  var pages = getContents( 'pages' ),
      menuFrag = document.createDocumentFragment(),
      menuEl = helpers.getMainMenu();



}


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
