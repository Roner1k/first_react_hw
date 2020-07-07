import React, {Component} from 'react';
//import logo from './kitten-440379.jpg';
import './App.scss';
import QuoteOfTheDay from "../quote_of_the_day";
import MagicBall from "../magic_ball";
export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            quotes: [
                {
                    author: 'Аркадий и Борис Стругацкие',
                    qText: `Восемьдесят три процента всех дней в году начинаются одинаково: звенит будильник.`
                }, {
                    author: 'Анна Элеонора Рузвельт',
                    qText: `Каждый день надо делать дело, которое тебя пугает.`
                },
                {
                    author: 'Холм одного дерева (One Tree Hill)',
                    qText: 'Если у тебя плохой день — не отчаивайся! У кого-то он еще хуже!'
                },
                {author: 'День радио', qText: 'Я променял свой день на ночь, причем по очень херовому курсу.'},
                {author: 'Блудливая Калифорния (Californication)', qText: 'Еще один солнечный день в аду.'},
                {
                    author: 'Приключения Винни Пуха (The Many Adventures of Winnie the Pooh)',
                    qText: `— Какой сегодня день?
— Сегодня.
— Мой любимый день.`
                },
            ],
          randomNumber: 0,
          visible: true,
        }
        this.randomQuote = this.randomQuote.bind(this);
        this.visibleChange = this.visibleChange.bind(this);
    }

    randomQuote() {
        const max = this.state.quotes.length;
        const rn = Math.floor(Math.random() * (max - 0)) + 0;
      console.log(rn)
        this.setState({randomNumber: rn, visible: true})
    }

    visibleChange() {
      this.setState({visible: false})
    }

    render() {
        const {author, qText} = this.state.quotes[this.state.randomNumber];
        return (
            <div className="App">
                <QuoteOfTheDay
                    author={author}
                    qText={qText}
                    randomQuote ={this.randomQuote}
                    visibilityF = {this.visibleChange}
                    visible = {this.state.visible}
                />
                <MagicBall/>
            </div>

        );
    }
}

