const arr = [100, 200, 300];

for (var i = 0; i < 3; i++) {
  setTimeout(function (i) {
    console.log(arr[i]);
  }, arr[i]);
}