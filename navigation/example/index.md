---
layout: sample
title: Navigation Example
---
{% include JB/setup %}

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
            <img class="brand-img" src="/assets/themes/atlas/images/atlasnet-white-resized.png" />
            App Name
          </div>
        </a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li data-toggle="tooltip-bottom" title="User Profile">
            <a href="#">
              Username
            </a>
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
        <ul class="nav navbar-nav">
        <li data-toggle="tooltip-bottom" title="Command 1">
          <a href="#">
            <i class="fa fa-check"></i> <span class="hidden-sm hidden-md">Command 1</span>
          </a>
        </li>
        <li data-toggle="tooltip-bottom" title="Command 2">
          <a href="#">
            <i class="fa fa-check-circle"></i> <span class="hidden-sm hidden-md">Command 2</span>
          </a>
        </li>
        <li data-toggle="tooltip-bottom" title="Command 3">
          <a href="#">
            <i class="fa fa-check-circle-o"></i> <span class="hidden-sm hidden-md">Command 3</span>
          </a>
        </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Commands Navbar -->
</div>
<div class="container" style="min-height:2000px">
  Page content...
</div>
