//
//
//
//
var model = {};

model.init = function() {

  model.setLocalStorage( jsonData );

};


model.setLocalStorage = function( data ) {

  localStorage.setItem( 'vanillaPress', data );

};


model.getLocalStorage = function() {

  return JSON.parse( localStorage.getItem( 'vanillaPress' ) );

};


model.removeLocalStorage = function() {

  localStorage.removeItem( 'vanillaPress' );

};


model.getPosts = function() {

  var posts = model.getLocalStorage();
  return posts;

}


model.getPost = function( slug ) {

  var posts = model.getLocalStorage();

  for ( var i = 0, numPosts = posts.length; i < numPosts; i++ ) {

    if ( slug === posts[i].slug ) {

      return posts[i];

    }

  }

  return null;

};
