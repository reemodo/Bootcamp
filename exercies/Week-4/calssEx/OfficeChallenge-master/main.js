
//write your code here to make the tests pass

class Cleaner{
    constructor(name){
        this.name = name
    }
    clean(){
        console.log("Clean")
    }
  }
  class Document{
    constructor(EmployeeName){
        this.EmployeeName = EmployeeName
    }
  }
  
  
  class Employee{
    constructor(name){
        this.name = name
    }
    work(office){
        for(let i =0; i<10; i++){
            office.documents.push(new Document(this.name))
        }
    }
  }

  class Manager{
    constructor(name){
        this.employees = []
        this.name = name
    }
    hireEmployee(name){
        let newEmployee = new Employee(name)
        this.employees.push(newEmployee)
    }
    askEmployeesToWork(office){
        this.employees.forEach(
            employee => employee.work(office)
        );
    }
  }
  
  
  class Office{
    constructor(){
        this.documents = []
        this.managers = []
        this.cleaners = []
    }
    hireCleaner(name){
        let cleanerName = new Cleaner(name)
        this.cleaners.push(cleanerName)
    }
    hireManager(name){
        let newManager = new Manager(name)
        this.managers.push(newManager)
    }
    startWorkDay(){
        this.managers.forEach(manager => {
            manager.askEmployeesToWork(this)
        }); 
        this.cleaners.forEach(cleaner =>
            cleaner.clean())
    }
  }