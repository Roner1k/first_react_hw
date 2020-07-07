import React, {Component} from "react";
import './magic_ball.scss'
import ball from './mball.png'

export default class MagicBall extends Component {
    render() {
        return (
            <div className='task2'>
                <h2>Magic Ball</h2>
                <p>just click to see answer</p>
                <div className="ball-wrap">
                    <div className="three-angle anim">
                        <div className="three-angle__text anim">
                            Click ME!
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}