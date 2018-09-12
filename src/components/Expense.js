import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Expense extends Component {
    render () {
        const {expenseName, expenseQuantity}= this.props.expense;

        return (
            <li className="gastos">
                <p>
                    {expenseName}
                    <span className="gasto">$ {expenseQuantity}</span>
                </p>
            </li>
        )
    }
}
Expense.propTypes = {
    expense: PropTypes.object.isRequired
}

export default Expense;