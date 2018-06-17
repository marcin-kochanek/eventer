class OldSyntax {
  constructor() {
    this.name = 'Mike';
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `Hi, my name is ${this.name}`;
  }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

// -------------
// new syntax for defining the class components with using babel plugin: transform-class-properties from stage2

class NewSytnax {
  name = 'Marcin';
  getGreetin = () => {
    return `Hi, my name is ${this.name}`;
  }
}

const newSyntax = new NewSytnax();
const NewGetGreeting = newSyntax.getGreeting;
console.log(getGreeting());