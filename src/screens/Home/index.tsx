import React from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {

    const participantes = ["andre", "milena", "joao", "maria"]

    const handleParticipantAdd = () => {
        if (participantes.includes("andre")) {
            return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome!")
        }

        console.log("Voce clicou no botao de Adicionar");
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Remover o participante ${name}?`,[
            {
                text:'Sim',
                onPress:()=>Alert.alert("Deletado")
            },
            {
                text:'Não',
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
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participantes}
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