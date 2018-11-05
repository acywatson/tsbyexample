declare namespace AppRoot {

	interface State {
		currentKeyIndex: number;
		currentKey: string;
	}

	namespace ItemDetail {
		interface Props {
			handleNavClick: (currentKey?: string, currentKeyIndex?: number) => void;
			nextId: string;
			previousId: string;
			index: number;
			displayName: string;
			description: string;
		}
	}

	namespace Nav {

		interface Props {
			handleNavClick: (currentKey?: string, currentKeyIndex?: number) => void;
			nextId: string;
			previousId: string;
			currentIndex: number;
		}

	}

}
