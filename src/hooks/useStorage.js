import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  //Busca os Itens
  const getItem = async (key) => {
    try {
      const password = await AsyncStorage.getItem(key);
      return JSON.parse(password) || [];
    } catch (error) {
      console.log("Erro ao Buscar | ", error);
      return [];
    }
  };

  //Salvar Item
  const saveItem = async (key, value) => {
    try {
      let password = await getItem(key);
      password.push(value);
      await AsyncStorage.setItem(key, JSON.stringify(password));
    } catch (error) {
      console.log("Erro ao Salvar | ", error);
      return [];
    }
  };

  //Remover Item
  const removeItem = async () => {
    try {
      let password = await getItem(key);

      let myPassword = password.filter((password) => {
        return password !== item;
      });

      await AsyncStorage.setItem(key, JSON.stringify(myPassword))
      return myPassword;

    } catch (error) {
      console.log("Erro ao Remover | ", error);
      return [];
    }
  };

  return {
    getItem,
    saveItem,
    removeItem,
  };
};

export default useStorage;
