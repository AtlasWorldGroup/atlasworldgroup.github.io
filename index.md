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

#### Print
Print columns are available. They can be added to any column by adding a `.col-p-*` class. For example:
~~~html
<div class="row">
  <div class="col-p-12 col-sm-6 col-md-4">
  </div>
</div>
~~~

#### Helper Classes
~~~css
.m-a-0 {
  margin: 0 !important;
}
.m-t-0 {
  margin-top: 0 !important;
}
.m-r-0 {
  margin-right: 0 !important;
}
.m-b-0 {
  margin-bottom: 0 !important;
}
.m-l-0 {
  margin-left: 0 !important;
}
.m-x-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}
.m-y-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.m-a {
  margin: 20px !important;
}
.m-t {
  margin-top: 20px !important;
}
.m-r {
  margin-right: 20px !important;
}
.m-b {
  margin-bottom: 20px !important;
}
.m-l {
  margin-left: 20px !important;
}
.m-x {
  margin-right: 20px !important;
  margin-left: 20px !important;
}
.m-y {
  margin-top: 20px !important;
  margin-bottom: 20px !important;
}
.m-x-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}
.m-a-md {
  margin: 30px !important;
}
.m-t-md {
  margin-top: 30px !important;
}
.m-r-md {
  margin-right: 30px !important;
}
.m-b-md {
  margin-bottom: 30px !important;
}
.m-l-md {
  margin-left: 30px !important;
}
.m-x-md {
  margin-right: 30px !important;
  margin-left: 30px !important;
}
.m-y-md {
  margin-top: 30px !important;
  margin-bottom: 30px !important;
}
.m-a-lg {
  margin: 60px !important;
}
.m-t-lg {
  margin-top: 60px !important;
}
.m-r-lg {
  margin-right: 60px !important;
}
.m-b-lg {
  margin-bottom: 60px !important;
}
.m-l-lg {
  margin-left: 60px !important;
}
.m-x-lg {
  margin-right: 60px !important;
  margin-left: 60px !important;
}
.m-y-lg {
  margin-top: 60px !important;
  margin-bottom: 60px !important;
}
.p-a-0 {
  padding: 0 !important;
}
.p-t-0 {
  padding-top: 0 !important;
}
.p-r-0 {
  padding-right: 0 !important;
}
.p-b-0 {
  padding-bottom: 0 !important;
}
.p-l-0 {
  padding-left: 0 !important;
}
.p-x-0 {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.p-y-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.p-a {
  padding: 20px !important;
}
.p-t {
  padding-top: 20px !important;
}
.p-r {
  padding-right: 20px !important;
}
.p-b {
  padding-bottom: 20px !important;
}
.p-l {
  padding-left: 20px !important;
}
.p-x {
  padding-right: 20px !important;
  padding-left: 20px !important;
}
.p-y {
  padding-top: 20px !important;
  padding-bottom: 20px !important;
}
.p-a-md {
  padding: 30px !important;
}
.p-t-md {
  padding-top: 30px !important;
}
.p-r-md {
  padding-right: 30px !important;
}
.p-b-md {
  padding-bottom: 30px !important;
}
.p-l-md {
  padding-left: 30px !important;
}
.p-x-md {
  padding-right: 30px !important;
  padding-left: 30px !important;
}
.p-y-md {
  padding-top: 30px !important;
  padding-bottom: 30px !important;
}
.p-a-lg {
  padding: 60px !important;
}
.p-t-lg {
  padding-top: 60px !important;
}
.p-r-lg {
  padding-right: 60px !important;
}
.p-b-lg {
  padding-bottom: 60px !important;
}
.p-l-lg {
  padding-left: 60px !important;
}
.p-x-lg {
  padding-right: 60px !important;
  padding-left: 60px !important;
}
.p-y-lg {
  padding-top: 60px !important;
  padding-bottom: 60px !important;
}
~~~

#### ECT
The rest of the styles in this sheet are explained via examples and other pages. This sheet includes the radio styles, checkbox styles, and modal styles that are extended from core Bootstrap. They can be found in the Form Controls documentation.

## Icons

We use `Font Awesome` for our icons. You can find information regarding this CSS toolkit at <a href="http://fontawesome.io" target="_blank">http://fontawesome.io</a>
