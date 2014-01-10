# Tocible
A lightweight jQuery plugin for creating table of contents navigation menu.

[![Tocible](http://i.imgur.com/yyFZdiq.png "Tocible")](https://github.com/markserbol/tocible)

## Demo
[View demo](http://markserbol.github.io/tocible/)


## Basic Usage
Tocible creates a table of contents navigation menu that animates anchoring on click and follows the user scrolling.

Include the latest jQuery library together with `tocible.css` and `jquery.tocible.js` in your document's `<head>` and call `.tocible()`.

### Markup
````html
<div id="container">
    <article>
        <h2>Heading</h2>
        <p>...</p>
        <h3>SubHeading</h3>
        <p>...</p>    
    </article>
    <nav>
      <!-- This will hold the navigation list, 
      position this element to your liking -->
    </nav>
</div>
````
### JavaScript 
````javascript
$('#container').tocible({
    heading: 'h2', //required, selector, the first level heading
    subheading: 'h3', //required, selector, the second level heading
    navigation: 'nav', //required, selector, navigation list container
    title: 'h3', //optional, selector or string, title of the navigation
    hash: false, //optional, boolean, setting true will enable URL hashing on click
    offset: 50, //optional, number, top spacing/margin for the navigation
    speed: 500 //optional, number or string ('slow' & 'fast'), animation speed when anchoring
});
````

## Compatibility
Tested on modern browsers – Chrome, Firefox, Safari, also IE.

## License
Tocible is under [MIT License](http://opensource.org/licenses/MIT)

That's it!

To learn more visit the plugin repo at [GitHub](https://github.com/markserbol/tocible), or follow me on [Twitter](https://twitter.com/mark_serbol).
