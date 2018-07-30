import React, {Component} from 'react';

import { FormTitle } from '../formTitle';

class signin extends Component {
    render() {
        return (
            <div className='sign-in'>
                <FormTitle className='sign-in_title' text='Login' />
            </div>
        )
    }
}
export default signin;