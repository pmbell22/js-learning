// old school JS
class Human {
    gender = 'male';
    printGender = () => {
      console.log(this.gender); 
    }
  }
  
  class Person extends Human {
    gender = 'male';
    name = 'Patrick';
  
    printMyName = () => {
      console.log(this.name);
    }
  }
  
  const person = new Person(); 
  person.printMyName();
  person.printGender(); 