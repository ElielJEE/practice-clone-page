import React,{Component} from 'react';
import Router from './componentes/Router';

export default class App extends Component {

    render() {
        return (
            <div className="container">
                <Router />
            </div>
        );
    }
}