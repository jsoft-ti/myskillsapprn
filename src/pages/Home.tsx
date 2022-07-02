import React, {Fragment} from 'react';
import {useState, useEffect} from 'react';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  FlatList,
  StatusBar,
} from 'react-native';

interface SkillData{
  id: String;
  name: String;
}

export function Home() {
  const [newSkill, setNewSkill] = useState<SkillData>();
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greetings, setGreetings] = useState('');
  function handleAddNewSkill(){
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }
    setMySkills(oldState => [...oldState, newSkill]);
    //setNewSkill();
    //this.newSkillInput.focus();
  }
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreetings('Bom dia');
    } else if (hour < 18) {
      setGreetings('Boa tarde');
    } else if (hour < 23) {
      setGreetings('Boa noite');
    }
    console.log('UseEffect executado');
  }, [mySkills]);
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Text>{greetings}</Text>
        <Text>Bien Venu Jean Charles</Text>
        <Text style={styles.titles}>Segundo Texto</Text>

        <TextInput
          style={styles.inputs}
          placeholder="New skill"
          placeholderTextColor="#156899"
          onChangeText={setNewSkill}
        />
        <Button onPress={handleAddNewSkill} />
        {/*<Text style={([styles.buttonText], {marginTop: 20})}>{mySkills}</Text>*/}

        <FlatList
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({item}) => <SkillCard skill={item} />}
        />
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#CCCCCC',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  titles: {
    justifyContent: 'center',
    textAlign: 'right',
  },
  inputs: {
    backgroundColor: '#ff0000',
    fontSize: 18,
    padding: Platform.OS == 'ios' ? 15 : 10,
    margin: 30,
  },
  mySkill:{
    backgroundColor: '#ff0000',
    fontSize: 18,
    padding: 20,
    fontWeight: 'bold',
  },
});
