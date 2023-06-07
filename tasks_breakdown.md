**Requirements**

1. Input type color, which lets user to choose color.
2. An input with drop down, for the user to select the option.
3. A button, which gets the color the Color api and displays them on the screen.
4. Display the fetched colors on the screen, vertically.
5. Each color's hex values should display below the color itself.

_HTML Breakdown_

**Main Tag**

1. An input type color
2. For the Drop-down options, use Select-option tag.
3. A Button should also be there

**Section Tag**

1. A div which will be created in HTML.
   - a _p tag_ will be created in JS.

**Footer Tage**

1. The hex value corresding to the color itself.

_JavaScript_

**High Level Overview:**

1. Make an api call to the colors api
2. Get the colors from the api
3. Store them in an element
4. render them on the page.
5. Get the corresponding color's hex color.
6. Render it on the page.

_BREAKDOWN_
**First Task:**

1. Get the input seed color value, when user change the color using their mouse. ✅
2. Log it on the console. ✅

3. Get the option's value when users change the value in select tag.
4. Log it on the console.

**Parameters needed to make Api call from Colors Api**

1. Get Hex color value from the input type color, when user changes the color.✅
2. Get Select's option tag value, when user changes the value.✅

**How to make an API call**

1. Substitute the hex color and option's value in the api, and then click on the _Get Color Scheme_ button to make the GET request from the API.✅

_REFACTOR_

1. How to combine event listener for the input event.✅
2. How to have the input's values returned at the global level.✅

<!-- Finished Tasks -->

1. colors are getting rendered. ✅
2. rendered their hex values and name of the color. ✅
3. did rough layout for the elements.✅

<!-- Next Task -->

**Question: How to render the colors by default?**

1. Make the fetch request default.
2. Then all the fetch request will be done by clicking on the button.
