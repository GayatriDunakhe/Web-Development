function greetings(name, funCallback) {
    setTimeout(function() {
      const greeting = `Hello, ${name}!`;
      funCallback(greeting); // Execute the callback after the timeout
    }, 2000); // Wait for 2 seconds before invoking the callback
  }
  
  function handleGreeting(greeting) {
    console.log(greeting);
  }
  
  console.log("Before setTimeout");
  
  greetings("John", handleGreeting);
  
  console.log("After setTimeout");
  