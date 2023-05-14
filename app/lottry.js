import { SafeAreaView,Text, View, StyleSheet, TextInput, Button} from "react-native";
import { useState } from "react";


const Lottry = () => {

    let dbA = [];
    let dbB = [];
    let dbc = [];
    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');
    const ButtonPress = () => {
        dbA.push({nip : setName, grades : setGrade})
    }
    return (
        <SafeAreaView>
        <View>
        <Text >Enter Names</Text>
        <TextInput
        style={{height: 40, backgroundColor: 'black', color: "white"}}
        placeholder="Type here to translate!"
        onChangeText={newText => setName(newText)}
        defaultValue={name}
        />

        <Text >Enter Class</Text>
        <TextInput
        style={{height: 40, backgroundColor: 'black', color: "white"}}
        placeholder="Type here to translate!"
        onChangeText={newWord => setGrade(newWord)}
        defaultValue={grade}
        />
        <Button
        onPress={ButtonPress()}
        title="Add"
        color="#841584"
        accessibilityLabel="Add the name for the lottry"
        />
        <Text id="Namelist">{dbA.map((item) => `${item.nip}`).join()}</Text>
        
        <Text></Text>
        </View>
        </SafeAreaView>
    )
}




export default Lottry;