---
layout: page
title: Date Time Picker
---
{% include JB/setup %}

## About

We use <a href="http://http://eonasdan.github.io/bootstrap-datetimepicker/">bootstrap-datetimepicker</a> by <a href="https://github.com/Eonasdan">Eonasdan</a>. This plugin requires <a href="http://momentjs.com/">moment.js</a>.

## Previews

There are four modes with the Date / Time picker.
<ul class="list-group">
  <li class="list-group-item">
    <strong>Date:</strong> Only shows a calendar date picker
  </li>
  <li class="list-group-item">
    <strong>Time:</strong> Only shows a time picker
  </li>
  <li class="list-group-item">
    <strong>Date / Time:</strong> Show a calendar date picker with a icon to click bringing the time picker up
  </li>
  <li class="list-group-item">
    <strong>Date / Time - Side by Side:</strong> Show a date calendar and a time picker simultaneously in the same widget
  </li>
</ul>

### Date
<div class="input-group" data-datetime="date">
  <input class="form-control" readonly data-disable-touch-keyboard />
    <span class="input-group-addon primary">
      <i class="fa fa-calendar"></i>
    </span>
</div>
~~~html
<div class="input-group" data-datetime="date">
  <asp:TextBox ID="txtID" runat="server" CssClass="form-control" readonly data-disable-touch-keyboard></asp:TextBox>
    <span class="input-group-addon primary">
      <i class="fa fa-calendar"></i>
    </span>
</div>
~~~
<div class="alert alert-info">
  The `readonly` and `data-disable-touch-keyboard` elements are in place to keep the virtual keyboard on touch devices from
  coming up.
</div>

### Time
<div class="input-group" data-datetime="time">
  <input class="form-control" readonly data-disable-touch-keyboard />
  <span class="input-group-addon primary">
    <i class="fa fa-clock-o"></i>
  </span>
</div>
~~~html
<div class="input-group" data-datetime="time">
  <asp:TextBox ID="txtID" runat="server" CssClass="form-control" readonly data-disable-touch-keyboard></asp:TextBox>
    <span class="input-group-addon primary">
      <i class="fa fa-clock-o"></i>
    </span>
</div>
~~~

### Date / Time
<div class="input-group" data-datetime="both">
  <input ID="txtID" class="form-control" readonly data-disable-touch-keyboard />
  <span class="input-group-addon primary">
    <i class="fa fa-calendar"></i>
  </span>
</div>
~~~html
<div class="input-group" data-datetime="both">
  <asp:TextBox ID="txtID" runat="server" CssClass="form-control" readonly data-disable-touch-keyboard></asp:TextBox>
    <span class="input-group-addon primary">
      <i class="fa fa-calendar"></i>
    </span>
</div>
~~~

### Date / Time: Side by Side
<div class="input-group" data-datetime="both-side">
  <input ID="txtID" class="form-control" readonly data-disable-touch-keyboard />
  <span class="input-group-addon primary">
    <i class="fa fa-calendar"></i>
  </span>
</div>
~~~html
<div class="input-group" data-datetime="both-side">
  <asp:TextBox ID="txtID" runat="server" CssClass="form-control" readonly data-disable-touch-keyboard></asp:TextBox>
    <span class="input-group-addon primary">
      <i class="fa fa-calendar"></i>
    </span>
</div>
~~~

<script>
  $(document).ready(function() {
    registerDateTimePicker();
  });  
</script>
