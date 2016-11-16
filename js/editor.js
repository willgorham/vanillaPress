/**
 * Editor file for controlling the page editor
 */

/**
 * The main editror object.
 *
 */
var editor = {};

/**
 * Initialize the editor object
 */
editor.init = function() {

  editor.listenEditorToggle();

};


/**
 * Listen for  editor toggle button click
 */
editor.listenEditorToggle = function() {

  var editorToggleEl = helpers.getEditorToggle();

  editorToggleEl.addEventListener( 'click', editor.toggle, false );

};


/**
 * Toggle editor and etitor toggle button
 */
editor.toggle = function( event ) {

  var editorEl = helpers.getEditor(),
      editorToggleEl = helpers.getEditorToggle();

  editorEl.classList.toggle( 'hidden' );
  editorToggleEl.classList.toggle( 'hidden' );

  event.preventDefault();

}
