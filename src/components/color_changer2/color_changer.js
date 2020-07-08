import React, {Component} from "react";
import './color_changer.scss'
import styled from "styled-components";


export default class ColorChanger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: {
                red: true,
                yellow: true,
                green: true
            },
            clearAll: 5000
        }
        this.sTimer = this.sTimer.bind(this)

    }

    componentDidMount() {
        this.timerID = setInterval(() => this.sTimer(),
            this.state.clearAll
        );
        this.setState({clearAll: 100})
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    sTimer() {

        this.setState(prevState => ({
            colors: {red: !prevState.colors.red, yellow: false, green: false}
        }))

        let counter = 10;
        let changeColor = function () {
            counter *= 10;
            setTimeout(changeColor, counter);
        }
        setTimeout(changeColor, counter);

        console.log(this.state.colors.red)
        console.log(this.state.colors.yellow)
        console.log(this.state.colors.green)
        console.log(this.state.clearAll)

        // setInterval(() => {
        //
        //     setTimeout(() => {
        //         console.log('red')
        //         this.setState({colors:{red:!this.red}})
        //         setTimeout(() => {
        //             console.log('yellow')
        //             setTimeout(() => {
        //                 console.log('green')
        //
        //             }, 2000)
        //         }, 2000)
        //     }, 3000)
        // }, 11000)

    }

    render() {

        // this.sTimer()

        const {colors: {red, yellow, green}} = this.state
        return (
            <div className='task4'>
                <h2>Svetlofor</h2>

                <div className="sv-wrap">
                    <div
                        style={{backgroundColor: red ? 'red' : 'transparent'}}
                        className="red">
                    </div>

                    <div
                        style={{backgroundColor: yellow ? 'yellow' : 'transparent'}}
                        className="yellow">
                    </div>

                    <div
                        style={{backgroundColor: green ? 'green' : 'transparent'}}
                        className="green">
                    </div>
                </div>
            </div>
        )
    }

}