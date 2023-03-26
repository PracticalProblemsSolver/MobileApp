import { View } from 'react-native';
import { styles } from '../styles';

export default function NavigatonPanel(props){
    return(
        <View style={styles.navBar}>
            {props.children}
        </View>
    );
}

  

