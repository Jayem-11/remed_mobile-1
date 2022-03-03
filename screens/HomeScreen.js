import { Button, View } from "react-native";
import useAuth from "../hooks/useAuth";

const HomeScreen = ({ navigation }) => {
  const { logout } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {/* <Text>Home Screen</Text> */}
      <Button
        title="Doctor Dashboard"
        onPress={() => navigation.navigate("DoctorDash", { name: "Doctor" })}
      />
      <Button
        color="black"
        title="Patient Dashboard"
        onPress={() => navigation.navigate("PatientDash", { name: "Patient" })}
      />
      <Button
        color="dodgerblue"
        title="Faqs"
        onPress={() => navigation.navigate("Faqs", { name: "Faqs" })}
      />
      <Button color="black" title="Logout" onPress={logout} />
      <Button color='blue' title='Maps' onPress={() => navigation.navigate('map', { name: 'Maps' })} />

    </View>

  );
};

export default HomeScreen;
