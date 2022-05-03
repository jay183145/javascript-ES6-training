//  A promise has three states: pending, fulfilled, and rejected.

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      // resolve is used when you want your promise to succeed
      resolve("We got the data");
    } else { 
      // reject is used when you want it to fail.
      reject("Data not received");
    }
  });