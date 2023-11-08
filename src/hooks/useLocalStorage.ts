export const useLocalStorage = <T>(key: string) => {
  const setItem = (value: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      throw new Error('Houve um erro ao gerenciar o armazenamento local.');
    }
  };

  const getItem = () => {
    try {
      const item: string | null = window.localStorage.getItem(key);
      if (item !== null) {
        return JSON.parse(item) as T;
      }
      return null;
    } catch (error) {
      throw new Error('Houve um erro ao gerenciar o armazenamento local.');
    }
  };

  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      throw new Error('Houve um erro ao gerenciar o armazenamento local.');
    }
  };

  return { setItem, getItem, removeItem };
};
