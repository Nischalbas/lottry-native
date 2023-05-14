import { Text, View, StyleSheet, Button} from "react-native";
import { Link } from "expo-router";

const Home = () => {
    return (
    <View>
        <Text style={styles.hometext} >Welcome to Lottrry App!</Text>
        <Link style={styles.homebutton} href="/lottry"><Text>Continue</Text></Link>
    </View>
    )
}

const styles = StyleSheet.create({
    hometext: {
        position: "relative",
        top: "50%",
        fontSize: 50,
        textAlign: "center",
    },
    homebutton: {      
        color: "red",  
        position: "relative",
        top: "100%",
        fontSize: 50,
        textAlign: "center",
    },
  });

export default Home;