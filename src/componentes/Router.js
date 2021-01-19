import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Navegation from './Navegation';
import Home from './Home'
import About from './About';
import Button from './Button';
import Contact from './Contact';
import Comments from './Comments';
import Error from './Error';
import Footer from './Footer';
import Gallery from './Gallery';
import { SliderData } from './SliderData';


export default class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Navegation />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/gallery' render={() => (
                        <Gallery slides={SliderData}/>
                    )}/>
                    <Route exact path='/About' component={About} />
                    <Route exact path='/button' component={Button} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/comments' component={Comments} />
                    <Route component={Error} />
                </Switch>
                <Footer/>
            </BrowserRouter>
        );
    }
}