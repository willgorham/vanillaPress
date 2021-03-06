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
  editor.setEditorOpen();

};


/**
 * Listen for editor toggle button click
 */
editor.listenEditorToggle = function() {

  var editorToggleEl = helpers.getEditorToggleEl();

  editorToggleEl.addEventListener( 'click', editor.handleEditorToggle, false );

};


/**
 * Handle editor toggle click
 */
editor.handleEditorToggle = function( event ) {

  event.preventDefault();
  editor.toggle();

};


/**
 * Toggle editor and etitor toggle button
 */
editor.toggle = function() {

  var editorEl = helpers.getEditorEl(),
      editorToggleEl = helpers.getEditorToggleEl(),
      links = document.querySelectorAll( 'a' );

  editorEl.classList.toggle( 'hidden' );
  editorToggleEl.classList.toggle( 'hidden' );

  if ( editorEl.classList.contains( 'hidden' ) ) {
    model.setEditorOpen( false );
    editor.unsavedContent = false;
    links.forEach( function( link ) {
      link.removeEventListener( 'click', editor.protectUnsavedContent, false );
    });
  } else {
    model.setEditorOpen( true );
    editor.currentContent = model.getCurrentContent();
    editor.fillEditorForm( editor.currentContent );
  }

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
      editorUpdateBtn = helpers.getEditorUpdateBtn(),
      links = document.querySelectorAll( 'a' );

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

  links.forEach( function( link ) {
    link.addEventListener( 'click', editor.protectUnsavedContent, false );
  });

};


/**
 * Handle editor Update button click event
 *
 * @param  {object} event - Click event
 */
editor.saveContent = function( event ) {

  event.preventDefault();
  model.saveContent( editor.currentContent );
  editor.unsavedContent = false;
  editor.animateSaveBtn();

};


/**
 * Updates and saves new page title from editor
 */
editor.updatePageTitle = function() {

  var titleVal = helpers.getEditorTitleEl().value;

  view.updateTitle( titleVal );
  editor.currentContent.title = titleVal;
  editor.unsavedContent = true;

}


/**
 * Updates and saves new page content from editor
 */
editor.updatePageContent = function() {

  var contentVal = helpers.getEditorContentEl().value;

  view.updateContent ( contentVal );
  editor.currentContent.content = contentVal;
  editor.unsavedContent = true;

}


/**
 * Create unsaved content alert when clicking away from page
 * @param  {object} event object - Click event object
 */
editor.protectUnsavedContent = function( event ) {

  if ( true === editor.unsavedContent ) {
    var confirm = window.confirm( 'You have unsaved content' );

    if ( false === confirm ) {
      event.preventDefault();
    } else {
      editor.unsavedContent = false;
    }

  }

}


/**
 * Animate editor update button on save
 */
editor.animateSaveBtn = function() {

  var btn = helpers.getEditorUpdateBtn(),
  saved = function() {
    btn.innerText = 'Update';
  },
  saving = function() {
    btn.innerText = 'Saved';
    setTimeout(saved, 900);
  };

  btn.innerText = 'Saving...';
  setTimeout(saving, 900);

}


editor.setEditorOpen = function() {

  if ( model.isEditorOpen() ) {
    editor.toggle();
  }

}
