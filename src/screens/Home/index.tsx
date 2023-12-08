import { Text, View, StyleSheet } from 'react-native'
import {styles} from './styles'
export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Vito</Text>

            <Text style={styles.eventDate}>Foda</Text>
        </View>
    )
}