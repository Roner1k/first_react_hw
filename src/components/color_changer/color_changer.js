import React, {useState, useEffect, useRef} from "react";
import './color_changer.scss'

export default function ColorChanger() {
    const [colorCheck, setColorCheck] = useState([
        {red: true},
        {yellow: true},
        {green: true}
    ])
    const [intervalDelay, setIntervalDelay] = useState(1000);
    const [{red}, {yellow}, {green}] = colorCheck;


    useInterval(() => {
        setIntervalDelay(10000)
        changeColor(colorCheck)

    }, intervalDelay)

    function useInterval(callback, delay) {
        const savedCallback = useRef();

        // Remember the latest function.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }

            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    function changeColor() {

        setTimeout(() => {
            setColorCheck([{red: true}, {yellow: false}, {green: false}])

            setTimeout(() => {
                setColorCheck([{red: true}, {yellow: true}, {green: false}])

                setTimeout(() => {
                    setColorCheck([{red: false}, {yellow: false}, {green: true}])

                }, 2500)
            }, 3500)
        }, 500)
    }

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
