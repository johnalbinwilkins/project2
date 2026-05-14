# Bonus features

## CSS

If you have extra time, you should try out these other CSS properties.

### Fonts

**Add some fonts!**

1.  Look at the [Google Fonts website](https://fonts.google.com/?lang=en_Latn&preview.text=Hello,%205IN%20students!%20Check%20out%20these%20fonts…).
    1. Look at the filters on the left side, especially the “Feeling”, “Appearance”, and “Seasonal” filters.

    2. When you find a font, click on it.

    3. Then click on the “Get font” button.

    4. Then click on the “Get embed code” button.

2.  Copy the code under “Embed code in the `<head>` of your html” and put it in your `index.html` file.

3.  Under the “CSS class”, copy the `font-family` line and put it in your `page.css`’s `h1` rule.

4.  Find another font and add to your CSS as above. This time add the `font-family` line to your `body` rule.

### Rounded corners

**Learn about `border-radius`!**

Add a `background-color` and `color` to your button. Then add `border-radius: 5px;` to your button.

> What happens when you use `border-radius: 50%`? Fifty percent of what? (It's fifty percent of the width or height.)

> What happens when you use `border-radius: 0 20px 20px 0;`?

### Shadows

**Learn about `box-shadow`!**

You can add a `box-shadow` to any HTML element that creates a box. (Some elements, like `<b>` and `<i>`, are used _inline_ with text and do not create a box.)

1.  Try adding this to your button styles:

    ```css
    box-shadow: 10px 5px 5px 0 red;
    ```

2.  Try changing the values to see what happens. What happens when you use `0` for some of the values?

3.  Try changing the `border-radius` of the button while it has a shadow. How does the shadow change?

### Responsive

**Make your page _responsive_.**

_Responsive website design_ is a technique to make a website look good on desktop computers and mobile devices (like phones and tablets). It does this by using slightly different CSS styles for different window widths.

The full techniques (skills) for doing this are more advanced than we will learn, but here’s some simple techniques.

1.  Open your page in your browser. Make the browser window narrower.

    > What happens when your window is narrower than your `.center` rule’s `width`?

2.  To prevent your content from going off the right edge of the browser window (and showing a horizontal scrollbar), use the `max-width` property in your `.center` rule instead of the `width` property.

### Color gradients

**Learn about `background` gradients!**

1.  Add this to our footer styles:

    ```css
    background-image: linear-gradient(to bottom, darkslateblue, darkslategrey);
    ```

2.  You change the direction of the gradient with `to top`, `to left`, or `to right`.

3.  There are many, _many_ other options. If you want to learn more, read the [CSS Tricks’ article about linear-gradient](https://css-tricks.com/almanac/functions/l/linear-gradient/).

<!-- Forces markdown to properly nest ordered lists. -->
<style type="text/css">
    ol ol { list-style-type: upper-alpha; }
    ol ol ol { list-style-type: lower-alpha; }
</style>
