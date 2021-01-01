import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

// Build a custom sidebar for Sanity
function Sidebar() {
  return S.list()
    .title(`Brum's Slices`)
    .items([
      // Create a new sub ite
      S.listItem()
        .title('Home Page')
        .icon(() => <strong>🌴 </strong>)
        .child(
          S.editor()
            .schemaType('storeSettings')
            // make a new document ID, so we don't have a random string of numbers
            .documentId('downtown')
        ),
      // Add in the rest of our document items
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}

export default Sidebar;
