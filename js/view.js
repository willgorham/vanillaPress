//
//
//
//
var view = {};

view.init = function() {

};


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


view.showPost = function( slug ) {

  var post = model.getPost( slug ),
      titleEl = helpers.getPageTitle(),
      contentEl = helpers.getPageContent();

  titleEl.innerHTML = post.title;
  contentEl.innerHTML = post.content;

};


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


view.clearContent = function() {

  var titleEl = helpers.getPageTitle(),
      contentEl = helpers.getPageContent();

  titleEl.innerHTML = '';
  contentEl.innerHTML = '';

};
