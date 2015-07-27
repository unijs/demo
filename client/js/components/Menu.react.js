import React from 'react';
import superagent from 'superagent';
import unijs from 'unijs';

import {
	Link
} from 'react-router';

class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			menu: []
		}
	}

	loadMenu() {
		superagent.get('/api/getmenu').accept('application/json').use(unijs.superagentPlugin).end(function(err, res) {
			if (err) {
				return alert('Failed to load menu!');
			}
			this.setState({
				menu: JSON.parse(res.text)
			});
		}.bind(this));
	}

	componentDidMount() {
		this.loadMenu();
	}

	render() {
		return (
			<div>
				<ul>
					<span> - </span>
					{this.state.menu.map(function(result) { return (
					<span><Link activeClassName="highlight" className="" key={result._id} params={{id: result._id}} to="blogpost">{result.title}</Link> - </span>); })}
				</ul>
			</div>
		);
	}
}
Header = unijs.extend(Header);

export default Header;
