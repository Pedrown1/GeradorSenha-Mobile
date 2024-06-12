import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import useStorage from "../../hooks/useStorage";

export default function ModalPassword({ password, handleClose }) {
  const { saveItem } = useStorage();

  async function copiaSenha() {
    await Clipboard.setStringAsync(password);
    await saveItem("@pass", password);
    alert("Senha Copiada!");

    handleClose();
  }

  function clicouVoltar() {
    handleClose();
    console.log("Clicou em Voltar");
  }

  function clicouSalvar() {
    copiaSenha();
    console.log("Clicou em Salvar");
  }

  return (
    <View style={styles.container}>
      <View style={styles.items}>
        <View style={styles.title}>
          <Text style={{ fontSize: "30", fontWeight: "700" }}>
            Senha Gerada!
          </Text>
        </View>

        <Pressable style={styles.boxSenha} onLongPress={copiaSenha}>
          <Text style={{ color: "#FFF", textAlign: "center" }}>
            {password}{" "}
          </Text>
        </Pressable>

        <View style={styles.btn}>
          <TouchableOpacity style={styles.btnVoltar} onPress={clicouVoltar}>
            <Text style={{ fontSize: 28 }}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSalvar} onPress={clicouSalvar}>
            <Text style={{ fontSize: 28, color: "#FFF" }}>Salvar Senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24,24,24,0.6)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  items: {
    backgroundColor: "#FFF",
    height: 300,
    width: 350,
    borderRadius: 12,
  },

  title: {
    padding: 7,
    marginTop: 30,
    alignItems: "center",
  },

  boxSenha: {
    backgroundColor: "#000",
    padding: 30,
    width: "90%",
    alignSelf: "center",
    marginTop: 25,
    borderRadius: 10,
  },

  btn: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },

  btnVoltar: {
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },

  btnSalvar: {
    borderColor: "#000",
    borderRadius: 8,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: "#392de9",
  },
});
