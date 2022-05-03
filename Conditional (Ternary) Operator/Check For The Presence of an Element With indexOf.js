function quickCheck(arr, elem) {
    return (arr.indexOf(elem) === -1)? false : true;
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));