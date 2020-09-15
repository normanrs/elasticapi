const bar = function () {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve()
            console.log('bar');
        }, 1000);
    });
};

const baz = function () {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve()
            console.log('baz');
        }, 3000);
    });
};

bar().then(function() {
  return baz();
});