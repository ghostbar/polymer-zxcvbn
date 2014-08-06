(function () {
  /* global zxcvbn,Polymer */
  'use strict';
  function runZxcvbn (password, extra) {
    if (extra)
      return zxcvbn(password, extra);

    return zxcvbn(password);
  }
  Polymer('polymer-zxcvbn', {
    ready: function () {
      this.display = runZxcvbn(this.password, this.extra);
    },
    passwordChanged: function (oldVal, newVal) {
      this.display = runZxcvbn(newVal, this.extra);
    }
  });
})();
