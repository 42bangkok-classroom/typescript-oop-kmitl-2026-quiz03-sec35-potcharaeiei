export class Person {
    firstname?: string = "";
    lastname?: string = "";
    private age?: number = 0;
    static COUNTRY: string = "Thailand";

    printName(): void {
        console.log(`${this.firstname} ${this.lastname}`);
    }

    printAge(): void {
        console.log(`${this.age}`);
    }

    setAge(age: number): void {
        this.age = age;
    }
}