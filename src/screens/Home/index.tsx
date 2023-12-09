import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'

import  Participant from '../../components/Participant'

export default function Home() {


    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Sexta-Feira, 8 de dezembro de 2023</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor={"#6b6B6B"}

                />
                <TouchableOpacity style={styles.button} onPress={() => {
                    console.log("Você clicou no botão de Adicionar!");
                }}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>

                
            </View>

            <Participant/>
            <Participant/>
            <Participant/>
        </View>
    )
}