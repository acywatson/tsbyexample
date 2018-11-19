import * as React from 'react';
import { ListItem } from './ListItem/ListItem';
import { exampleData } from './fixtures';
import  { ItemDetail } from './ItemDetail/ItemDetail';

import './App.css';

import logo from './Typescript.svg';
import githubLogo from './Github.png';

class App extends React.Component {
  public state: Readonly<AppRoot.State>;
  public keys: string[] = Object.keys(exampleData);

  constructor(props: Readonly<{}>) {
  	super(props);
  	this.state = {
  		currentKey: null,
		currentKeyIndex: null,
	};
  	this.handleItemClick = this.handleItemClick.bind(this);
  }

  public handleItemClick(currentKey?: string, currentKeyIndex?: number): void {
  	this.setState({
		currentKey,
		currentKeyIndex
	});
  }

  public render(): JSX.Element {
  	const repoUrl = 'https://github.com/acywatson/tsbyexample';
  	const list = this.keys.map((key, idx) => {
  		return <ListItem
			onClick={this.handleItemClick}
			key={key}
			id={key}
			index={idx}
			displayName={exampleData[key].displayName}
		/>
	});

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TypeScript By Example</h1>
		  <a className="repo-link" href={repoUrl}><img src={githubLogo} className="github-logo" alt="github-logo" /></a>
		</header>
		  {!this.state.currentKey &&
			  <div className="about-ts">
					<p>
						TypeScript is a statically-typed superset of JavaScript that compiles to plain JavaScript.
						It combines the familiarity and ease-of-use of JavaScript with the readability and scalability of
						a compiled language.
					</p>
				  <hr/>
			  </div>
		  }
		  {this.state.currentKey ?
			  (
				<ItemDetail
				  handleNavClick={this.handleItemClick}
				  previousId={this.keys[this.state.currentKeyIndex - 1]}
				  nextId={this.keys[this.state.currentKeyIndex + 1]}
				  index={this.state.currentKeyIndex}
				  displayName={exampleData[this.state.currentKey].displayName}
				  description={exampleData[this.state.currentKey].description}
				  code={exampleData[this.state.currentKey].code}
				/>
			  )
			  : (list)}
      </div>
    );
  }
}

export default App;
