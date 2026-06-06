import React, { useState } from "react";

import {sum, subtract, multiply, division} from "./functions.js"

// Components imports

const CalculatorApp = () => {
    // Screen value
    const [screenValue, setScreenValue] = useState(10);

    // Calculator buttons data
    const buttons = [
        { content: "C", usageFunction: () => setScreenValue(0) },
        { content: "+/-", usageFunction: () => setScreenValue(screenValue * -1) },
        { content: "%", usageFunction: () => setScreenValue(screenValue / 100) },
        { content: "7", usageFunction: () => setScreenValue(Number(String(screenValue) + "7")) },
        { content: "8", usageFunction: () => setScreenValue(Number(String(screenValue) + "8")) },
        { content: "9", usageFunction: () => setScreenValue(Number(String(screenValue) + "9")) },
        { content: "4", usageFunction: () => setScreenValue(Number(String(screenValue) + "4")) },
        { content: "5", usageFunction: () => setScreenValue(Number(String(screenValue) + "5")) },
        { content: "6", usageFunction: () => setScreenValue(Number(String(screenValue) + "6")) },
        { content: "1", usageFunction: () => setScreenValue(Number(String(screenValue) + "1")) },
        { content: "2", usageFunction: () => setScreenValue(Number(String(screenValue) + "2")) },
        { content: "3", usageFunction: () => setScreenValue(Number(String(screenValue) + "3")) },
        { content: "0", usageFunction: () => setScreenValue(Number(String(screenValue) + "0")) },
    ]

    // Buttons JSX
    const buttonsJSX = buttons.map((button) => {
        return <button key={button.content} onClick={button.usageFunction}>{button.content}</button>
    })

    return (
        <div className="calculator">
            <input type="text" name="screen" id="screen" value={screenValue} readOnly />
            {buttonsJSX}
        </div>
    );``
}

export default CalculatorApp;


// Hacer una calculadora funcional

/*  Componentes:
    - Calculadora
    - Pantalla
    - Botón
        -
    - Botón igual
*/