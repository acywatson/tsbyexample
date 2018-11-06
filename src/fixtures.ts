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
	}
};