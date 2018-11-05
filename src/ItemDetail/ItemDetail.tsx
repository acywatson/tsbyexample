import * as React from 'react';
import { Nav } from '../Nav/Nav';
import { MonacoEditor } from 'react-monaco-editor-ts';
import  './ItemDetail.css';

export class ItemDetail extends React.Component {
	public props: Readonly<AppRoot.ItemDetail.Props>;

	constructor (props: Readonly<AppRoot.ItemDetail.Props>) {
		super(props);
		this.handleNavClick = this.handleNavClick.bind(this);
	}

	public editorDidMount(editor: any, monaco: any) {
		editor.focus();
	}
	public onChange(newValue: any, e: any) {
		// onChange
	}

	public handleNavClick(currentKey?: string, currentKeyIndex?: number): void {
		this.props.handleNavClick(currentKey, currentKeyIndex);
	}

	public render(): JSX.Element {
		// const code = "SOme code!";
		return (
			<div className="detail-container">
				<Nav
					handleNavClick={this.handleNavClick}
					previousId={this.props.previousId}
					nextId={this.props.nextId}
					currentIndex={this.props.index}
				/>
				<h1>{this.props.displayName}</h1>
				<p>{this.props.description}</p>
				<MonacoEditor
					language="typescript"
					theme="vs-dark"
					onChange={this.onChange}
					editorDidMount={this.editorDidMount}
					value={this.props.code}
				/>
			</div>
		)
	}

}