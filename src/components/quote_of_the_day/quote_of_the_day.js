import React, {Component} from "react";
import './quote_of_the_day.scss'

export default class QuoteOfTheDay extends Component {


    render() {
        const {author, qText, randomQuote, visibilityF, visible} = this.props;
        return (
            <div className='task1'>
                <h1>Цитаты дня</h1>

                <div className="button-wrap">

                    <button
                        type='button'
                        onClick={randomQuote}
                    >Случайная
                    </button>
                    <button
                        type='button'
                        onClick={visibilityF}>Не нравится!
                    </button>
                </div>
                <blockquote className={visible ? '' : 'hide'}>
                    <pre>{qText}</pre>
                    <p>{author} <br/></p>
                </blockquote>

            </div>
        )
    }


}