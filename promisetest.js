const bar = function () {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve()
            console.log('bar');
        }, 2000);
    });
};

const baz = function () {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve()
            console.log('baz');
        }, 1000);
    });
};

bar().then(function() {
  baz();
});