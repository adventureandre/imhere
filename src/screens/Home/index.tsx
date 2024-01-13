import React, { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {

    const [participants,setParticipants]=useState<string[]>([])
    const [participantsName,setParticipantsName]=useState('')

    const handleParticipantAdd = () => {
        if (participants.includes(participantsName)) {
            return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome!")
        }

       setParticipants(prevState => [...prevState, participantsName] )
       setParticipantsName('')

    }

    function handleParticipantRemove(name: string) {




        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setParticipants(prevState => prevState.filter(participant => participant !== name));    
                    Alert.alert("Deletado");
                }

            },
            {
                text: 'Não',
                style: 'cancel',
            }
        ])

    }

    return (
        <View style={styles.conteiner}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite algo"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setParticipantsName}
                    value={participantsName}
                    
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={
                    ({ item }) => (
                        <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
                    )

                }
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda?
                    </Text>
                )}
            />

        </View>


    )
}