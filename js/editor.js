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

  var editorToggleEl = helpers.getEditorToggleEl();

  editorToggleEl.addEventListener( 'click', editor.toggle, false );

};


/**
 * Toggle editor and etitor toggle button
 */
editor.toggle = function( event ) {

  var editorEl = helpers.getEditorEl(),
      editorToggleEl = helpers.getEditorToggleEl();

  editorEl.classList.toggle( 'hidden' );
  editorToggleEl.classList.toggle( 'hidden' );

  if ( false === editorEl.classList.contains( 'hidden' ) ) {

    editor.loadEditorForm( model.getCurrentContent() );

  }

  event.preventDefault();

}


editor.loadEditorForm = function( contentObj ) {

  var formTitle = helpers.getEditorTitleEl(),
      formContent = helpers.getEditorContentEl();

      // console.log(formTitle);
  formTitle.value = contentObj.title;
  formContent.value = contentObj.content;

};
