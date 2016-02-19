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
