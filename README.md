# boileoplate

**YFS team members please read the rulebook below before using this template. Feel free to do your own thing but if you decide to go a different route with JS/CSS practices please document it here.**

> A VueJS boilerplate using the following things:

* Webpack for bundling
* Babel for ES6
* ESLint for JS style enforcement
* SCSS for styling
* Mocha + Chai for unit testing

---

## Rulebook

### Vue Components
Components should be small and reusable. Rule of thumb if you ever use anything twice then it's a component.

Components live in their own directories and are likely to be accompanied by:

* A pure Vue component that takes props only. All data fetching should be handled by the higher order component.
* A higher order component that handles the getting and digesting of data before passing props to the pure component.
* A .spec.js file for testing the component (this will be picked up automatically by 'yarn run test')

### Styles
The project is set up by default to leverage a single SCSS file which will be imported into your App.vue component. This file (main.scss) is a list of imports in the ITCSS structure. This is a conscious decision to avoid in-component styling and its potential for duplicating styles. I also prefer it to the @import ~@common_variables_and_placeholders.scss pattern that in-component styling seems to lead to.

If you disagree with this rule then feel free to do all component styling inside your components. But if you do so please ensure that **_all_** CSS rules are done in your component files. This will avoid duplication and make it easy for other developers to find what they're looking for.




---
## Commands

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report

# run all tests
yarn run test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
