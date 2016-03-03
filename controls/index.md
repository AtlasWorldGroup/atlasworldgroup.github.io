---
layout: page
title: Form Controls
---
{% include JB/setup %}

The following page will show basic styling and usage for different types of form controls. If there is not an exception listed on this page, the standard Bootstrap classes are expected to be applied (for example, `btn btn-primary`, `btn btn-default`, `btn btn-danger`, `btn btn-warning`, or `btn btn-info` for buttons)

## Checkboxes

Below are examples of custom checkboxes.

### Basic

<div class="checkbox custom-control custom-checkbox">
  <label>
    <input type="checkbox">
    <span class="custom-control-indicator"></span>
    Check this custom checkbox
  </label>
</div>
<div class="checkbox custom-control custom-checkbox">
  <label>
    <input type="checkbox" checked>
    <span class="custom-control-indicator"></span>
    This custom checkbox is checked
  </label>
</div>
<div class="checkbox custom-control custom-checkbox">
  <label>
    <input type="checkbox" disabled>
    <span class="custom-control-indicator"></span>
    This custom checkbox is disabled
  </label>
</div>

~~~html
<div class="checkbox custom-control custom-checkbox">
  <label>
    <asp:CheckBox ID="chkCustom" runat="server" />
    <span class="custom-control-indicator"></span>
    Check this custom checkbox
  </label>
</div>
<div class="checkbox custom-control custom-checkbox">
  <label>
    <asp:CheckBox ID="chkCustomTrue" runat="server" checked="true" />
    <span class="custom-control-indicator"></span>
    This custom checkbox is checked
  </label>
</div>
<div class="checkbox custom-control custom-checkbox">
  <label>
    <asp:CheckBox ID="chkCustomDisable" runat="server" enabled="false" />
    <span class="custom-control-indicator"></span>
    This custom checkbox is disabled
  </label>
</div>
~~~

### Inline

<div class="checkbox-inline custom-control custom-checkbox">
  <label>
    <input type="checkbox">
    <span class="custom-control-indicator"></span>
    Check this custom checkbox
  </label>
</div>
<div class="checkbox-inline custom-control custom-checkbox">
  <label>
    <input type="checkbox" checked>
    <span class="custom-control-indicator"></span>
    This custom checkbox is checked
  </label>
</div>

~~~html
<div class="checkbox-inline custom-control custom-checkbox">
  <label>
    <asp:CheckBox ID="chkCustom1" runat="server"/>
    <span class="custom-control-indicator"></span>
    Check this custom checkbox
  </label>
</div>
<div class="checkbox-inline custom-control custom-checkbox">
  <label>
    <asp:CheckBox ID="chkCustom2" runat="server" checked="true"/>
    <span class="custom-control-indicator"></span>
    This custom checkbox is checked
  </label>
</div>
~~~

## Radios

### Basic

<div class="radio custom-control custom-radio">
  <label>
    <input type="radio" id="radio1" name="radio">
    <span class="custom-control-indicator"></span>
    Toggle this custom radio
  </label>
</div>
<div class="radio custom-control custom-radio">
  <label>
    <input type="radio" id="radio2" name="radio">
    <span class="custom-control-indicator"></span>
    Or toggle this other custom radio
  </label>
</div>

~~~html
<div class="radio custom-control custom-radio">
  <label>
    <asp:RadioButton GroupName="group" id="radio1" runat=server />
    <span class="custom-control-indicator"></span>
    Toggle this custom radio
  </label>
</div>
<div class="radio custom-control custom-radio">
  <label>
    <asp:RadioButton GroupName="group" id="radio2" runat=server />
    <span class="custom-control-indicator"></span>
    Or toggle this other custom radio
  </label>
</div>
~~~

### Inline

<div class="radio-inline custom-control custom-radio">
  <label>
    <input type="radio" id="radio1" name="radio">
    <span class="custom-control-indicator"></span>
    Toggle this custom radio
  </label>
</div>
<div class="radio-inline custom-control custom-radio">
  <label>
    <input type="radio" id="radio2" name="radio">
    <span class="custom-control-indicator"></span>
    Or toggle this other custom radio
  </label>
</div>

~~~html
<div class="radio-inline custom-control custom-radio">
  <label>
    <asp:RadioButton GroupName="group" id="radio1" runat=server />
    <span class="custom-control-indicator"></span>
    Toggle this custom radio
  </label>
</div>
<div class="radio-inline custom-control custom-radio">
  <label>
    <asp:RadioButton GroupName="group" id="radio2" runat=server />
    <span class="custom-control-indicator"></span>
    Or toggle this other custom radio
  </label>
</div>
~~~

## Extras
These are additional classes included in the `atlas-toolkit.css` that can be applied as needed.

### Scrollable Modal
Add `.modal-body-scroller` to the `.modal-body` to make the body scrollable. The default `max-height` is `500px`

<div class="modal">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Medium Modal</h4>
      </div>
      <div class="modal-body modal-body-scroller">
        <p>Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>

        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo.</p>

        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.</p>

        <p>Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>

        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo.</p>

        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo.</p>

        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.</p>
      </div>

      <div class="modal-body">
        <input type="text" class="form-control" placeholder="Message">
      </div>
    </div>
  </div>
</div>

~~~html
<div class="modal">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Medium Modal</h4>
      </div>
      <div class="modal-body modal-body-scroller">
        <p>Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>

        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo.</p>

        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.</p>

        <p>Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>

        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo.</p>

        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo.</p>

        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.</p>
      </div>

      <div class="modal-body">
        <input type="text" class="form-control" placeholder="Message">
      </div>
    </div>
  </div>
</div>
~~~

### Modal Actions
Instead of a `.modal-footer`, use `.modal-actions` with buttons that have the `modal-action` variant.

<div class="modal">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Small modal</h4>
      </div>
      <div class="modal-body">
        <p>Modal body text...</p>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn-link modal-action" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn-link modal-action" data-dismiss="modal">
          <strong>Continue</strong>
        </button>
      </div>
    </div>
  </div>
</div>

~~~html
<div class="modal">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Small modal</h4>
      </div>
      <div class="modal-body">
        <p>Modal body text...</p>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn-link modal-action" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn-link modal-action" data-dismiss="modal">
          <strong>Continue</strong>
        </button>
      </div>
    </div>
  </div>
</div>
~~~

### Button Outlines
Replace the provided button variant classes like `.btn-primary` with `.btn-primary-outline` to switch from the solid gradient backgrounds buttons to outline ones.
<p class="help-block">`.btn-lg` and `btn-sm` can also be applied</p>

<button type="button" class="btn btn-default-outline">Default</button>
<button type="button" class="btn btn-primary-outline">Primary</button>
<button type="button" class="btn btn-success-outline">Success</button>
<button type="button" class="btn btn-info-outline">Info</button>
<button type="button" class="btn btn-warning-outline">Warning</button>
<button type="button" class="btn btn-danger-outline">Danger</button>

~~~html
<button type="button" class="btn btn-default-outline">Default</button>
<button type="button" class="btn btn-primary-outline">Primary</button>
<button type="button" class="btn btn-success-outline">Success</button>
<button type="button" class="btn btn-info-outline">Info</button>
<button type="button" class="btn btn-warning-outline">Warning</button>
<button type="button" class="btn btn-danger-outline">Danger</button>
~~~

### Pill buttons
Add `.btn-pill` to any button to make them more rounded.
<p class="help-block">`.btn-lg` and `btn-sm` can also be applied</p>

<button type="button" class="btn btn-pill btn-default">Default</button>
<button type="button" class="btn btn-pill btn-primary">Primary</button>
<button type="button" class="btn btn-pill btn-success">Success</button>
<button type="button" class="btn btn-pill btn-info">Info</button>
<button type="button" class="btn btn-pill btn-warning">Warning</button>
<button type="button" class="btn btn-pill btn-danger">Danger</button>
<button type="button" class="btn btn-pill btn-link">Link</button>

~~~html
<button type="button" class="btn btn-pill btn-default">Default</button>
<button type="button" class="btn btn-pill btn-primary">Primary</button>
<button type="button" class="btn btn-pill btn-success">Success</button>
<button type="button" class="btn btn-pill btn-info">Info</button>
<button type="button" class="btn btn-pill btn-warning">Warning</button>
<button type="button" class="btn btn-pill btn-danger">Danger</button>
<button type="button" class="btn btn-pill btn-link">Link</button>
~~~
