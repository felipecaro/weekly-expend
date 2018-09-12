import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FormExpense extends Component {

    //refs fields
    expenseName = React.createRef();
    expenseQuantity = React.createRef();

    createExpense = (e) => {
        //prevent default
        e.preventDefault();

        //create data array

        const expense = {
            expenseName: this.expenseName.current.value,
            expenseQuantity: this.expenseQuantity.current.value
        }
        //console.log(expense);

        //add and send it to props
        this.props.addExpense(expense);

        e.currentTarget.reset();
        
    }

    render() {
        
        return (
            <form onSubmit={this.createExpense}>
                <h2>Add expenses here</h2>
                <div className="campo">
                    <label>Expense Name:</label>
                    <input ref={this.expenseName} className="u-full-width" type="text" placeholder="Ex. Transport" />
                </div>

                <div className="campo">
                    <label>Quantity:</label>
                    <input ref={this.expenseQuantity} className="u-full-width" type="text" placeholder="Ex. 300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Add" />
            </form>
        );
    }
}

FormExpense.propTypes = {
    addExpense: PropTypes.func.isRequired
}


export default FormExpense;