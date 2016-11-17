/**
 * Editor file for controlling the page editor
 */

/**
 * The main editror object.
 *
 */
var editor = {
  currentContent: {},
  unsavedContent: false
};

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

  event.preventDefault();

};


/**
 * Reset editor to current page content
 */
editor.reset = function() {

  editor.currentContent = model.getCurrentContent();
  editor.fillEditorForm( editor.currentContent );

};


/**
 * Populate editor form with current page content
 *
 * @param  {object} contentObj - Current page object
 */
editor.fillEditorForm = function( contentObj ) {

  var editorTitleField = helpers.getEditorTitleEl(),
      editorContentField = helpers.getEditorContentEl();

  editorTitleField.value = contentObj.title;
  editorContentField.value = contentObj.content;

  editor.addEditorListeners();

};


/**
 * Add listeners to update page content when editor content is changed
 */
editor.addEditorListeners = function() {

  var editorTitleField = helpers.getEditorTitleEl(),
      editorContentField = helpers.getEditorContentEl(),
      editorUpdateBtn = helpers.getEditorUpdateBtn();

  editorTitleField.addEventListener(
    'input',
    editor.updatePageTitle,
    false
  );

  editorContentField.addEventListener(
    'input',
    editor.updatePageContent,
    false
  );

  editorUpdateBtn.addEventListener(
    'click',
    editor.saveContent,
    false
  );

};


/**
 * Handle editor Update button click event
 *
 * @param  {object} event - Click event
 */
editor.saveContent = function( event ) {

  model.saveContent( editor.currentContent );
  event.preventDefault();

};


/**
 * Updates and saves new page title from editor
 */
editor.updatePageTitle = function() {

  var titleVal = helpers.getEditorTitleEl().value;

  view.updateTitle( titleVal );
  editor.currentContent.title = titleVal;

}


/**
 * Updates and saves new page content from editor
 */
editor.updatePageContent = function() {

  var contentVal = helpers.getEditorContentEl().value;

  view.updateContent ( contentVal );
  editor.currentContent.content = contentVal;

}
