import React from 'react';
import { BrowserRouter , Router, Route } from 'react-router-dom';
import Contact from './components/contact';
import Update from './components/update';
import Create from './components/create';
 
class App extends React.Component {
    render() {
        return (
            <Router>
            <div>
                <Route exact path='/' component={Contact} />
                  <Route path='/update/:id' component={Update} />
                <Route path='/create' component={Create} /> 
            </div>
            </Router>
        );
    }
}
export default App;