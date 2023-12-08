import React from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";

export function Home() {
    return (
        <View style={styles.conteiner}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Digite algo"
                placeholderTextColor="#6B6B6B"
            />
            <TouchableOpacity style={styles.button} >
               <Text style={styles.buttonText}>
                   Clique aki
               </Text>
            </TouchableOpacity>
        </View>


    )
}