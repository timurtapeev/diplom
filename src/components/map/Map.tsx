import React, {FC} from 'react';
import './map.css'
import {IMapProps} from "../../types/IMapProps";
const Map: FC<IMapProps> = ({currentMode}) => {
    const step = currentMode?.step ?? 1
    const minHeight = Number(currentMode?.minmax?.[0] ?? 1)
    const maxHeight = Number(currentMode?.minmax?.[1] ?? 1)
    const heightStep =  (maxHeight - minHeight) / 100
    console.log(maxHeight, minHeight, maxHeight - minHeight)

    return (
        <div className="map" style={currentMode && currentMode.styles}>
            <img src="/map.jpg" alt="карта проб"/>
            {currentMode.value.map((el, i) => {
                return (
                    <div
                        className="mapPoint"
                        key={i}
                        style={{
                            top: `${el.y}%`,
                            right: `${el.x}%`,
                            height: `${minHeight === maxHeight ? 30 : Number(el.value) / heightStep * step}px`,
                            width: `${minHeight === maxHeight ? 30 : Number(el.value) / heightStep * step}px`,
                        }}
                    >
                        <span>{minHeight === maxHeight ? el.value : Number(el.value).toFixed(2)}</span>
                    </div>

                )
            })}
        </div>
    );
};

export default Map;