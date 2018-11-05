import * as React from 'react';
import './ListItem.css';

export class ListItem extends React.Component {
	public props: any;

	constructor(props: any) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	public handleClick() {
		this.props.onClick(this.props.id, this.props.index);
	}

	public render(): JSX.Element {
		return <a onClick={this.handleClick}>{this.props.displayName}</a>;
	}

}