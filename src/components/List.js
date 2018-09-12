import React, {Component} from 'react';
import Expense from './Expense';
import PropTypes from 'prop-types';

class List extends Component{
    render() {
        return (
            <div className="gastos-realizados">
                <h2>List</h2>
                {Object.keys(this.props.expenses).map(key => (
                    <Expense
                        key={key}
                        expense={this.props.expenses[key]}    
                    />
                ))}
                
            </div>
        )
    }
}
List.propTypes = {
    expense: PropTypes.object.isRequired
}

export default List;