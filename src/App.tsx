import React, {useState} from 'react';
import './App.css';
import Map from './components/map/Map'
import JSONData from './data.json'
import {IResultItem} from "./types/IResultItem";

function App() {
    const data: IResultItem[] = JSONData
    const [mode, setMode] = useState<string>(data[0].type)
    let currentMode = data.find((el) => el.type === mode)

    return (
        <div className="App">
            <select
                name="mode"
                id="select"
                onChange={(e) => setMode(e.target.value)}
            >
                {data.map((el) => {
                    return (
                        <option value={el.type}>{el.type}</option>
                    )
                })}
            </select>
            {currentMode && <Map
                currentMode={currentMode}
            />}

        </div>
    );
}

export default App;
