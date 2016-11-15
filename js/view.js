/**
 * View file for displaying content
 */

/**
 * The main view object.
 *
 */
var view = {};

view.init = function() {

  view.showMainMenu();

};


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
 * Get and display a single content item
 *
 * @param  {object} slug - Slug of content to show
 */
view.showContent = function( slug ) {

  var contentObj = model.getContent( 'posts', slug ),
      titleEl = helpers.getPageTitle(),
      contentEl = helpers.getPageContent();

  if ( null === contentObj ) {
    contentObj = model.getContent( 'pages', slug );
  }

  if ( null === contentObj ) {
    contentObj = {
      title: '404 Error',
      content: 'Page not found'
    };
  }

  titleEl.innerHTML = contentObj.title;
  contentEl.innerHTML = contentObj.content;

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
view.showMainMenu = function() {

  var pages = model.getContents( 'pages' ),
      menuFrag = document.createDocumentFragment(),
      menuEl = helpers.getMainMenu();

  for ( var i = 0, max = pages.length; i < max; i++ ) {

    menuFrag.appendChild( helpers.buildMenuItem( pages[i] ) );

  }

  menuEl.appendChild( menuFrag );

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
