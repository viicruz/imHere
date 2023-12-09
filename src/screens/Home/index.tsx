import { Text, View, TextInput, TouchableOpacity, FlatList,Alert} from 'react-native'
import { styles } from './styles'

import Participant from '../../components/Participant'

export default function Home() {
    const participants = ["Victor", "Toddy", "Yan", "Julia", "Ana", "Jaque", "Raquel", "Gui", "Carlos"];

   
    function handleAddParticipant(){
        if (participants.includes("Victor")) {
            return Alert.alert("Participante Existente", "Já existe um participante na lista com esse nome!")
        }
    }
    function handleParticipantRemove(name: string) {
       
            return Alert.alert("Remover", `Deseja remover o Participante ${name}?`, [
                {
                    text:"Sim",
                    onPress:()=>Alert.alert("Participante deletado!")
                },
                {
                    text:"Não",
                    style:'cancel'
                }
            ])
    }


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
                <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>


            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={()=>(
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou ao evento ainda? Adcione participantes a sua lista de presença!
                    </Text>
                )}
            />


        </View>
    )
}