/*! Qoopido.js library 3.7.0, 2015-07-23 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(e){window.qoopido.register("support/element/video",e,["../../support"])}(function(e,o,t,i,n,r,p){"use strict";var s=e.support;return s.addTest("/element/video",function(e){var o=s.pool?s.pool.obtain("video"):r.createElement("video");o.canPlayType?e.resolve():e.reject(),o.dispose&&o.dispose()})});