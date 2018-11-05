import * as React from 'react';
import './App.css';
import { ListItem } from './ListItem/ListItem';
import { exampleData } from './fixtures';
import logo from './Typescript.svg';
import  { ItemDetail } from './ItemDetail/ItemDetail';

class App extends React.Component {
  public state: Readonly<AppRoot.State>;
  public keys: string[] = Object.keys(exampleData);

  constructor(props: any) {
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
        </header>
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
