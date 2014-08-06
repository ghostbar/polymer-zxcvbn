(function () {
  /* global zxcvbn,Polymer */
  'use strict';
  function runZxcvbn (password, extra) {
    if (extra)
      return zxcvbn(password, extra);

    return zxcvbn(password);
  }
  Polymer('zxcvbn', {
    passwordChanged: function (oldVal, newVal) {
      this.$.display = runZxcvbn(newVal, this.$.extra);
    }
  });
})();
