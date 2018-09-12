import React, {Component} from 'react';
import Budget from './Budget';
import Left from './Left';
import PropTypes from 'prop-types';

class ControlBudget extends Component {
    render () {
        return (
            <React.Fragment>
                <Budget
                    budget={this.props.budget}
                />
                <Left
                    budget={this.props.budget}
                    left={this.props.left}
                />
            </React.Fragment>
        )
    }
}
ControlBudget.propTypes = {
    budget: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired
}

export default ControlBudget;