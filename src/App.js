import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import CardUser from "./components/CardUser";
import { useEffect, useState } from "react";
export default function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("http://localhost:3000/user");
      const data = await response?.json();
      if (response.ok) {
        console.log(data);
        setUsers(data.users);
      } else {
        console.log("Erro ao buscar usuários");
      }
    };
    getUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      {users.map((user) => (
        <CardUser
          key={user.id}
          avatar={user.avatar}
          name={user.name}
          email={user.email}
        />
      ))}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    //justifyContent: 'center',
  },
});
