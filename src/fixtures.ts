export let exampleData: {[key: string]: AppRoot.ExampleData} = {
	'FE3A6926-C32C-4597-82D2-961AC8F5710A': {
		displayName: 'Variables',
		description: 'Variables in TypeScript can be declared with an explicit type. This allows the compiler to ensure that only valid operations are performed on that variable.',
		code: `let bool: boolean = true;
let num: number = 156;
let str: string = 'Hello, World!';
let arr: string[] = ['Hello', 'World'];
let tuple: [string, number] = ['Hello', 42];

bool = 'true'; //error
Math.ceil(str); //error

arr.push(42); //error - can't add a number to an array of strings;
arr.push('42'); //works!

tuple[1] = 'World'; //error - the entry at index 1 must be a number;
tuple[2] = 42; //works! indices with unspecified types can be any of the types included in the tuple.
tuple[2] = true;
`
	},
	'82454DCD-6E49-44A4-92DD-016074C8F1ED': {
		displayName: 'Any',
		description: `Any represents a variable whose type is unknown.  The compiler ignores these during type-checking.
		These can be useful when getting started with TypeScript, as they allow you to compile without typing everything.`,
		code: `let something: any = 42;
let anotherThing: number = 42;
let someThings: any[] = [42, 'hello', true];

something.toLowerCase(); //no error here - it may have this method, as far as the compiler knows.
anotherThing.toLowerCase(); //error here - toLowerCase() doesn't exist on the number type
someThings[2] = 125`
	},
	'1360A38B-5A3E-4ABD-9C37-466F73303940': {
		displayName: 'Void, Null, and Undefined',
		description: `Void, Null, and Undefined are subtly different in Typescript.
Void indicates the absence of a type - you'll most frequently see it as the return type of functions that don't return anything.
Null and Undefined are assignable only to the JavaScript values of the same name (and 'any', of course). You can configure TypeScript to
allow null and undefined to be assignable to any other type by setting strictNullChecks to false in your tsconfig file.`,
		code: `function noReturn(): void {
    //do something
}

function yesReturn(): void {
    //do something
    return 'hi!';
}

let thing1: void = 1;
let thing2: null = 1;
let thing3: undefined = 1;
let thing4: number = 1;

// We can do this because strictNullChecks are disabled in this environment.
thing4 = null;
thing4 = undefined;`
	},
	'0CABCBBE-6F4B-49CC-A620-DAECA50A9797': {
		displayName: 'Enums',
		description: `Enums are essentially arrays of numbers with prettier names.
		They begin at 0, by default, but you can assign any value you want to each individual entry.`,
		code: `enum Character {'Rick', 'Morty', 'Summer'}
let characterIndex: Character = Character.Rick //0
let characterName: string = Character[2] //Summer

enum Animal {'Fish'=2, 'Bear', 'Kangaroo'=6}
let fishy: Animal = Animal.Fish //2
let ursus: Animal = Animal.Bear //3`
	},
	'FCA45B14-B28E-48EA-8224-6C3896FB4C36': {
		displayName: 'Interfaces',
		description: `Interfaces are the primary building blocks of TypeScript's structural typing system.  We can use interfaces to
flexibly represent the wide array of shapes that JavaScript objects are capable of taking.`,
		code: `interface Weapon {
    name: string;
    damage: number;
    durability: number;
}

interface Character {
    name: string;
    level: number;
    weapons: Array<Weapon>;
    friends?: Array<Character>; //optional...notice the absence of this prop in myCharacter.
    attack: () => number;
}

interface Hero extends Character {
    magicPowers: Array<string>;
}

let myCharacter: Character = {
    name: 'Bob the Slayer',
    level: 2,
    weapons: [],
    attack: () => { return 10 },
}

function grantMagicPowers(char: Character, powers: Array<string>): Hero {
    return {
        ...char,
        magicPowers: powers
    };
}

grantMagicPowers(myCharacter, ['fly', 'slay']);`
	},
	'B8BFE2A1-5720-43EE-BF9B-721EEC506AFF': {
		displayName: 'Functions',
		description: `Typing functions with TypeScript is dead simple, for the majority of use cases. A functions parameters
are typed, as is its return value. This allows us to write more readable code and catch errors earlier by ensuring that what we put
into a function and what we get out of it are what we expect.`,
		code: `function getNameLength(name: string, favoriteColor?: string): number {
    return name.length;
}

let myFunction: (name: string) => number = getNameLength;

interface Car {
    make: string;
    model: string;
    year: number;
    sell: (Car) => number;
    buy: (number) => Car;
}

interface AnotherFunctionType {
    (x: string, y: number): number;
}

let anotherFunction: AnotherFunctionType = function(name: string, age: string) {
    return name.length + age;
}`
	},
	'D734FB93-2FA2-43E6-A085-7DFE01EE773D': {
		displayName: 'Classes',
		description: ``,
		code: ``
	},
	'DD8F48D2-216B-4542-A2AF-394FC73B9BBA': {
		displayName: 'Type Assertion',
		description: `Type assertions are a way of casting a value. This can be used when you know more about a value than
		 TypeScript does. Typically this is used to turn something that is more generic to something more specific. This
		 can be done by using "angle-brackets" or "as" syntax.`,
		code: `let genericData: any = '4.6692';
// Here we use "angle-brackets".
let ceilingNumber: number = Math.ceil(<number>genericData);
// Here we use "as" syntax.
let stringLength: number = (genericData as string).length;`
	},
	'85D9EBA4-91B9-4AEA-9CD7-84365543531C': {
		displayName: 'Type Inference',
		description: `When you don't explicitly set types, TypeScript tries to infer a type based on the types of related expressions.
 There are three main kinds of inference: trivial inference, common type inference, and contextual inference.`,
		code: `// Trivial inference. 
// TypeScript gives the variable the type of it's initial value.
let firstName = 'Rick';
let age = 99;
let obj = {
    firstName: 'Morty',
    age: '14'
};
age.toUpperCase();
let weirdMath = firstName * 1;
obj.firstName = 15;
obj.lastName = 'Smith';

// Common Type Inference
// TypeScript gives the variable the simplest valid type that it can.
let arr = ['hello', 1 , 2];
arr[4] = true;
arr[4] = 'world';
arr[4] = 7654;

// Contextual Inference
// TypeScript guesses the type of a variable based on its relationships.
let funk: (x: number) => void;
funk = function(myParam) {
    myParam.toUpperCase();
}`
	},
	'84AF7D95-0BB8-4771-8A55-00398DB1EB9F': {
		displayName: 'Type Assignment',
		description: `TypeScript assesses type compatibility based on structure. 
A type can be 'assigned' to a target type if it's structure is compatible with that of the target. 
If a type is assignable to another type, it can be used in place of that type in many circumstances.`,
		code: `interface Spaceship {
    name: string;
    yearModel: number;
    hasLasers: boolean;
}

// myShip isn't of type Spaceship, but it IS assignable to type Spaceship.  See below.
let myShip: Spaceship = {
    name: 'TIE Fighter',
    yearModel: 1998,
    hasLasers: true,
    boost: (fuel: number) => fuel * 1000
}

let invalidShip = {
    yearModel: 1998,
    hasLasers: true,
    boost: (fuel: number) => fuel * 1000
}

function launch(ship: Spaceship) {
    console.log('Launching' + ship.name);
    setTimeout(() => {
        console.log('Blast Off!');    
    }, 3000)
}

// We can't assign invalidShip to Spaceship, because it doesn't have all the
// properties specified in the Spaceship interface.
launch(invalidShip);
// We can assign myShip, even though it has properties 
// that don't exist in the Spaceship interface
launch(myShip);`
	},
	'6A440EB9-6E66-4112-8CD8-0A2103D0B128': {
		displayName: 'Generics',
		description: ``,
		code: ``
	},
	'79F2B06D-BB16-4E47-A14A-7754BCBD2134': {
		displayName: 'Intersection Types',
		description: ``,
		code: ``
	},
	'967A503D-F535-4ADB-A035-142FC80B8E9F': {
		displayName: 'Union Types',
		description: ``,
		code: ``
	},
	'7C029E98-A9E0-4233-A500-5AF613A51031': {
		displayName: 'Type Guards',
		description: ``,
		code: ``
	},
};