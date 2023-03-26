import NavigationPanel from './components/NavigationPanel';
import ContentContainer from './components/ContenContainer';
import { styles } from './styles';
import { SafeAreaView, ScrollView } from 'react-native';
import SideMenu from './components/SideMenu';
import { useState } from 'react';
import MenuButton from './components/MenuButton';
import { Image } from 'react-native';
import MapView from 'react-native-maps';
import { Text } from 'react-native';

export default function App() {
  const [sideMenustate, setSideMenuState] = useState(false);

  return (
    <>
      <NavigationPanel>
        <MenuButton openFunction={() => setSideMenuState(sideMenustate ? false : true)}></MenuButton>
      </NavigationPanel>

      <SideMenu isOpen={sideMenustate}>
        
      </SideMenu>

      <SafeAreaView style={styles.mainContainer}>
        <ScrollView>
          <ContentContainer>
            <Text style={{fontSize: 40}}>Picture of the day</Text>
            <Image source={require('./pngtree-stars-background-in-galaxy-cosmos-image_455705.jpg')} 
            style={{width: 200, height: 200}}/>

            <Text style={{fontSize: 40}}>Observatory</Text>
            <MapView
              style={{width: 300, height: 300}}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
            <Text style={{fontSize: 30}}>Picture was made 22.03.2022</Text>
          </ContentContainer>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}