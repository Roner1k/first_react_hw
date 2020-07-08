import React, {Component} from "react";
import './magic_ball.scss'
import styled from "styled-components";



export default class MagicBall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: [
                {a: 'Узнай судьбу!', color: '#5882DA'},

                {a: 'Бесспорно', color: 'blue'},
                {a: 'Предрешено', color: 'blue'},
                {a: 'Без сомнений', color: 'blue'},
                {a: 'Это да!', color: 'blue'},
                {a: 'Уверен в этом', color: 'blue'},

                {a: 'Я думаю - да', color: 'green'},
                {a: 'Скорее всего', color: 'green'},
                {a: 'Есть преспективы', color: 'green'},
                {a: 'Знаки говорят да', color: 'green'},
                {a: 'Да', color: 'green'},

                {a: 'Попробуй снова', color: 'yellow'},
                {a: 'Спроси позже', color: 'yellow'},
                {a: 'Ничего не скажу', color: 'yellow'},
                {a: 'Сервер не отвечает', color: 'yellow'},
                {a: 'Будущее туманно', color: 'yellow'},

                {a: 'Даже не думай', color: 'red'},
                {a: 'Я говорю - нет', color: 'red'},
                {a: 'Нет', color: 'red'},
                {a: 'Без преспектив', color: 'red'},
                {a: 'Сомневаюсь', color: 'red'},
            ],
            randomAnswer: 0,
            stopAnimation: false
        }
        this.giveAnswer = this.giveAnswer.bind(this)

    }


    giveAnswer() {
        const max = this.state.answers.length;
        const randomValue = Math.ceil(Math.random() * (max - (1)));
        this.setState({randomAnswer: randomValue, stopAnimation: true})
    }

    render() {

        const {a, color} = this.state.answers[this.state.randomAnswer]

        const AnswerText = styled.div`
border: 2px solid ${color} !important;
box-shadow: ${color} 1px 1px 100px !important;
`
        return (
            <div className='task2'>
                <h2>Magic Ball</h2>
                <p>just click to see answer</p>
                <div className="ball-wrap">
                    <div
                        className={color !== '#5882DA' && this.state.stopAnimation ? "ball anim" : "ball"}
                        onClick={this.giveAnswer}
                        onAnimationEnd={() => {this.setState({stopAnimation: false})
                        }}>
                        <AnswerText
                            className={color !== '#5882DA' && this.state.stopAnimation ? "ball__text anim" : "ball__text"}>
                            <div className="answer">
                                {a}
                            </div>
                        </AnswerText>
                    </div>
                </div>
            </div>
        )
    }

}