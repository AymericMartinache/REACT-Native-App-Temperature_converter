// REACT NATIVE
import { ImageBackground, Text, View } from 'react-native';

// ASSETS
import hotBackground from './assets/img/hot.png';
import coldBackground from './assets/img/cold.png';

// STYLES
import { styles } from './App.style';

// COMPONENTS
import InputTemp from './Components/InputTemp/InputTemp';
import TempDisplay from './Components/TempDisplay/TempDisplay';
import ConvertButton from './Components/ConvertButon/ConvertButton';

// CONSTANT
import { DEFAULT_TEMP, DEFAULT_UNITS, UNITS } from './constant';

// REACT
import { useState, useEffect } from 'react';

// SERVICES
import {
    getOppositeUnit,
    convertTempTo,
    isIceTemp,
} from './services/temp-service';

export default function App() {
    // STATE
    const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNITS);
    const [inputValue, setInputValue] = useState(DEFAULT_TEMP);
    const [currentBackground, setCurrentBackground] = useState();

    const oppositeUnit = getOppositeUnit(currentUnit);

    // USE EFFECT
    useEffect(() => {
        const tempAsFloat = Number.parseFloat(inputValue);
        if (!isNaN(tempAsFloat)) {
            const isColdBackground = isIceTemp(inputValue, currentUnit);
            setCurrentBackground(
                isColdBackground ? coldBackground : hotBackground
            );
        }
    }, [inputValue, currentUnit]);

    function getConvertedTemp() {
        const valueAsFloat = Number.parseFloat(inputValue);
        return isNaN(valueAsFloat)
            ? ''
            : convertTempTo(oppositeUnit, valueAsFloat).toFixed(1);
    }

    return (
        <>
            <ImageBackground
                style={styles.container}
                source={currentBackground}
            >
                <View style={styles.workspace}>
                    <TempDisplay
                        value={getConvertedTemp()}
                        unit={oppositeUnit}
                    ></TempDisplay>

                    <InputTemp
                        defaultValue={DEFAULT_TEMP}
                        onChangeText={setInputValue}
                        unit={currentUnit}
                    ></InputTemp>

                    <View>
                        <ConvertButton
                            unit={currentUnit}
                            onPress={() => {
                                setCurrentUnit(oppositeUnit);
                            }}
                        />
                    </View>
                </View>
            </ImageBackground>
        </>
    );
}
