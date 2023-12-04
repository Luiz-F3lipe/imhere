import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>(['Luiz']);
  const [paticipantName, setParticipantName] = useState('');
  
  function handleParticipantAdd() {
    if (participants.includes(paticipantName)) {
    return Alert.alert('Paticipante exites', 'Esse participante já existe');
    }

    setParticipants(prevState => [...prevState, paticipantName]);
    setParticipantName('');
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert('Remover', `Deseja remover o participante ${name}`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name)),
      },
      {
        text: 'Não',
        style: 'cancel',
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Amigo Secreto do Volei
      </Text>

      <Text style={styles.eventDate}>
        Sábado, 2 de dezembro de 2023
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
          value={paticipantName}
          onChangeText={setParticipantName}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant
              key={item}
              name={item} 
              onRemove={() => handleRemoveParticipant(item)} 
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Adicione participantes a sua lista do evento.
          </Text>
        )}
      />
    </View>
  );
}

