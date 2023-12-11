import { useState } from 'react';

import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'

import Participant from '../../components/Participant'

export default function Home() {
    const [participants, setParticipant] = useState([]);
    const [participantName, setParticipantName] = useState("");


    function handleAddParticipant() {
        if (participantName.trim() === "") {
            Alert.alert("Campo Vazio", "Preencha o campo com o nome do participante!");
        }
        if (participants.includes(participantName)) {
            return Alert.alert("Participante Existente", "Já existe um participante na lista com esse nome!")
        }

        setParticipant([...participants, participantName]);
        setParticipantName("");
    }

    function handleParticipantRemove(name: string) {
        const updateParicipant = participants.filter(p => p !== name);
        setParticipant(updateParicipant);
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
                    value={participantName}
                    onChangeText={(text) => setParticipantName(text)}

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
                        onRemove={handleParticipantRemove}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou ao evento ainda? Adcione participantes a sua lista de presença!
                    </Text>
                )}
            />


        </View>
    )
}