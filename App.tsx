import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Defining page types
type RootStackParamList = {
  Home: undefined;
  CourseTypes: undefined;
  SixMonthCourses: undefined;
  SixWeekCourses: undefined;
  ContactUs: undefined;
  Bookings: undefined;
  Cart: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();



// Screens

function HomeScreen({ navigation }: { navigation: any}){

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      
      <View style={styles.banner}>

        <View>
          <View style={styles.row}>
            <Image 
              style={styles.logo}
              src={'https://reactnative.dev/img/tiny_logo.png'}
            />

            <View style={styles.headingContainer}>
              <Text style={styles.heading}>
                Empowering the nation
              </Text>
              <Text style={styles.heading}>
                Slogan
              </Text>
            </View>
            
          </View>
        </View>
        
        <Modal 
          animationType='fade'
          visible={modalVisible}
          transparent={true}
        >
        <View>
          <View style={styles.bannerPopup}>
            <View style={styles.row}>
            <Image 
              style={styles.logo}
              src={'https://reactnative.dev/img/tiny_logo.png'}
            />

              </View>

            <TouchableOpacity style={styles.buttonOn} onPress={()=> {setModalVisible(false)}}> 
            
            </TouchableOpacity>


          {/* Dropdown menu page links */}
          </View>
            
            <View style={styles.linkContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('CourseTypes')}>
                <Text>Course Types</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixMonthCourses')}>
                <Text>Six Month Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixWeekCourses')}>
                <Text>Six Week Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
                <Text>Contact Us</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Bookings')}>
                <Text>Bookings</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Text>Cart</Text>
              </TouchableOpacity>

          </View>

          </View>
        </Modal>
        <TouchableOpacity style={styles.buttonOff} onPress={() => setModalVisible(true)}> 
          
        </TouchableOpacity>
      </View>

      <View>
        <View style={modalVisible ? styles.opacityOverlayOn : styles.opacityOverlayOff} >
          
        </View>

        <Text style={styles.paragraph}>
        Empowering the nation has been providing learning opportunities since 2022 and remains dedicated in the teaching and empowerment of our nation. We offer a variety of courses to suit the needs of
        each prospective student, whether learning how to sew or basic medical training, we are certain there is a course for you.
        </Text>

      </View>
    </View>
  );
};


/**
 * 
 * NEXT SCREEN  NEXT SCREEN  NEXT SCREEN 
 * 
 * NEXT SCREEN  NEXT SCREEN  NEXT SCREEN 
 * 
 * NEXT SCREEN  NEXT SCREEN  NEXT SCREEN 
 * 
 */


function CourseTypeScreen({ navigation }: { navigation: any}){

  // Variables 
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={styles.banner}>

        <View>
          <View style={styles.row}>
            <Image 
              style={styles.logo}
              src={'https://reactnative.dev/img/tiny_logo.png'}
            />

            <View style={styles.headingContainer}>
              <Text style={styles.heading}>
                Empowering the nation
              </Text>
              <Text style={styles.heading}>
                Slogan
              </Text>
            </View>
            
          </View>
        </View>
        
        <Modal 
          animationType='fade'
          visible={modalVisible}
          transparent={true}
        >
        <View>
          <View style={styles.bannerPopup}>
            <View style={styles.row}>
            <Image 
              style={styles.logo}
              src={'https://reactnative.dev/img/tiny_logo.png'}
            />

              </View>

            <TouchableOpacity style={styles.buttonOn} onPress={()=> {setModalVisible(false)}}> 
            
            </TouchableOpacity>


          {/* Dropdown menu page links */}
          </View>
            
            <View style={styles.linkContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('CourseTypes')}>
                <Text>Course Types</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixMonthCourses')}>
                <Text>Six Month Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixWeekCourses')}>
                <Text>Six Week Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
                <Text>Contact Us</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Bookings')}>
                <Text>Bookings</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Text>Cart</Text>
              </TouchableOpacity>

          </View>

          </View>
        </Modal>
        <TouchableOpacity style={styles.buttonOff} onPress={() => setModalVisible(true)}> 
          
        </TouchableOpacity>
      </View>




      <View style={styles.scrollContainer}>

        <ScrollView style={styles.scroll}>

        <View style={modalVisible ? styles.opacityOverlayOn : styles.opacityOverlayOff} >
          
        </View>
        
          <Text style={styles.paragraph}>
            Six week courses
          </Text>
          <Text style={styles.paragraph}>
            Child Minding {'\n'} {'\n'} 
            Cooking {'\n'}{'\n'} 
            Garden Maintenance 
          </Text>

          <Text style={styles.paragraph}>
            Six Month courses
          </Text>
          <Text style={styles.paragraph}>
            First Aid {'\n'} {'\n'} 
            Sewing {'\n'}{'\n'} 
            Landscaping {'\n'}{'\n'} 
            Life Skills
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};


/**
 * 
 * NEXT SCREEN  NEXT SCREEN  NEXT SCREEN 
 * 
 * NEXT SCREEN  NEXT SCREEN  NEXT SCREEN 
 * 
 * NEXT SCREEN  NEXT SCREEN  NEXT SCREEN 
 * 
 */


function SixMonthCoursesScreen({ navigation }: { navigation: any}){
  
  // Variables 
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={styles.banner}>

        <View>
          <View style={styles.row}>
            <Image 
              style={styles.logo}
              src={'https://reactnative.dev/img/tiny_logo.png'}
            />

            <View style={styles.headingContainer}>
              <Text style={styles.heading}>
                Empowering the nation
              </Text>
              <Text style={styles.heading}>
                Slogan
              </Text>
            </View>
            
          </View>
        </View>
        
        <Modal 
          animationType='fade'
          visible={modalVisible}
          transparent={true}
        >
        <View>
          <View style={styles.bannerPopup}>
            <View style={styles.row}>
            <Image 
              style={styles.logo}
              src={'https://reactnative.dev/img/tiny_logo.png'}
            />

              </View>

            <TouchableOpacity style={styles.buttonOn} onPress={()=> {setModalVisible(false)}}> 
            
            </TouchableOpacity>


          {/* Dropdown menu page links */}
          </View>
            
            <View style={styles.linkContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('CourseTypes')}>
                <Text>Course Types</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixMonthCourses')}>
                <Text>Six Month Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixWeekCourses')}>
                <Text>Six Week Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
                <Text>Contact Us</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Bookings')}>
                <Text>Bookings</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Text>Cart</Text>
              </TouchableOpacity>

          </View>

          </View>
        </Modal>
        <TouchableOpacity style={styles.buttonOff} onPress={() => setModalVisible(true)}> 
          
        </TouchableOpacity>
      </View>




      <View style={styles.scrollContainer}>

        <ScrollView style={styles.scroll}>

        <View style={modalVisible ? styles.opacityOverlayOn : styles.opacityOverlayOff} >
          
        </View>
        
          <Text style={styles.paragraph}>First Aid</Text>
          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />

          <Text style={styles.paragraph}>Sewing</Text>
          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />

          <Text style={styles.paragraph}>Landscaping</Text>
          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />

          <Text style={styles.paragraph}>Life Skills</Text>
          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />
          
        </ScrollView>
      </View>
    </View>
  );
};


/**
 * 
 * NEXT SCREEN  NEXT SCREEN  NEXT SCREEN 
 * 
 * NEXT SCREEN  NEXT SCREEN  NEXT SCREEN 
 * 
 * NEXT SCREEN  NEXT SCREEN  NEXT SCREEN 
 * 
 */


function SixWeekCoursesScreen({ navigation }: { navigation: any}){
  
  // Variables 
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={styles.banner}>

        <View>
          <View style={styles.row}>
            <Image 
              style={styles.logo}
              src={'https://reactnative.dev/img/tiny_logo.png'}
            />

            <View style={styles.headingContainer}>
              <Text style={styles.heading}>
                Empowering the nation
              </Text>
              <Text style={styles.heading}>
                Slogan
              </Text>
            </View>
            
          </View>
        </View>
        
        <Modal 
          animationType='fade'
          visible={modalVisible}
          transparent={true}
        >
        <View>
          <View style={styles.bannerPopup}>
            <View style={styles.row}>
            <Image 
              style={styles.logo}
              src={'https://reactnative.dev/img/tiny_logo.png'}
            />

              </View>

            <TouchableOpacity style={styles.buttonOn} onPress={()=> {setModalVisible(false)}}> 
            
            </TouchableOpacity>


          {/* Dropdown menu page links */}
          </View>
            
            <View style={styles.linkContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('CourseTypes')}>
                <Text>Course Types</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixMonthCourses')}>
                <Text>Six Month Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixWeekCourses')}>
                <Text>Six Week Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
                <Text>Contact Us</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Bookings')}>
                <Text>Bookings</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Text>Cart</Text>
              </TouchableOpacity>

          </View>

          </View>
        </Modal>
        <TouchableOpacity style={styles.buttonOff} onPress={() => setModalVisible(true)}> 
          
        </TouchableOpacity>
      </View>




      <View style={styles.scrollContainer}>

        <ScrollView style={styles.scroll}>

        <View style={modalVisible ? styles.opacityOverlayOn : styles.opacityOverlayOff} >
          
        </View>
        
          <Text style={styles.paragraph}>Child Minding</Text>
          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />

          <Text style={styles.paragraph}>Cooking</Text>
          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />

          <Text style={styles.paragraph}>Garden Maintenance</Text>
          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />
          
        </ScrollView>
      </View>
    </View>
  );
  
};


/**
 * 
 * NEXT SCREEN  NEXT SCREEN  NEXT SCREEN 
 * 
 * NEXT SCREEN  NEXT SCREEN  NEXT SCREEN 
 * 
 * NEXT SCREEN  NEXT SCREEN  NEXT SCREEN 
 * 
 */


function ContactUsScreen({ navigation }: { navigation: any}){
  
  // Variables 
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={styles.banner}>

        <View>
          <View style={styles.row}>
            <Image 
              style={styles.logo}
              src={'https://reactnative.dev/img/tiny_logo.png'}
            />

            <View style={styles.headingContainer}>
              <Text style={styles.heading}>
                Empowering the nation
              </Text>
              <Text style={styles.heading}>
                Slogan
              </Text>
            </View>
            
          </View>
        </View>
        
        <Modal 
          animationType='fade'
          visible={modalVisible}
          transparent={true}
        >
        <View>
          <View style={styles.bannerPopup}>
            <View style={styles.row}>
            <Image 
              style={styles.logo}
              src={'https://reactnative.dev/img/tiny_logo.png'}
            />

              </View>

            <TouchableOpacity style={styles.buttonOn} onPress={()=> {setModalVisible(false)}}> 
            
            </TouchableOpacity>


          {/* Dropdown menu page links */}
          </View>
            
            <View style={styles.linkContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('CourseTypes')}>
                <Text>Course Types</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixMonthCourses')}>
                <Text>Six Month Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixWeekCourses')}>
                <Text>Six Week Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
                <Text>Contact Us</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Bookings')}>
                <Text>Bookings</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Text>Cart</Text>
              </TouchableOpacity>

          </View>

          </View>
        </Modal>
        <TouchableOpacity style={styles.buttonOff} onPress={() => setModalVisible(true)}> 
          
        </TouchableOpacity>
      </View>




      <View style={styles.scrollContainer}>

        <ScrollView style={styles.scroll}>

        <View style={modalVisible ? styles.opacityOverlayOn : styles.opacityOverlayOff} >
          
        </View>
        
          <Text style={styles.paragraph}>Contact Us</Text>


          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />

          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />

          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />
          
          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />

          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />

          <Text style={styles.paragraph}>Or gladly visit our facilities </Text>

          <Text style={styles.paragraph}>Address 1</Text>
          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />

          <Text style={styles.paragraph}>Address 2</Text>
          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />

          <Text style={styles.paragraph}>Address 3</Text>
          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />
        </ScrollView>
      </View>
    </View>
  );
};


/**
 * 
 * NEXT SCREEN  NEXT SCREEN  NEXT SCREEN 
 * 
 * NEXT SCREEN  NEXT SCREEN  NEXT SCREEN 
 * 
 * NEXT SCREEN  NEXT SCREEN  NEXT SCREEN 
 * 
 */


function BookingsScreen({ navigation }: { navigation: any}){
  
  // Variables 
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={styles.banner}>

        <View>
          <View style={styles.row}>
            <Image 
              style={styles.logo}
              src={'https://reactnative.dev/img/tiny_logo.png'}
            />

            <View style={styles.headingContainer}>
              <Text style={styles.heading}>
                Empowering the nation
              </Text>
              <Text style={styles.heading}>
                Slogan
              </Text>
            </View>
            
          </View>
        </View>
        
        <Modal 
          animationType='fade'
          visible={modalVisible}
          transparent={true}
        >
        <View>
          <View style={styles.bannerPopup}>
            <View style={styles.row}>
            <Image 
              style={styles.logo}
              src={'https://reactnative.dev/img/tiny_logo.png'}
            />

              </View>

            <TouchableOpacity style={styles.buttonOn} onPress={()=> {setModalVisible(false)}}> 
            
            </TouchableOpacity>


          {/* Dropdown menu page links */}
          </View>
            
            <View style={styles.linkContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('CourseTypes')}>
                <Text>Course Types</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixMonthCourses')}>
                <Text>Six Month Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixWeekCourses')}>
                <Text>Six Week Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
                <Text>Contact Us</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Bookings')}>
                <Text>Bookings</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Text>Cart</Text>
              </TouchableOpacity>

          </View>

          </View>
        </Modal>
        <TouchableOpacity style={styles.buttonOff} onPress={() => setModalVisible(true)}> 
          
        </TouchableOpacity>
      </View>




      <View style={styles.scrollContainer}>

        <ScrollView style={styles.scroll}>

        <View style={modalVisible ? styles.opacityOverlayOn : styles.opacityOverlayOff} >
          
        </View>
        
          <Text style={styles.paragraph}>Contact Us</Text>


          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />

          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />

          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />
          
          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />

          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />

          <Text style={styles.paragraph}>Or gladly visit our facilities </Text>

          <Text style={styles.paragraph}>Address 1</Text>
          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />

          <Text style={styles.paragraph}>Address 2</Text>
          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />

          <Text style={styles.paragraph}>Address 3</Text>
          <Image 
            style={styles.logo}
            src={'https://reactnative.dev/img/tiny_logo.png'}
          />
        </ScrollView>
      </View>
    </View>
  );
};


/**
 * 
 * NEXT SCREEN  NEXT SCREEN  NEXT SCREEN 
 * 
 * NEXT SCREEN  NEXT SCREEN  NEXT SCREEN 
 * 
 * NEXT SCREEN  NEXT SCREEN  NEXT SCREEN 
 * 
 */


function CartScreen({ navigation }: { navigation: any}){
  
  // Variables 
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={styles.banner}>

        <View>
          <View style={styles.row}>
            <Image 
              style={styles.logo}
              src={'https://reactnative.dev/img/tiny_logo.png'}
            />

            <View style={styles.headingContainer}>
              <Text style={styles.heading}>
                Empowering the nation
              </Text>
              <Text style={styles.heading}>
                Slogan
              </Text>
            </View>
            
          </View>
        </View>
        
        <Modal 
          animationType='fade'
          visible={modalVisible}
          transparent={true}
        >
        <View>
          <View style={styles.bannerPopup}>
            <View style={styles.row}>
            <Image 
              style={styles.logo}
              src={'https://reactnative.dev/img/tiny_logo.png'}
            />

              </View>

            <TouchableOpacity style={styles.buttonOn} onPress={()=> {setModalVisible(false)}}> 
            
            </TouchableOpacity>


          {/* Dropdown menu page links */}
          </View>
            
            <View style={styles.linkContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('CourseTypes')}>
                <Text>Course Types</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixMonthCourses')}>
                <Text>Six Month Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixWeekCourses')}>
                <Text>Six Week Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
                <Text>Contact Us</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Bookings')}>
                <Text>Bookings</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Text>Cart</Text>
              </TouchableOpacity>

          </View>

          </View>
        </Modal>
        <TouchableOpacity style={styles.buttonOff} onPress={() => setModalVisible(true)}> 
          
        </TouchableOpacity>
      </View>

      <View>
        <View style={modalVisible ? styles.opacityOverlayOn : styles.opacityOverlayOff} >
          
        </View>

        <Text style={styles.paragraph}>
        Empowering the nation has been providing learning opportunities since 2022 and remains dedicated in the teaching and empowerment of our nation. We offer a variety of courses to suit the needs of
        each prospective student, whether learning how to sew or basic medical training, we are certain there is a course for you.
        </Text>

      </View>
    </View>
  );
};


// App Entry point
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='CourseTypes' component={CourseTypeScreen} />
        <Stack.Screen name='SixMonthCourses' component={SixMonthCoursesScreen} /> 
        <Stack.Screen name='SixWeekCourses' component={SixWeekCoursesScreen} />
        <Stack.Screen name='ContactUs' component={ContactUsScreen} />
        <Stack.Screen name='Bookings' component={BookingsScreen} />
        <Stack.Screen name='Cart' component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 1,
    padding: 2,
    backgroundColor: 'ghostwhite',

  },
  paragraph: {
    fontSize: 20,
    fontWeight: 'semibold',
    padding: 15,
    backgroundColor: 'ghostwhite',
    margin: 20
  },
  buttonOff: {
    backgroundColor: 'black',
    width: "10%",
    height: "10%",
    padding: 50,
  },
  buttonOn: {
    backgroundColor: 'gray',
    width: "10%",
    height: "10%",
    padding: 50,
    top: "56%",
  },
  linkContainer: {
    backgroundColor: 'lightgray',
    width: '35%',
    padding: 25,
    left: "65%",
    justifyContent: 'space-evenly',
    alignContent: 'space-evenly',
    top: "15%",
  },
  banner: {
    backgroundColor: 'ghostwhite',
    width: '100%',
    padding: 20,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    
  },
  bannerPopup: {
    backgroundColor: 'rgba(52, 52, 52, 0)',
    width: '100%',
    padding: 20,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    
  },
  opacityOverlayOn: {
    flex: 1,
    width: '100%',
    height: undefined,
    top: '0%',
    aspectRatio: 0.01,
    position: 'absolute',
    backgroundColor: "rgba(52, 52, 52, 0.5)",
  },
  opacityOverlayOff: {
    flex: 1,
    width: '100%',
    height: undefined,
    top: '0%',
    aspectRatio: 0.01,
    position: 'absolute',
    backgroundColor: "rgba(52, 52, 52, 0)",
  },
  logo: {
    width: "100px",
    height: "100px",
  },
  headingContainer: {
    alignContent: 'space-evenly',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,
    backgroundColor: 'lightgray'
  },
  row:{
    flex: 1,
    flexDirection: 'row',
  },
  scrollContainer:{
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 325,
  },
  scroll: {

  },
});
