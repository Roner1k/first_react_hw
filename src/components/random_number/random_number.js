import React, {Component} from "react";
import './random_number.scss'


export default class GiveRandomNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            min: 0,
            max: 10,
            randomValue: ''
        }
        this.onValueChange = this.onValueChange.bind(this)

    }


    giveAnswer() {
        const max = this.state.answers.length;
        const randomValue = Math.floor(Math.random() * (max - 1)) + 1;
        this.setState({randomAnswer: randomValue, stopAnimation: true})
    }

    onValueChange(e) {
        this.setState({
            min: e.target.value
        })
    }

    render() {
        const {min, max} = this.state

        return (
            <div className='task3'>
                <h2>Random Number</h2>
                <p>Set range:</p>
                <div>
                    <label htmlFor='from'> From:</label>
                    <input
                        type='number'
                        id='from'
                        value={min}
                        onChange={this.onValueChange}
                    /> <br/>
                    <label htmlFor='to'> To:</label>
                    <input type='number' id='to' value={max}/>
                </div>
                <input type="button" value='Get r number!'/>
            </div>
        )
    }

}