function phoneticLookup(val) {
    let result = "";
    
    // Only change code below this line
    let names = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",

    // should't change result directly because result is a string
    
    // result["alpha"] = "Adams";
    // result["bravo"] = "Boston";
    // result["charlie"] = "Chicago";
    // result["delta"] = "Denver";
    // result["echo"] = "Easy";
    // result["foxtrot"] = "Frank";
    }
    result = names[val]  
    // Only change code above this line
    return result;
  }

console.log(phoneticLookup("charlie"));