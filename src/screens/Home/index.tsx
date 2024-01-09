import React from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {

    const participantes = ["andre", "milena", "joao", "maria", "andre", "milena", "joao", "maria", "andre", "milena", "joao", "maria"]

    const handleParticipantAdd = () => {
        console.log("Voce clicou no botao de Adicionar");
    }

    function handleParticipantRemove(name: string) {
        console.log(`"Você quer remover ${name}"`);
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
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    participantes.map((participante, index) => (
                        <Participant key={index} name={participante} onRemove={() => handleParticipantRemove(participante)} />
                    ))
                }
            </ScrollView>



        </View>


    )
}