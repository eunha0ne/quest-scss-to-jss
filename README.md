This project aimed to help one of my friend to converting SCSS to JSS syntax with an example I learned recently. So that the solution might not the best answer for the case. If you know how, feel free to leave a pull request.

# CSS-in-JS
**CSS uses a global namespace for CSS Selectors that can easily result in style conflicts throughout your application when building an application using modern web components.** You can avoid this problem by nesting CSS selectors or use a styling convention like BEM but this becomes complicated quickly and won’t scale.

**CSS-in-JS avoids these problems entirely by generating unique class names when styles are converted to CSS.** This allows you to think about styles on a component level with out worrying about styles defined elsewhere.

## install
* [JSS](https://cssinjs.org/jss-syntax?v=v10.0.0-alpha.21)
* [yarn](https://yarnpkg.com/en/docs/install#windows-stable)
```
yarn add react-jss
```
