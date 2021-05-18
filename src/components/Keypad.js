import React from 'react'
import KeyRow from './Keyrow'
import Button from './Button'


function Keypad(props) {
    return (
        <div className="keypad">
            <KeyRow>
                <Button type="button func" onPress={props.buttonPress}>C</Button>
                <Button type="button func" onPress={props.buttonPress}>&larr;</Button>
                <Button type="button func" onPress={props.buttonPress}>%</Button>
                <Button type="button operator" onPress={props.buttonPress}>/</Button>
            </KeyRow>
            <KeyRow>
                <Button type="button" onPress={props.buttonPress}>7</Button>
                <Button type="button" onPress={props.buttonPress}>8</Button>
                <Button type="button" onPress={props.buttonPress}>9</Button>
                <Button type="button operator" onPress={props.buttonPress}>*</Button>
            </KeyRow>
            <KeyRow>
                <Button type="button" onPress={props.buttonPress}>4</Button>
                <Button type="button" onPress={props.buttonPress}>5</Button>
                <Button type="button" onPress={props.buttonPress}>6</Button>
                <Button type="button operator" onPress={props.buttonPress}>-</Button>
            </KeyRow>
            <KeyRow>
                <Button type="button" onPress={props.buttonPress}>1</Button>
                <Button type="button" onPress={props.buttonPress}>2</Button>
                <Button type="button" onPress={props.buttonPress}>3</Button>
                <Button type="button operator" onPress={props.buttonPress}>+</Button>
            </KeyRow>
            <KeyRow>
                <Button type="button" onPress={props.buttonPress}>0</Button>
                <Button type="button" onPress={props.buttonPress}>.</Button>
                <Button type="large_button" onPress={props.buttonPress}>=</Button>
            </KeyRow>
        </div>
    )
}

export default Keypad;