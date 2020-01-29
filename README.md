# JS30

## Drumkit: Keystrokes are associated with different drum sounds
* Data attributes can be used to add information to HTML elements (in this case associating the keystroke with the corresponding sound file)
* Playing basic sounds with `<audio>` tags
* The `<kbd>` tag stylistically adds monospace, but can be useful for semantic meaning

## Clock: Analogue clock that updates in real time
* Create a circle using `border-radius: 50%`
* Consider the axis of rotation: move the axis to the end of the div to rotate around the end rather than the centre using `transform-origin`
* `setInterval` function to determine how often the clock updates
* Basic transitions including `transition-timing-function` to simulate proper movement of the seconds hand

## Array Cardio 1: Exercises using `filter`, `map`, `sort`, and `reduce`
* `sort`testing function
```
if (a < b)
  return -1;
else
  return 1;
```
* `reduce` - set the initial value

## Type Ahead: Populate and filter a list of cities and states as you type, highlighting the searched letters
* Using regex to search for a match
* Using `fetch` to retrieve data from JSON and `spread` operator to populate an array with it: 
```
 fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));
```
## Array Cardio 2: Exercises using `some`, `every`, and `find`
## HTML Canvas: Draw lines that vary in thickness and colour
* `const ctx = canvas.getContext('2d');`
* `ctx.strokeStyle = '#FF4136';` sets the colour, can use `ctx.strokeStyle = `hsl(${hue}, 100%, 59%)`;` (hue cycles around, does not need to be clamped)
* `ctx.lineCap = 'round';` Makes the endpoints of the line round
* `ctx.lineJoin = 'round';` Rounds off the corners of the shape
* `ctx.lineWidth`
* Event handlers: `mouseup`, `mousedown`, `mousemove`, `mouseout`
* Drawing the shape: 
```
ctx.beginPath();
ctx.moveTo(lastX, lastY);
ctx.lineTo(e.clientX, e.clientY);
ctx.stroke();
```
## Dev Tools Tricks: Useful `console` methods
* Testing: 
```
const para = document.querySelector('p');
console.assert(para.classList.contains('testForThis'), 'Paragraph does not have the class you thought it would');
```
* `console.dir(para);` Viewing DOM Elements - gives you a dropdown with all the methods on the element
* Grouping together
```
dogs.forEach(dog => {
  console.group(`${dog.name}`); // Or use groupCollapsed
  ...
  console.groupEnd(`${dog.name}`);
});
```
* `console.count('Counting...');` Counts the number of occurrances
* Timing: 
```
console.time('Time to fetch data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
      console.timeEnd('Time to fetch data');
  });
  ```
## Checkboxes: Select multiple checkboxes with Shift
* Use 'inbetween' flag to determine when to start/stop selecting

## Video player: Custom controls for playing video (volume, playback rate, scrubber, play/pause)
* `video` element and methods
* Calculating percentages of filled elements and relating them to mouse position

## Key detection: Listens for a secret code and then displays a unicorn
* Cornify.com adds unicorns :heart:

## Slide in on scroll: Slides images into place as they become visible through scrolling down
* debounce function - stops spamming a function repeatedly (set a timeout of x seconds before letting it run again)
* `window.scrollY` is the amount of pixels we have scrolled down (from the top of the page)
* `window.innerHeight` is the size of the visible area (viewport)
* Transition/translate with a percentage (or negative percentage to translate R->L) to 0:
```
.align-right.slide-in {
    transform: translateX(30%);
} 

.slide-in.active {
    transform: translateX(0%);
  }
```
## Local Storage Event Delegation: Dynamically add checkboxes and persist between sessions
* `localStorage.getItem('item')` and `localStorage.setItem('item', item)` - stores data as a string.
* Use `JSON.parse()`/`JSON.stringify` to convert object arrays into/out of strings
* Can't listen for checkboxes that have yet to be created, so listen to the UL (parent) and delegate the event to the checkboxes (children)

## Mouse Move Shadow: Create and move text shadow on h1 according to where the mouse is
* If you hover over a child of the move area (i.e. the h1), the mouse pos coordinates will show the position relative to the h1, not the containing div. So add on the extra X + Y from the top/left edge of the page to make it consistent, (regardless of whether the mouse is over the h1 or the div).
* `text-shadow`: offset-x, offset-y, blur radius, colour

## Sort Without Articles: Sort a list irregardless of its articles ('A', 'An', 'The')
* Use a regex to strip the articles in the sort function, without actually modifying the original array.

## Add Times: Sum up the total times of videos 
* Split on the ':' and use `reduce` to accumulate the values
* `%` helps to convert decimals to times

## Speech Recognition: Types words as you speak them
* Uses Speech Recognition API

## Link Highlighter: Moves focussed bubble to links as you hover over them
* Use `getBoundingClientRect()` to get element's width/height/pos
* Note that scrolling will screw up the position, so need to compensate with window.scrollY

## Speech Synthesis: Reads text in different voices, with settings for pitch and rate
* Uses Speech Synthesis API
* Data attributes make it easier to set pitch/rate/text in one function

## Sticky Nav: Fixes the nav bar when you've scrolled past it, and transitions in the logo
* Add `position: fixed` once the page has scrolled past the navbar, but consider that this takes the navbar out of the control flow (so need to add back in the height of the navbar to avoid jumping text).
* Nice scale effect from 98% -> 100% to enhance the focus of the page once the navbar has been fixed

## Event Handlers: Edge cases with Event Handlers
* Capture: When you click on the innermost div, the capture happens top to bottom (html -> body -> div1 -> div2 -> div3).
* Bubbling: Once it's got to the innermost div, the events fire from bottom to top (div3 -> div2 -> div1 -> body -> html).
* `addEventListener` can take a `capture` argument, which makes the events fire on capture (i.e. top -> bottom).
* `addEventListener` can take a `once` argument, which unbinds the eventlistener after being triggered once (effectively removes the event handler altogether). Useful for checkouts when you don't want customers to pay for the item more than once.
* `e.stopPropogation` will stop bubbling from happening (just fires for the innermost div, say).

## Stripe Dropdown: Move smoothly between dropdowns
* Nest the `<a>` tags within `<li>` so that event handlers can detect hover on the dropdown list - just listening to the `<a>` won't capture the dropped down elements
* Note that `this` changes when you enter into a function (e.g. `setTimeout(function() {})`), but inherits from the parent if you use an arrow function instead (`setTimeout(() => {})`).
* `display: block` and `opacity: 1` are set separately to give the nice hover over transition - similar to how Angular/React does transitions.
* With the `setTimeout`, sometimes the class adds can get out of sync, so make sure to check if the enter class has been added before adding the active one.

## Click And Drag Scroll: Scroll an element to the left or right and update its position, look and feel
* `e.preventDefault()` stops any unwanted interaction with elements on the page that might interfere with the mousedown handling
* `element.scrollLeft` gives you the number of pixels that the element has scrolled, and you can set this to actually move the item.

## Video Speed Controller: Dynamically speed up/slow down video with a custom control

