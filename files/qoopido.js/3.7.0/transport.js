/*! Qoopido.js library 3.7.0, 2015-07-23 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(n){window.qoopido.register("transport",n,["./base","./function/merge"])}(function(n,e,t,o,i,r,s){"use strict";var c;return c=n.base.extend({setup:function(e){var t=this;return t._settings=n["function/merge"]({},t._settings,e),t},serialize:function(n,e){var t,o,i,r=[];for(t in n)o=e?"".concat(e,"[",t,"]"):t,i=n[t],r.push("object"==typeof i?this.serialize(i,o):"".concat(encodeURIComponent(o),"=",encodeURIComponent(i)));return r.join("&")}})},window,document);