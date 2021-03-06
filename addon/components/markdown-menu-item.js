import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { empty } from '@ember/object/computed';

import layout from 'ember-cli-markdown-resolver/templates/components/markdown-menu-item';

export default Component.extend({
  layout,
  tagName: 'li',
  classNames: ['markdown-menu-item'],

  itemPath: computed('item.path', 'treePath', function() {
    let itemPath = get(this, 'item.path'),
        treePath = get(this, 'treePath');
    if (!itemPath) { return; }
    return itemPath.replace(`${treePath}/`, '');
  }),

  noContent: empty('item.content'),

  actions: {
    onClick(fragmentIdLink) {
      let onClick = get(this, 'onClick');

      if (onClick) {
        onClick(fragmentIdLink);
      }
    }
  }
});
