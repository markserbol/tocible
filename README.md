# jQuery Tocible
A lightweight jQuery plugin for creating table of contents navigation menu.

[![jQuery Tocible](http://i.imgur.com/i3WQ9jk.png "jQuery Tocible")](https://github.com/markserbol/tocible)

## Demo
[View demo on http://markserbol.github.io/tocible/](http://markserbol.github.io/tocible/)


## Basic Usage
jQuery Tocible creates a table of contents navigation menu that animates anchoring on click and follows user scrolling.

Include the latest jQuery library together with `jquery.tocible.css` and `jquery.tocible.js` in your document's `<head>` and call `.tocible()`.

### HTML
````html
<div id="contents">

    <div class="ref">
      <!-- 
        This element will be the reference 
        for the navigation list positioning, 
        especially on RWD, so position well 
        to your liking. 
      -->
    </div>
  
    <article>
        <h2>Heading</h2>
        <p>...</p>
        <h3>SubHeading</h3>
        <p>...</p>	
    </article>
      
</div>
````
### JavaScript 
````javascript
$('#container').tocible({
    heading: 'h2', //[selector], the first level heading
    subheading: 'h3', //[selector], the second level heading
    reference:'.ref', //[selector], reference element for horizontal positioning
    title: '', //[selector or string], title of the menu
    hash: false, //[boolean], setting true will enable URL hashing on click
    offsetTop: 50, //[number], spacing/margin above the menu
    offsetTopContent: 150, //[number], spacing/margin above the content
    speed: 800, //[number or string ('slow' & 'fast')], duration of the animation when jumping to the clicked content
    collapsible: true //[boolean], enabling true will auto collapse sub level heading not being scrolled into
    maxWidth: 150 //[number], set max-width of the navigation menu
});
````

## Compatibility
Tested on modern browsers � Chrome, Firefox, Safari, also IE.

## Changelog
- 	v1.2.0 (24 Jun 2014)

	Restructure to support Responsive Design
	
	Rename plugin options: `offset` to `offsetTop`, `navigation` to `reference`

	Add option `maxWidth`, set the menu's "max-width" property

- 	v1.1.1 (25 Jan 2014)

	Fix menu left positioning

- 	v1.1.0 (13 Jan 2014)

	Add option `collapsible`, for collapsing subheading list

	Modify option defaults

- 	v1.0.2 (10 Jan 2014)

	Initial release


## License
jQuery Tocible is under [MIT License](http://opensource.org/licenses/MIT)

That's it! Please star, fork, and don't hesitate to raise an issue.
