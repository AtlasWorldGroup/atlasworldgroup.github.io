---
layout: page
title: AtlasNet Style Guide
---
{% include JB/setup %}

The purpose of this site is to aid in documenting AtlasNet application standards.

## Files

To implement the AtlasNet standards for styling using Bootstrap, you will need our custom built `bootstrap.css` and `atlas-toolkit.css`.

~~~bash
Install-Package Atlas.Standard
~~~
NOTE: This NuGet package is still in development. Currently, it is only available for C#.

### Files Included
~~~bash
Solution/
├── css/
│   ├── fonts-awesome/
│       ├── font-awesome.min.css
│   ├── fonts
│       ├── font-awesome-webfont.eot
│       ├── font-awesome-webfont.svg
│       ├── font-awesome-webfont.ttf
│       ├── font-awesome-webfont.woff
│       ├── font-awesome-webfont.woff2
│       ├── FontAwesome.otf
│   ├── atlas-toolkit.css
│   ├── bootstrap.css
│   ├── bootstrap.min.css
│   ├── bootstrap.plugins.css
│   ├── tablesaw.bare.css
├── images/
│   ├── atlasnet-white.png
├── js/
    ├── blockUI.js
    └── bootstrap.js
    └── bootstrap.plugins.js
    └── tablesaw-init.js
    └── tablesaw.js
~~~
## CSS Styling

### atlas-toolkit.css

#### Default Element Styles and Variants
~~~css
@-ms-view-port {
  width: auto !important; /* Without this, the canvas is under the scrollbar on IE */
}

body {
  padding-top: 95px! /* To push the body below the persistent navigation menu (with a command bar) */
}

/* applied to the body tag */
.body-short {
  padding-top: 51px !important; /* To push the body below the persistent navigation menu (without a command bar) */
}

/* applied to the body tag */
.body-none {
  padding-top: 0px !important; /*  */
}

footer {
  padding-top: 25px;
  padding-bottom: 10px;
}

select option[default="true"] {
  color: #808080;
}
~~~

#### Navigation Styles
~~~css
/** applied to the parent <nav> element (.navbar class should be on the same element)*/
.navbar-short {
  /** There are several styles and classes, including media queries for responsive-ness for this element
   *  Its primary function is to have a 30px (in height) navbar
   */
}

/** applied to the parent <nav> element (.navbar class should be on the same element)
 *  NOTE: this is not currently used in any Atlas Standards for navigation
 */
.navbar-tall {
  /** There are several styles and classes, including media queries for responsive-ness for this element
   * Its primary function is to have a 65px (in height) navbar
   */
}

/** applied to a child of the <a class="navbar-brand"> element
 * is the parent element of the <img class="brand-img"> and the text beside it (AppName)
 */
.navbar-brand-name {
  display: inline-block;
  float: left;
}
~~~

#### ECT
The rest of the styles in this sheet are explained via examples and other pages. This sheet includes the radio styles, checkbox styles, and modal styles that are extended from core Bootstrap. They can be found in the Form Controls documentation.

## Icons

We use `Font Awesome` for our icons. You can find information regarding this CSS toolkit at <a href="http://fontawesome.io" target="_blank">http://fontawesome.io</a>
