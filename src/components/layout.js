import React, {Component} from 'react';
import { Header, HeaderBar } from './header';

class Layout extends Component {
    render() {
        return (
            <div classname='layout-grid'>
                <Header/>
                <HeaderBar/>
                {this.props.children}
            </div>
        )
    }
}
export default Layout;