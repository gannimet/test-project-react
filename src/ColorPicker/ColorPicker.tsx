import { useState } from 'react';
import './ColorPicker.css';

function ColorPicker() {
    const [red, setRed] = useState(255);
    const [green, setGreen] = useState(255);
    const [blue, setBlue] = useState(255);

    return (
        <>
            <h2>Color Picker</h2>

            <div className="color-picker">
                <div
                    className="preview"
                    style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
                ></div>

                <div className="color-inputs">
                    <div className="form-line">
                        <label htmlFor="red-input">Red:</label>
                        <input
                            id="red-input"
                            type="range"
                            min="0"
                            max="255"
                            value={red}
                            onChange={(event) => setRed(parseInt(event.target.value, 10))}
                        />
                    </div>

                    <div className="form-line">
                        <label htmlFor="green-input">Green:</label>
                        <input
                            id="green-input"
                            type="range"
                            min="0"
                            max="255"
                            value={green}
                            onChange={(event) => setGreen(parseInt(event.target.value, 10))}
                        />
                    </div>

                    <div className="form-line">
                        <label htmlFor="blue-input">Blue:</label>
                        <input
                            id="blue-input"
                            type="range"
                            min="0"
                            max="255"
                            value={blue}
                            onChange={(event) => setBlue(parseInt(event.target.value, 10))}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ColorPicker;
