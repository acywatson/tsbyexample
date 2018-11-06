export let exampleData: {[key: string]: AppRoot.ExampleData} = {
	'FE3A6926-C32C-4597-82D2-961AC8F5710A': {
		displayName: 'Primitives',
		description: 'Primitive types include booleans, numbers, and strings - these are easy to express in Typescript.',
		code: `let bool: boolean = true;
let num: number = 156;
let str: string = 'Hello, World!';`
	},
	'80F37DF6-638A-4C69-AF52-44A255A0A873': {
		displayName: 'Arrays and Tuples',
		description: `Array types can be written with square brackets or a generic.
		The Tuple type represents an array with a fixed number of elements that don't have to be the same type.`,
		code: `let bracketsStringArr: string[] = ['Hello', 'World'];
let genericStringArr: Array<string> = ['Hello', 'World'];
let tuple: [string, number, boolean] = ['Hello', 1, false];`
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
	'D734FB93-2FA2-43E6-A085-7DFE01EE773D': {
		displayName: 'Objects',
		description: ``,
		code: ``
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
		description: ``,
		code: ``
	},
	'DD8F48D2-216B-4542-A2AF-394FC73B9BBA': {
		displayName: 'Type Assertion',
		description: ``,
		code: ``
	},
	'85D9EBA4-91B9-4AEA-9CD7-84365543531C': {
		displayName: 'Type Inference',
		description: ``,
		code: ``
	},
	'84AF7D95-0BB8-4771-8A55-00398DB1EB9F': {
		displayName: 'Type Assignment',
		description: ``,
		code: ``
	},
	'FCA45B14-B28E-48EA-8224-6C3896FB4C36': {
		displayName: 'Interfaces',
		description: ``,
		code: ``
	},
	'B8BFE2A1-5720-43EE-BF9B-721EEC506AFF': {
		displayName: 'Functions',
		description: ``,
		code: ``
	},
};