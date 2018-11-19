import * as React from 'react';
import './Nav.css';

export class Nav extends React.Component {
	public props: Readonly<AppRoot.Nav.Props>;

	constructor(props: AppRoot.Nav.Props) {
		super(props);
		this.handlePrevClick = this.handlePrevClick.bind(this);
		this.handleReturnClick = this.handleReturnClick.bind(this);
		this.handleNextClick = this.handleNextClick.bind(this);
	}

	public handlePrevClick(): void {
		this.props.handleNavClick(this.props.previousId, this.props.currentIndex - 1);
	}

	public handleReturnClick(): void {
		this.props.handleNavClick();
	}

	public handleNextClick(): void {
		this.props.handleNavClick(this.props.nextId, this.props.currentIndex + 1);
	}

	public render(): JSX.Element {
		return (
			<div className="nav-container">
				<a className="previous" onClick={this.handlePrevClick}>Previous</a>
				<a className="return" onClick={this.handleReturnClick}>Return To List</a>
				<a className="next" onClick={this.handleNextClick}>Next</a>
			</div>
		);
	}
}