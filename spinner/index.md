---
layout: page
title: Spinner / Block UI
---
{% include JB/setup %}

We use `blockUI.js` to show a spinner/loading screen, which also blocks the use of the page from the user. This is implemented by adding a `beginRequest` and `endRequest` to a page that has an `<asp:UpdatePanel>` on it. When a postback occurs, the `beginRequest` will automatically start, which runs a method called `blockUI()`. Upon completion, `endRequest` will run, which will run `$.unblockUI()`.

## Preview

<button type="button" id="btnSubmit" class="btn btn-primary">Submit</button>

~~~javascript
<script type="text/javascript">
  //Blockui plugin...this causes the blockui to run
  //whenever the content is within an <asp:UpdatePanel>
  Page = Sys.WebForms.PageRequestManager.getInstance();
  Page.add_beginRequest(OnBeginRequest);
  Page.add_endRequest(endRequest);

  function OnBeginRequest(sender, args) {
    blockUI();
  }
  function endRequest(sender, args) {
    $.unblockUI();
  }

  //Center the element
  $.fn.center = function () {
    this.css("position", "absolute");
    this.css("top", ($(window).height() - this.height()) / 2 + $(window).scrollTop() + "px");
    this.css("left", ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px");
    return this;
  }

  //blockUI
  function blockUI() {
    $.blockUI({
      css: {
        backgroundColor: 'transparent',
        border: 'none'
      },
      message: '<div class="spinner"></div>',
      baseZ: 1500,
      overlayCSS: {
        backgroundColor: '#FFFFFF',
        opacity: 0.7,
        cursor: 'wait'
      }
    });
    $('.blockUI.blockMsg').center();
  }//end Blockui   
</script>   
~~~
<div class="alert alert-info">
  The `blockUI.js` file is available via the NuGet package. Additionally, it can be found <a href="https://raw.githubusercontent.com/AtlasWorldGroup/atlasworldgroup.github.io/master/assets/themes/atlas/js/blockUI.js">here</a>.
</div>

<script type="text/javascript">
  $.fn.center = function () {
      this.css("position", "absolute");
      this.css("top", ($(window).height() - this.height()) / 2 + $(window).scrollTop() + "px");
      this.css("left", ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px");
      return this;
  }
  function blockUI() {
        $.blockUI({
          css: {
            backgroundColor: 'transparent',
            border: 'none'
          },
          message: '<div class="spinner"></div>',
          baseZ: 1500,
          overlayCSS: {
            backgroundColor: '#FFFFFF',
            opacity: 0.7,
            cursor: 'wait'
          }
        });
        $('.blockUI.blockMsg').center();
  }
  $(document).ready(function() {
    $('#btnSubmit').click(function(){
        blockUI();
        setTimeout($.unblockUI, 2000);
      });

    });
</script>
