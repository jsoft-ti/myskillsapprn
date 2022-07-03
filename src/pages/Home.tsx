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
    var data: SkillData = {
      id: String(new Date().getTime()),
      name: String(newSkill),
    }
  
    console.log(newSkill)
    //console.log(newSkill?.name)
    
    setMySkills(oldState => [...oldState, data]);
    //setNewSkill();
    //this.newSkillInput.focus();
  }

  function handleRemoveSkill(id: String){
    setMySkills(oldSkills => oldSkills.filter(
      skill => skill.id != id
    ))
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
    //console.log( ...mySkills );
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
        <Button title="Add" onPress={handleAddNewSkill} />
        {/*<Text style={([styles.buttonText], {marginTop: 20})}>{mySkills}</Text>*/}

        <FlatList
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({item}) => <SkillCard skill={item.name} onPress={() => handleRemoveSkill(item.id)} />}
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
