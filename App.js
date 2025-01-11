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
    // Cette fonctionnalité utilise l'effet pour surveiller les changements de la valeur de température entrée et de l'unité actuelle.
    useEffect(() => {
        // Convertit la valeur de température entrée en un nombre flottant pour faciliter les calculs.
        const tempAsFloat = Number.parseFloat(inputValue);
        // Vérifie si la conversion en nombre flottant a réussi (c'est-à-dire que la valeur n'est pas NaN).
        if (!isNaN(tempAsFloat)) {
            // Utilise la fonction isIceTemp pour déterminer si la température est inférieure ou égale à 0°C (ou 32°F).
            const isColdBackground = isIceTemp(inputValue, currentUnit);
            // Met à jour l'arrière-plan en fonction de la température : froid si inférieure ou égale à 0, sinon chaud.
            setCurrentBackground(
                isColdBackground ? coldBackground : hotBackground
            );
        }
    }, [inputValue, currentUnit]);

    // Cette fonction convertit la température entrée dans l'unité opposée.
    function getConvertedTemp() {
        // Convertit la valeur de température entrée en un nombre flottant pour faciliter les calculs.
        const valueAsFloat = Number.parseFloat(inputValue);
        // Si la conversion en nombre flottant échoue (c'est-à-dire que la valeur est NaN), retourne une chaîne vide.
        return isNaN(valueAsFloat)
            ? ''
            : // Sinon, convertit la température dans l'unité opposée et arrondit à un décimal.
              convertTempTo(oppositeUnit, valueAsFloat).toFixed(1);
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
