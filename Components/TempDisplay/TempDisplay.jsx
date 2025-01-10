// STYLES
import { styles } from './TempDisplay.style';

// REACT NATIVE
import { Text } from 'react-native';

export default function TempDisplay({ value, unit }) {
    return (
        <>
            <Text style={styles.text}>
                {value} {unit}
            </Text>
        </>
    );
}
