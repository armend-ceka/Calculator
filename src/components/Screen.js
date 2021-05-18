import React from 'react'
import ResultScreen from './ResultScreen'
import EquationScreen from './EquationScreen'

function Screen(props){
    return(
        <div className="screen">
            <ResultScreen result={props.result}/>
            <EquationScreen equation={props.equation}/>
        </div>
    )
}

export default Screen;