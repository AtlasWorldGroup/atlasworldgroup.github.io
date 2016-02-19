---
layout: page
title: Master Page
---
{% include JB/setup %}

The following page will describe the usage of the Atlas Master Page.

## Preview
<nav class="navbar navbar-short navbar-inverse navbar-static-top">
      <div>
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="fa fa-user" style="color:white;"></span>
          </button>
          <a class="navbar-brand">           
            <div class="navbar-brand-name">            
              <img class="brand-img" height="26" src="/assets/themes/atlas/images/atlasnet-white.png" />
              App Name
            </div>
          </a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li data-toggle="tooltip-bottom" title="User Profile">
              <a href="#">Alex Kempf</a>
            </li>
          </ul>
        </div>
      </div>
</nav>
<nav class="navbar navbar-center navbar-default navbar-static-top" runat="server" id="navCommands">
      <div>
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#commands" aria-expanded="false" aria-controls="commands">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div id="commands" class="navbar-collapse collapse navbar-center">
          <ul class="nav navbar-nav">
		    <li><a href="#">Commands Bar</a></li>
		  </ul>
        </div>
      </div>
</nav>

## Content PlaceHolders
`HeadContentPlaceholder` is placed in the documents `<head>` tag. 
It is designed to run page specific CSS files to either override the *Atlas Toolkit/Bootstrap* CSS or to have non-global CSS files imported to the page.
Usage occurs on .APSX:

~~~html
<asp:Content ID="HeadContent" ContentPlaceHolderID="HeadContentPlaceholder" runat="server">
  <!-- Any dependencies needed for the page...ie additional css links -->
</asp:Content>
~~~

`CommandContentPlaceHolder` is part of the `<nav>` tag for the commands bar. 
This section of the `<nav>`, specifically, is for the `<ul>` command links.
Usage occurs on .APSX:

~~~html
<asp:Content ID="CommandsContent" ContentPlaceHolderID="CommandContentPlaceHolder" runat="server">
  <!-- Commands Navbar unordered list -->
</asp:Content>
~~~

`ContentPlaceHolder` is the bulk of the page. It is not encapsulated by `class="content"`, so you will need to define that
as needed in the `<asp:Content>` 
Usage occurs on .APSX:

~~~html
<asp:Content ID="EditShipmentContent" ContentPlaceHolderID="ContentPlaceHolder" runat="server">
  <!-- Main page content -->
</asp:Content>
~~~

## Page Properties
`AppName` [string] is used to set the Application's name displayed on the global navigation. Usage occurs in a page code behind:

~~~csharp
Master.AppName = "Web Dispatch";
~~~
	
`UserFullName` [string] is used to set the User's name displayed on the global navigation. Usage occurs in a page code behind:

~~~csharp
Master.UserFullName = MethodToGetName();
~~~
	
`CommandBar` [boolean] is used to display the command bar. By default, the command bar is not displayed. Usage:

~~~csharp
Master.CommandBar = true;
~~~
