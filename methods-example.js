const showName = (name) => {
    console.log("Provided name is=" + name);
  }
  
  const noArgs = () => {
    console.log("No Args here");
  }
  
  const showNameAge = (name, age) => {
    console.log(name + ' ' + age);
  }
  
  const getNameReversed = (name) => name.split('').reverse().join(); //One liner for a return statement. Don't include return keyword if using one-liner
  
  showName("Patrick");
  noArgs();
  showNameAge("Patrick", 24);
  console.log(getNameReversed("Patrick"));