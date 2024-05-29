type IntelligenceScore = number;

interface Book {
  title: string;
  read: (human: Human) => IntelligenceScore;
}

class Human {
  private name: string;
  private intelligence: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    console.log(`Name: ${this.name}`);
    return this.name;
  }

  checkIntelligence() {
    console.log(`${this.name}'s intelligence is ${this.intelligence}`);
    return this.intelligence;
  }

  read(book: Book) {
    const getInteligence = book.read(this);
    this.intelligence += getInteligence;
  }
}

class OOPBook implements Book {
  title: string = "Book Of OOP";
  read() {
    console.log("Reading OOP Book");
    return 10;
  }
}

class FPBook implements Book {
  title: string = "Book Of FP";
  read() {
    console.log("Reading FP Book");
    return 10;
  }
}

const Elice = new Human("elice");
const OOPbook = new OOPBook();
const FPbook = new FPBook();

Elice.checkIntelligence();
Elice.read(OOPbook);
Elice.checkIntelligence();
Elice.read(FPbook);
Elice.checkIntelligence();
Elice.getName();
