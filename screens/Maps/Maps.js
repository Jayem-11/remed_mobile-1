import { View, Text, Button, TouchableOpacity } from 'react-native';
import GetMaps from './GetMaps';
import MapScreen from './MapScreen';
import So from './So';

const Maps = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
         {/* <GetMaps/> */}
         {/* <MapScreen/> */}
         <So/>
        </View>
    );
};


export default Maps; 
