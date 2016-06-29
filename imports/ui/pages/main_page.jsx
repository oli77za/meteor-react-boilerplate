import React from 'react';
import ReactDOM from 'react-dom';

import MainLayout from '/imports/ui/layouts/main_layout.jsx';

export class MainPage extends React.Component {
    renderHeader() {
        return (<h1>Hello</h1>);
    }
    renderContent() {
        return (<h1>World</h1>);
    }
    render() {
        return (
            <MainLayout header={this.renderHeader()} content={this.renderContent()}/>
        );
    }
}

FlowRouter.route('/', {
    action() {
        // if logged in
          ReactDOM.render(<MainPage />, document.getElementById('app'));
          // else 
          // ReactDOM.render(<LoginPage />, document.getElementById('app'));
    }
});
