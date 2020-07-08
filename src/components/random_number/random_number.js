import React, {Component} from "react";
import './random_number.scss'


export default class GiveRandomNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            min: 0,
            max: 10,
            randomValue: null
        }
        this.getMinVal = this.getMinVal.bind(this)
        this.getMaxVal = this.getMaxVal.bind(this)
        this.giveAnswer = this.giveAnswer.bind(this)

    }


    giveAnswer() {
        const min = +this.state.min;
        const max = +this.state.max;
        if (min >= max) return alert('Min value >= Max value!')
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        //console.log(`m=${min} x=${max} r=${randomNumber}`)
        this.setState({randomValue: randomNumber})
    }

    getMinVal(e) {
        this.setState({
            min: e.target.value
        })
    }

    getMaxVal(e) {
        this.setState({
            max: e.target.value
        })
    }

    render() {
        const {randomValue} = this.state

        return (
            <div className='task3'>
                <h2>Random Number</h2>
                <p>Set range:</p>
                <div className='set-numbers'>
                    <label htmlFor='from'> From:</label>
                    <input
                        type='number'
                        id='from'
                        onChange={this.getMinVal}
                        defaultValue='0'
                    /> <br/>
                    <label htmlFor='to'> To:</label>
                    <input
                        type='number'
                        id='to'
                        defaultValue='10'
                        onChange={this.getMaxVal}

                    />
                </div>
                <input
                    type="button"
                    value='Get r number!'
                    onClick={this.giveAnswer}/>
                <span>{randomValue}</span>
            </div>
        )
    }

}