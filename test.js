function powerSet(a, b){
  var arr = [];
  a.forEach(function(x){
    b.forEach(function(y){
      arr.push([x,y]);
    });
  });
  return arr;
}

var arr1 = [1,2,3,4,5,6];
var arr2 = [1,2,3,4,5,6];

var set = powerSet(arr1, arr2);
set.forEach( x => console.log(x));
