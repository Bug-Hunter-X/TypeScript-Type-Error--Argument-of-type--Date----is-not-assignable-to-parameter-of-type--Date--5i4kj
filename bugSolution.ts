function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`);
}

greet("World", new Date()); //works fine

const myDate = new Date();
greet("World", myDate); //works fine

const dates = [new Date(), new Date()];
greet("World", dates[0]); // No error