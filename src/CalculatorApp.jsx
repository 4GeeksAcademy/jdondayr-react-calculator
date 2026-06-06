import React, { useState } from "react";

const CalculatorApp = () => {
    // useStates
    const [screenValue, setScreenValue] = useState("");
    const [activeOperation, setActiveOperation] = useState(null);
    const [firstValue, setFirstValue] = useState(0);

    // Operation functions
    const sum = () => {
        setActiveOperation("sum");
        setFirstValue(screenValue);
        setScreenValue("");
    }

    const subtract = () => {
        setActiveOperation("subtract");
        setFirstValue(screenValue);
        setScreenValue("");
    }

    const multiply = () => {
        setActiveOperation("multiply");
        setFirstValue(screenValue);
        setScreenValue("");
    }

    const division = () => {
        setActiveOperation("division");
        setFirstValue(screenValue);
        setScreenValue("");
    }

    // = function
    const equal = () => {
        if (activeOperation === "sum") setScreenValue(firstValue + screenValue);
        else if (activeOperation === "subtract") setScreenValue(firstValue - screenValue);
        else if (activeOperation === "multiply") setScreenValue(firstValue * screenValue);
        else if (activeOperation === "division") setScreenValue(firstValue / screenValue);
    }

    // Calculator buttons data
    const buttons = [
        { content: "C", usageFunction: () => setScreenValue("") },
        { content: "+/-", usageFunction: () => setScreenValue(screenValue * -1) },
        { content: "%", usageFunction: () => setScreenValue(screenValue / 100) },
        { content: "/", usageFunction: () => division() },
        { content: "7", usageFunction: () => setScreenValue(Number(String(screenValue) + "7")) },
        { content: "8", usageFunction: () => setScreenValue(Number(String(screenValue) + "8")) },
        { content: "9", usageFunction: () => setScreenValue(Number(String(screenValue) + "9")) },
        { content: "*", usageFunction: () => multiply() },
        { content: "4", usageFunction: () => setScreenValue(Number(String(screenValue) + "4")) },
        { content: "5", usageFunction: () => setScreenValue(Number(String(screenValue) + "5")) },
        { content: "6", usageFunction: () => setScreenValue(Number(String(screenValue) + "6")) },
        { content: "-", usageFunction: () => subtract() },
        { content: "1", usageFunction: () => setScreenValue(Number(String(screenValue) + "1")) },
        { content: "2", usageFunction: () => setScreenValue(Number(String(screenValue) + "2")) },
        { content: "3", usageFunction: () => setScreenValue(Number(String(screenValue) + "3")) },
        { content: "+", usageFunction: () => sum() },
        { content: "0", usageFunction: () => setScreenValue(Number(String(screenValue) + "0")) },
        { content: ".", usageFunction: () => setScreenValue(String(screenValue) + ".") },
        { content: "=", usageFunction: () => equal() },
    ]

    // Buttons JSX
    const buttonsJSX = buttons.map((button) => {
        return <button key={button.content} className="button" style={(button.content === "=" ? {
                                                                                        backgroundColor: "green",
                                                                                        gridColumn: "span 2",
        } : {})} onClick={button.usageFunction}>{button.content}</button>
    })

    return (
        <div className="main-container">
            <div className="calculator">
                <input type="text" className="screen" value={screenValue} readOnly />
                <div className="buttons">
                    {buttonsJSX}
                </div>
            </div>
        </div>
    );
}

export default CalculatorApp;