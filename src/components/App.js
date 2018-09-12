import React, { Component } from 'react';
import Header from './Header';
import FormExpense from './Form';
import List from './List';
import {validarPresupuesto} from '../helpers';
import ControlBudget from './ControlBudget';

import '../css/App.css';

class App extends Component {

    state = {
        budget: '',
        left: '',
        expenses: {}
    }

    componentDidMount () {
        this.getBudget();
    }

    getBudget = () => {
        let budget = prompt("What's the weekly budget");
        let result = validarPresupuesto(budget);
        if(result) {
            this.setState({
                budget: budget,
                left: budget
            })
        } else {
            this.getBudget();
        }
        
    } 
    addExpense = expense => {
        //take a copy
        const expenses = {...this.state.expenses};

        //add expense to state to object
        expenses[`expense${Date.now()}`] = expense;

        //substract budget
        this.substractBudget(expense.expenseQuantity)

        //put in state
        this.setState( {
            expenses
        })
    }

    //Subtract from budget when a expense is created
    substractBudget = quantity => {
        //read expense
        let substract = Number(quantity);
        //take current state 
        let left = this.state.left;

        //substract
        left -= substract;

        //add to state
        this.setState ({
            left
        })

    }

    render() {
        return (
            <div className="App container">
                <Header
                 title='Weekly expend'
                />
                <div className="contenido-principal contenido">
                    <div className="row">
                        <div className="one-half column">
                            <FormExpense 
                                addExpense = {this.addExpense}
                            />

                        </div>
                        <div className="one-half column">
                            <List
                                expenses = {this.state.expenses} 
                            />
                            <ControlBudget
                                budget={this.state.budget}
                                left={this.state.left}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
