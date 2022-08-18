import React from 'react';
import {Button} from 'react-native'; // Importando o componente Button do react-native

export default () => {
  function executar1() {
    console.warn('Executou#1');
  }
  function executar2() {
    console.warn('Executou#2');
  }

  return (
    <>
      <Button title="Executou1" onPress={executar1} />
      <Button title="Executou2" onPress={executar2} />
      <Button
        title="Executou3"
        onPress={() => {
          console.warn('Executou#3');
        }}
      />
    </>
  );
};
