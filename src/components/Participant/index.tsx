import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {}

export default function Participant({}: Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.name}>
            Victor Cruz
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => {
            console.log("Você clicou no botão de Adicionar!");
        }}>
            <Text style={styles.buttonText}>
                -
            </Text>
        </TouchableOpacity>
    </View>
  )
}