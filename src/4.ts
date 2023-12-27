class Key {
  private signature: number = Math.random();
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];
  constructor(protected key: Key) {}

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    this.door ? this.tenants.push(person) : console.log("Двері зачинені");
  }
}

class MyHouse extends House {
  openDoor(key: Key): void {
    this.door = key.getSignature() === this.key.getSignature();
    console.log(this.door ? "Двері відчинені" : "Не той ключ. Двері зачинені");
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
