import React, {Component} from 'react';
import {revisarPresupuesto} from '../helpers';

class Left extends Component {
    render () {
        const budget = this.props.budget;
        const left = this.props.left;
        return (
            <div className={revisarPresupuesto(budget, left)}>
                Left: ${this.props.left}
            </div>
        )
    }

}

export default Left;