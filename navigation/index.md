---
layout: page
title: Navigation
---
{% include JB/setup %}

The following page shows the global navigation and command bar navigation.

## Preview

Below is a preview and a snippet of the navigation bar that is to be used on AtlasNet applications. The user's full name is expected to be displayed.

A full page example is available <a href="example">here</a>.

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

~~~html
<div class="navbar-fixed-top">
  <!-- Global Navigation -->
  <nav id="navigation" class="navbar navbar-static-top navbar-short navbar-inverse" runat="server">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="fa fa-user" style="color: white;"></span>
        </button>
        <a class="navbar-brand">
          <div class="navbar-brand-name">
            <img class="brand-img" src="<%= ResolveUrl("~/images/atlasnet-white.png")%>" />
            <asp:Label runat="server" ID="lblApp"></asp:Label>
          </div>
        </a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li data-toggle="tooltip-bottom" title="User Profile">
            <a href="<%= ResolveUrl("~/Preferences.aspx")%>">
            <asp:Label ID="lblFullName" runat="server"></asp:Label></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Global Navigation -->
  <!-- Commands Navbar -->
  <nav class="navbar navbar-center navbar-static-top navbar-default" runat="server" id="navCommands">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#commands" aria-expanded="false" aria-controls="commands">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div id="commands" class="navbar-collapse collapse">
        <asp:ContentPlaceHolder ID="CommandContentPlaceHolder" runat="server">
        </asp:ContentPlaceHolder>
      </div>
    </div>
  </nav>
  <!-- End Commands Navbar -->
</div>
~~~
<div class="alert alert-info">
  If you do not have a need for the command bar, please hide it and add `body-short` to the body tag.
</div>
