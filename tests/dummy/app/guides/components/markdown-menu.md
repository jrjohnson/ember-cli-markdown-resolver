---
title: markdown-menu
order: 0
---

<span class="codelink">
[&rarr; addon/components/markdown-menu.js](https://github.com/willviles/ember-cli-markdown-resolver/blob/master/addon/components/markdown-menu.js)
</span>

Ember CLI Markdown Resolver defines a `markdown-menu` component for creating nested menus from your markdown file trees and can be styled using your own css. It uses a `markdown-menu-item` component to loop through each level of nesting.

```hbs
<!-- templates/guides.hbs -->

{{markdown-menu title="My Markdown Menu" tree=model}}
{{outlet}}
```

##### Styles

<span class="codelink">
[&rarr; tests/dummy/app/styles/components/markdown/_menu.scss](https://github.com/willviles/ember-cli-markdown-resolver/blob/master/tests/dummy/app/styles/components/markdown/_menu.scss)
</span>

The simple menu on this page has been styled using the following css.

```css
.markdown-menu {
  .markdown-menu-title {
    font-weight: 800;
    font-size: 1.1em;
    text-transform: capitalize;
    margin-bottom: .75em;
  }
  & > ul {
    a {
      padding: .5em 0;
      &:hover {
        font-weight: 800;
      }
      &.active {
        color: red;
        font-weight: 800;
      }
    }
    ul {
      margin-left: 1em;
    }
  }
}

```
