// STYLES
import { styles } from './InputTemp.style';

// REACT NATIVE
import { TextInput, Text, View } from 'react-native';

export default function InputTemp({ defaultValue, onChangeText, unit }) {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Température..."
                style={styles.input}
                keyboardType="numeric"
                maxLength={4}
                defaultValue={defaultValue}
                onChangeText={onChangeText}
            ></TextInput>
            <Text style={styles.unit}>{unit}</Text>
        </View>
    );
}
