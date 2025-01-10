// STYLES
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './ConvertButton.style';

export default function ConvertButton({ unit, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>Convertir en {unit}</Text>
        </TouchableOpacity>
    );
}
