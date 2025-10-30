import { useState, useRef, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView, StatusBar, TextInput, Linking} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { reloadAppAsync } from 'expo';

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

// Variables
const bookingsArraySixWeeks: string[] = [];
const bookingsArraySixMonths: string[] = [];
const bookingsArraySixMonthsPrice: number[] = [0, 0, 0, 0];
const bookingsArraySixWeeksPrice: number[] = [0, 0, 0];
const detailsArray = [];


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
              source={require("./assets/Logo.png")}
            />

            <View style={styles.headingContainer}>
              <Text style={styles.heading}>
                Empowering the nation
              </Text>
              <Text style={styles.heading}>
                Stronger together {"\n"}we can rise
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
            </View>

            <TouchableOpacity  onPress={()=> {setModalVisible(false)}}> 
              <Image source={require("./assets/dropdown menu icon on.png")} style={styles.buttonOn}></Image>
            </TouchableOpacity>


          {/* Dropdown menu page links */}
          </View>
            
            <View style={styles.linkContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.tinyLink}>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('CourseTypes')}>
                <Text style={styles.tinyLink}>Course Types</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixMonthCourses')}>
                <Text style={styles.tinyLink}>Six Month Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixWeekCourses')}>
                <Text style={styles.tinyLink}>Six Week Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
                <Text style={styles.tinyLink}>Contact Us</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Bookings')}>
                <Text style={styles.tinyLink}>Bookings</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Text style={styles.tinyLink}>Cart</Text>
              </TouchableOpacity>

          </View>

          </View>
        </Modal>
        <TouchableOpacity onPress={() => {setModalVisible(true)}}> 
          <Image source={require("./assets/dropdown menu icon off.png")} style={styles.buttonOff}></Image>
        </TouchableOpacity>
      </View>


      {/* Page content */}
      <View>
       
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.paragraph}>
          Empowering the nation has been providing learning opportunities since 2022 and remains dedicated in the teaching and empowerment of our nation. We offer a variety of courses to suit the needs of
          each prospective student, whether learning how to sew or basic medical training, we are certain there is a course for you.
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('CourseTypes')}>
            <Text style={styles.button}>To Courses</Text>
          </TouchableOpacity>

          <Image source={require("./assets/HomeImage.png")}></Image>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Empowering the Nation Copyright 2022-2025.</Text>
            <Text style={styles.footerText}>v1.0</Text>
          </View>

          <View style={modalVisible ? styles.opacityOverlayOn : styles.opacityOverlayOff} ></View>
          
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
              source={require("./assets/Logo.png")}
            />

            <View style={styles.headingContainer}>
              <Text style={styles.heading}>
                Empowering the nation
              </Text>
              <Text style={styles.heading}>
                Stronger together {"\n"}we can rise
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
            </View>

            <TouchableOpacity  onPress={()=> {setModalVisible(false)}}> 
              <Image source={require("./assets/dropdown menu icon on.png")} style={styles.buttonOn}></Image>
            </TouchableOpacity>


          {/* Dropdown menu page links */}
          </View>
            
            <View style={styles.linkContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.tinyLink}>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('CourseTypes')}>
                <Text style={styles.tinyLink}>Course Types</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixMonthCourses')}>
                <Text style={styles.tinyLink}>Six Month Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixWeekCourses')}>
                <Text style={styles.tinyLink}>Six Week Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
                <Text style={styles.tinyLink}>Contact Us</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Bookings')}>
                <Text style={styles.tinyLink}>Bookings</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Text style={styles.tinyLink}>Cart</Text>
              </TouchableOpacity>

          </View>

          </View>
        </Modal>
        <TouchableOpacity  onPress={()=> {setModalVisible(true)}}> 
              <Image source={require("./assets/dropdown menu icon off.png")} style={styles.buttonOff}></Image>
            </TouchableOpacity>
      </View>


      {/* Page content */}

      <View style={styles.scrollContainer}>

        <ScrollView>
          <View style={styles.container}>

            <Text style={styles.subHeading}>
              Six week courses
            </Text>
            <Text style={styles.smallParagraph}>
              Below you will find a list of the six week courses that we provide here at Empowering the Nation. Should you be interested in any of them please press your desired courses button below.
            </Text>
            <View style={styles.courseContainer}></View>
            
            <TouchableOpacity onPress={() => navigation.navigate('SixWeekCourses')}>
              <Text style={styles.button}>Child Minding</Text>
            </TouchableOpacity>

            <Text style={styles.smallParagraph}>To provide basic child and baby care.</Text>
            <View style={styles.space}></View>
            

            <TouchableOpacity onPress={() => navigation.navigate('SixWeekCourses')}>
              <Text style={styles.button}>Cooking</Text>
            </TouchableOpacity>

            <Text style={styles.smallParagraph}>To prepare and cook nutritious family meals.</Text>
            <View style={styles.space}></View>

            <TouchableOpacity onPress={() => navigation.navigate('SixWeekCourses')}>
              <Text style={styles.button}>Garden Maintenance</Text>
            </TouchableOpacity>

            <Text style={styles.smallParagraph}>To provide basic knowledge of watering, pruning and planting in a domestic garden.</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.subHeading}>
              Six Month courses
            </Text>

            <Text style={styles.smallParagraph}>
              Below you will find a list of the six month courses that we provide here at Empowering the Nation. Should you be interested in any of them please press your desired courses button below.
            </Text>
            <View style={styles.courseContainer}></View>

            <TouchableOpacity onPress={() => navigation.navigate('SixMonthCourses')}>
              <Text style={styles.button}>First Aid</Text>
            </TouchableOpacity>

            <Text style={styles.smallParagraph}>To provide first aid awareness and basic life support.</Text>
            <View style={styles.space}></View>

            <TouchableOpacity onPress={() => navigation.navigate('SixMonthCourses')}>
              <Text style={styles.button}>Sewing</Text>
            </TouchableOpacity>

            <Text style={styles.smallParagraph}>To provide alterations and new garment tailoring services.</Text>
            <View style={styles.space}></View>
            
            <TouchableOpacity onPress={() => navigation.navigate('SixMonthCourses')}>
              <Text style={styles.button}>Landscaping</Text>
            </TouchableOpacity>

            <Text style={styles.smallParagraph}>To provide landscaping services for new and established gardens.</Text>
            <View style={styles.space}></View>
            
            <TouchableOpacity onPress={() => navigation.navigate('SixMonthCourses')}>
              <Text style={styles.button}>Life Skills</Text>
            </TouchableOpacity>

            <Text style={styles.smallParagraph}>To provide skills to navigate basic life necessities.</Text>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Empowering the Nation Copyright 2022-2025.</Text>
            <Text style={styles.footerText}>v1.0</Text>
          </View>
        
          {/* Screen overlay */}
          <View style={modalVisible ? styles.opacityOverlayOn : styles.opacityOverlayOff} > 
          </View>

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
  const [coursePopup, setCoursePopup] = useState(false);
  const [recentCourse, setRecentCourse] = useState<string>();

  return (
    <View>
      <View style={styles.banner}>

        <View>
          <View style={styles.row}>
            <Image 
              style={styles.logo}
              source={require("./assets/Logo.png")}
            />

            <View style={styles.headingContainer}>
              <Text style={styles.heading}>
                Empowering the nation
              </Text>
              <Text style={styles.heading}>
                Stronger together {"\n"}we can rise
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
              </View>

            <TouchableOpacity  onPress={()=> {setModalVisible(false)}}> 
              <Image source={require("./assets/dropdown menu icon on.png")} style={styles.buttonOn}></Image>
            </TouchableOpacity>


          {/* Dropdown menu page links */}
          </View>
            
            <View style={styles.linkContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.tinyLink}>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('CourseTypes')}>
                <Text style={styles.tinyLink}>Course Types</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixMonthCourses')}>
                <Text style={styles.tinyLink}>Six Month Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixWeekCourses')}>
                <Text style={styles.tinyLink}>Six Week Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
                <Text style={styles.tinyLink}>Contact Us</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Bookings')}>
                <Text style={styles.tinyLink}>Bookings</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Text style={styles.tinyLink}>Cart</Text>
              </TouchableOpacity>

          </View>

          </View>
        </Modal>
        <TouchableOpacity  onPress={()=> {setModalVisible(true)}}> 
          <Image source={require("./assets/dropdown menu icon off.png")} style={styles.buttonOff}></Image>
        </TouchableOpacity>
      </View>


      {/* Page content */}
      {/* popup showing the user what course they have selected */}
      <Modal
        animationType='fade'
        visible={coursePopup}
        transparent={true}
      >
        <View style={styles.popup}>
          <Text style={styles.smallParagraph}>{recentCourse} added too cart.</Text>
          <Text style={styles.smallParagraph}>Selected courses: {bookingsArraySixMonths[0]} {bookingsArraySixMonths[1]} {bookingsArraySixMonths[2]} {bookingsArraySixMonths[3]} {bookingsArraySixWeeks[0]} {bookingsArraySixWeeks[1]} {bookingsArraySixWeeks[2]}</Text>
          <TouchableOpacity onPress={() => setCoursePopup(false)}>
            <Text style={styles.button}>Dismiss</Text>
          </TouchableOpacity>
        </View>
      </Modal>


      <View style={styles.scrollContainer}>

        <ScrollView>
        
          <View style={styles.courseContainer}>
            <Text style={styles.smallHeading}>First Aid</Text>
            <Text style={styles.paragraph}>Fees: R1500</Text>
            <Text style={styles.smallParagraph}>A beginner course on in the field medical care {"\n"}{"\n"} Content covered: {"\n"} {'\u2B24'} Wounds and Bleeding {"\n"} {'\u2B24'} Burns and Fractures {"\n"} {'\u2B24'} Emergency scene managment {"\n"} {'\u2B24'} Cardio-Pulmonary Resuscitation (CPR) {"\n"} {'\u2B24'} Respiratory distress e.g., Choking, blocked airway </Text>
            <TouchableOpacity onPress={() => {bookingsArraySixMonths[0] = "First Aid", bookingsArraySixMonths[4] = "R1500", bookingsArraySixMonthsPrice[0] = 1500, setCoursePopup(true), setRecentCourse("First Aid")}} >
              <Image
                style={styles.courseImage}
                source={require("./assets/First aid.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {bookingsArraySixMonths[0] = "First Aid", bookingsArraySixMonths[4] = "R1500", bookingsArraySixMonthsPrice[0] = 1500, setCoursePopup(true), setRecentCourse("First Aid")}}>
              <Text style={styles.button}>Apply</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.courseContainer}>
            <Text style={styles.smallHeading}>Sewing</Text>
            <Text style={styles.paragraph}>Fees: R1500</Text>
            <Text style={styles.smallParagraph}>A full course in the art of sewing, stitching and cloth repair {"\n"}{"\n"} Content covered: {"\n"} {'\u2B24'} Types of stitches {"\n"} {'\u2B24'} Threading a sewing machine {"\n"} {'\u2B24'} Sewing buttons, zips, hems and seams {"\n"} {'\u2B24'} Alterations {"\n"} {'\u2B24'} Designing and sewing new garments </Text>
            <TouchableOpacity onPress={() => {bookingsArraySixMonths[1] = "Sewing", bookingsArraySixMonths[5] = "R1500", bookingsArraySixMonthsPrice[1] = 1500, setCoursePopup(true), setRecentCourse("Sewing")}}>
              <Image
                style={styles.courseImage}
                source={require("./assets/Sewing.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {bookingsArraySixMonths[1] = "Sewing", bookingsArraySixMonths[5] = "R1500", bookingsArraySixMonthsPrice[1] = 1500, setCoursePopup(true), setRecentCourse("Sewing")}}>
                <Text style={styles.button}>Apply</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.courseContainer}>
            <Text style={styles.smallHeading}>Landscaping</Text>
            <Text style={styles.paragraph}>Fees: R1500</Text>
            <Text style={styles.smallParagraph}>A crashcourse in ascetics and outdoor engineering {"\n"}{"\n"} Content covered: {"\n"} {'\u2B24'} Indigenous and exotic plants and trees {"\n"} {'\u2B24'} Fixed structures (Fountains, Statues, Benches, Tables, Built-in braai) {"\n"} {'\u2B24'} Balancing of plants and trees in a garden {"\n"} {'\u2B24'} Aesthetics of plant shapes and colors {"\n"} {'\u2B24'} Garden layout </Text>
            <TouchableOpacity onPress={() => {bookingsArraySixMonths[2] = "Landscaping", bookingsArraySixMonths[6] = "R1500", bookingsArraySixMonthsPrice[2] = 1500, setCoursePopup(true), setRecentCourse("Landscaping")}}>
              <Image   
                style={styles.courseImage}
                source={require("./assets/Landscaping.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {bookingsArraySixMonths[2] = "Landscaping", bookingsArraySixMonths[6] = "R1500", bookingsArraySixMonthsPrice[2] = 1500, setCoursePopup(true), setRecentCourse("Landscaping")}}>
              <Text style={styles.button}>Apply</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.courseContainer}>
            <Text style={styles.smallHeading}>Life Skills</Text>
            <Text style={styles.paragraph}>Fees: R1500</Text>
            <Text style={styles.smallParagraph}>The fundamentals of personal finance, job interviews and conversation {"\n"}{"\n"} Content covered: {"\n"} {'\u2B24'} Opening a bank account {"\n"} {'\u2B24'} Basic labor law (know your rights) {"\n"} {'\u2B24'} Basic reading and Writing literacy {"\n"} {'\u2B24'} Basic numeric literacy </Text>
            <TouchableOpacity onPress={() => {bookingsArraySixMonths[3] = "Life Skills", bookingsArraySixMonths[7] = "R1500", bookingsArraySixMonthsPrice[3] = 1500, setCoursePopup(true), setRecentCourse("Life Skills")}}>
              <Image 
                style={styles.courseImage}
                source={require("./assets/Life skills.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {bookingsArraySixMonths[3] = "Life Skills", bookingsArraySixMonths[7] = "R1500", bookingsArraySixMonthsPrice[3] = 1500, setCoursePopup(true), setRecentCourse("Life Skills")}}>
              <Text style={styles.button}>Apply</Text>
            </TouchableOpacity>
          </View>
          

          <TouchableOpacity onPress={() => navigation.navigate('Bookings')}>
            <Text style={styles.button}>Bookings</Text>
          </TouchableOpacity>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Empowering the Nation Copyright 2022-2025.</Text>
            <Text style={styles.footerText}>v1.0</Text>
          </View>

          {/* Screen overlay */}
          <View style={modalVisible || coursePopup ? styles.opacityOverlayOn : styles.opacityOverlayOff} > 
          </View>

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
  const [coursePopup, setCoursePopup] = useState(false);
  const [recentCourse, setRecentCourse] = useState<string>();

  return (
    <View>
      <View style={styles.banner}>

        <View>
          <View style={styles.row}>
            <Image 
              style={styles.logo}
              source={require("./assets/Logo.png")}
            />

            <View style={styles.headingContainer}>
              <Text style={styles.heading}>
                Empowering the nation
              </Text>
              <Text style={styles.heading}>
                Stronger together {"\n"}we can rise
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
            </View>

            <TouchableOpacity  onPress={()=> {setModalVisible(false)}}> 
              <Image source={require("./assets/dropdown menu icon on.png")} style={styles.buttonOn}></Image>
            </TouchableOpacity>


          {/* Dropdown menu page links */}
          </View>
            
            <View style={styles.linkContainer}>
              <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                <Text style={styles.tinyLink}>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {navigation.navigate('CourseTypes')}}>
                <Text style={styles.tinyLink}>Course Types</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {navigation.navigate('SixMonthCourses')}}>
                <Text style={styles.tinyLink}>Six Month Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {navigation.navigate('SixWeekCourses')}}>
                <Text style={styles.tinyLink}>Six Week Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {navigation.navigate('ContactUs')}}>
                <Text style={styles.tinyLink}>Contact Us</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => {navigation.navigate('Bookings')}}>
                <Text style={styles.tinyLink}>Bookings</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => {navigation.navigate('Cart')}}>
                <Text style={styles.tinyLink}>Cart</Text>
              </TouchableOpacity>

          </View>

          </View>
        </Modal>
        <TouchableOpacity  onPress={()=> {setModalVisible(true)}}> 
          <Image source={require("./assets/dropdown menu icon off.png")} style={styles.buttonOff}></Image>
        </TouchableOpacity>
      </View>


      {/* Page content */}
      {/* popup showing the user what course they have selected */}
      <Modal
        animationType='fade'
        visible={coursePopup}
        transparent={true}
      >
        <View style={styles.popup}>
          <Text style={styles.smallParagraph}>{recentCourse} added too cart.</Text>
          <Text style={styles.smallParagraph}>Selected courses: {bookingsArraySixMonths[0]} {bookingsArraySixMonths[1]} {bookingsArraySixMonths[2]} {bookingsArraySixMonths[3]} {bookingsArraySixWeeks[0]} {bookingsArraySixWeeks[1]} {bookingsArraySixWeeks[2]}</Text>
          <TouchableOpacity onPress={() => setCoursePopup(false)}>
            <Text style={styles.button}>Dismiss</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View>
        
        <View style={styles.scrollContainer}>
          <ScrollView>

          <View style={styles.courseContainer}>
            <Text style={styles.smallHeading}>Child Minding</Text>
            <Text style={styles.paragraph}>Fees: R750</Text>
            <Text style={styles.smallParagraph}>A crash course on how to take care of a child {"\n"}{"\n"} Content covered: {"\n"} {'\u2B24'} Birth to six-month old baby needs {"\n"} {'\u2B24'} Seven-month to one year old needs {"\n"} {'\u2B24'} Toddler needs {"\n"} {'\u2B24'} Educational toys </Text>
            <TouchableOpacity onPress={() => {bookingsArraySixWeeks[0] = 'Child Minding', bookingsArraySixWeeks[3] = "R750", bookingsArraySixWeeksPrice[0] = 750, setCoursePopup(true), setRecentCourse("Child Minding")}} style={styles.courseImage}>
              <Image
                source={require("./assets/Child minding.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {bookingsArraySixWeeks[0] = 'Child Minding', bookingsArraySixWeeks[3] = "R750", bookingsArraySixWeeksPrice[0] = 750, setCoursePopup(true), setRecentCourse("Child Minding")}}>
              <Text style={styles.button}>Apply</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.courseContainer}>
            <Text style={styles.smallHeading}>Cooking</Text>
            <Text style={styles.paragraph}>Fees: R750</Text>
            <Text style={styles.smallParagraph}>Learn how to create a variety of dishes from a plethora of culture and the basics of cooking. {"\n"}{"\n"} Content covered: {"\n"} {'\u2B24'} Nutritional requirements for a healthy body {"\n"} {'\u2B24'} Types of protein, carbohydrates and vegetables {"\n"} {'\u2B24'} Planning meals {"\n"} {'\u2B24'} Tasty and nutritious recipes {"\n"} {'\u2B24'} Preparation and cooking of meals </Text>
            <TouchableOpacity onPress={() => {bookingsArraySixWeeks[1] = 'Cooking', bookingsArraySixWeeks[4] = "R750", bookingsArraySixWeeksPrice[1] = 750, setCoursePopup(true), setRecentCourse("Cooking")}}>
              <Image 
                style={styles.courseImage}
                source={require("./assets/Cooking.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {bookingsArraySixWeeks[1] = 'Cooking', bookingsArraySixWeeks[4] = "R750", bookingsArraySixWeeksPrice[1] = 750, setCoursePopup(true), setRecentCourse("Cooking")}}>
              <Text style={styles.button}>Apply</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.courseContainer}>
            <Text style={styles.smallHeading}>Garden Maintenance</Text>
            <Text style={styles.paragraph}>Fees: R750</Text>
            <Text style={styles.smallParagraph}>A course on the basics of gardening, agriculture and garden ascetics {"\n"}{"\n"} Content covered: {"\n"} {'\u2B24'} Water restrictions and the watering requirements of indigenous and exotic plants {"\n"} {'\u2B24'} Pruning and propagation of plants {"\n"} {'\u2B24'} Planting techniques for different plant types </Text>
            <TouchableOpacity onPress={() => {bookingsArraySixWeeks[2] = 'Garden Maintenance', bookingsArraySixWeeks[5] = "R750", bookingsArraySixWeeksPrice[2] = 750, setCoursePopup(true), setRecentCourse("Garden Maintenance")}}>
              <Image 
                style={styles.courseImage}
                source={require("./assets/Garden maintenance.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {bookingsArraySixWeeks[2] = 'Garden Maintenance', bookingsArraySixWeeks[5] = "R750", bookingsArraySixWeeksPrice[2] = 750, setCoursePopup(true), setRecentCourse("Garden Maintenance")}}>
              <Text style={styles.button}>Apply</Text>
            </TouchableOpacity>
          </View>
          

          <TouchableOpacity onPress={() => navigation.navigate('Bookings')}>
            <Text style={styles.button}>Bookings</Text>
          </TouchableOpacity>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Empowering the Nation Copyright 2022-2025.</Text>
            <Text style={styles.footerText}>v1.0</Text>
          </View>

          {/* Screen overlay */}
          <View style={modalVisible || coursePopup ? styles.opacityOverlayOn : styles.opacityOverlayOff} > 
          </View>

          </ScrollView>
        </View>
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
              source={require("./assets/Logo.png")}
            />

            <View style={styles.headingContainer}>
              <Text style={styles.heading}>
                Empowering the nation
              </Text>
              <Text style={styles.heading}>
                Stronger together {"\n"}we can rise
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
            </View>

            <TouchableOpacity  onPress={()=> {setModalVisible(false)}}> 
              <Image source={require("./assets/dropdown menu icon on.png")} style={styles.buttonOn}></Image>
            </TouchableOpacity>


          {/* Dropdown menu page links */}
          </View>
            
            <View style={styles.linkContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.tinyLink}>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('CourseTypes')}>
                <Text style={styles.tinyLink}>Course Types</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixMonthCourses')}>
                <Text style={styles.tinyLink}>Six Month Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixWeekCourses')}>
                <Text style={styles.tinyLink}>Six Week Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
                <Text style={styles.tinyLink}>Contact Us</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Bookings')}>
                <Text style={styles.tinyLink}>Bookings</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Text style={styles.tinyLink}>Cart</Text>
              </TouchableOpacity>

          </View>

          </View>
        </Modal>
        <TouchableOpacity  onPress={()=> {setModalVisible(true)}}> 
          <Image source={require("./assets/dropdown menu icon off.png")} style={styles.buttonOff}></Image>
        </TouchableOpacity>
      </View>

    {/* Page content */}

    <View style={styles.scrollContainer}>
      <ScrollView>
        <View style={styles.container}>

          
          
            <Text style={styles.paragraph}>Contact Us</Text>

            <View style={styles.rowLeft}>
              <TouchableOpacity onPress={() => Linking.openURL("tel:+27677736119")}>
                <Image 
                  source={require("./assets/whatsapp icon.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL("mailto::empoweringthenation085@gmail.com")}>
                <Image 
                  source={require("./assets/email icon.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL("https://mtouch.facebook.com/empowering.the.nation.2025/")}>
                <Image 
                  
                  source={require("./assets/facebook icon.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.rowLeft}>  
              <TouchableOpacity onPress={() => Linking.openURL("https://x.com/EThenation")}>
                <Image 
                  source={require("./assets/twitter icon.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/emp_oweringthenation/")}>
                <Image 
                  source={require("./assets/instagram icon.png")}
                />
              </TouchableOpacity>

            </View>

            <View style={styles.space}></View>
            <Text style={styles.paragraph}>Or gladly visit our facilities </Text>

            <Text style={styles.paragraph}>Parkview, Randburg, 2122</Text>
            <TouchableOpacity style={styles.courseContainer} onPress={() => Linking.openURL("https://www.google.com/maps/place/Zoo+Lake/@-26.156992,28.029751,19z/data=!4m6!3m5!1s0x1e950c878c1ac687:0xe69330146226fd9d!8m2!3d-26.1581653!4d28.0284892!16s%2Fm%2F0dln7n5?hl=en&entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D")}>
              <Image 
                style={styles.mapImage}
                source={require("./assets/location1.png")}
              />
            </TouchableOpacity>

            <Text style={styles.paragraph}>Olifants Rd, Emmarentia, Randburg, 2195</Text>
            <TouchableOpacity style={styles.courseContainer} onPress={() => Linking.openURL("https://www.google.com/maps/place/Johannesburg+Botanical+Gardens/@-26.153751,28.000225,16z/data=!4m6!3m5!1s0x1e950b76ab1ea7a7:0xdd1dfd286851aa08!8m2!3d-26.1537512!4d28.0002253!16s%2Fm%2F04n2y2m?hl=en&entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D")}>
              <Image 
                style={styles.mapImage}
                source={require("./assets/location2.png")}
              />
            </TouchableOpacity>

            <Text style={styles.paragraph}>Cnr R55 &, Allandale Rd, Kyalami, Midrand, 1684</Text>
            <TouchableOpacity style={styles.courseContainer} onPress={() => Linking.openURL("https://www.google.com/maps/place/Kyalami+Grand+Prix+Circuit/@-25.999154,28.06889,16z/data=!4m6!3m5!1s0x1e9571a233f8fb5d:0xb5d88a84968bc933!8m2!3d-25.999154!4d28.0688899!16zL20vMDR0cWpk?hl=en&entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D")}>
              <Image 
                style={styles.mapImage}
                source={require("./assets/location3.png")}
              />
            </TouchableOpacity>

          </View>

          {/* Screen overlay */}
          <View style={modalVisible ? styles.opacityOverlayOn : styles.opacityOverlayOff} > 
          </View>

          {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Empowering the Nation Copyright 2022-2025.</Text>
              <Text style={styles.footerText}>v1.0</Text>
            </View>

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
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [popupVisible, setPopupVisible] = useState(false);


  return (
    <View>
      <View style={styles.banner}>

        <View>
          <View style={styles.row}>
            <Image 
              style={styles.logo}
              source={require("./assets/Logo.png")}
            />

            <View style={styles.headingContainer}>
              <Text style={styles.heading}>
                Empowering the nation
              </Text>
              <Text style={styles.heading}>
                Stronger together {"\n"}we can rise
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
            </View>

            <TouchableOpacity  onPress={()=> {setModalVisible(false)}}> 
              <Image source={require("./assets/dropdown menu icon on.png")} style={styles.buttonOn}></Image>
            </TouchableOpacity>


          {/* Dropdown menu page links */}
          </View>
            
            <View style={styles.linkContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.tinyLink}>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('CourseTypes')}>
                <Text style={styles.tinyLink}>Course Types</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixMonthCourses')}>
                <Text style={styles.tinyLink}>Six Month Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixWeekCourses')}>
                <Text style={styles.tinyLink}>Six Week Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
                <Text style={styles.tinyLink}>Contact Us</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Bookings')}>
                <Text style={styles.tinyLink}>Bookings</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Text style={styles.tinyLink}>Cart</Text>
              </TouchableOpacity>

          </View>

          </View>
        </Modal>
        <TouchableOpacity  onPress={()=> {setModalVisible(true)}}> 
          <Image source={require("./assets/dropdown menu icon off.png")} style={styles.buttonOff}></Image>
        </TouchableOpacity>
      </View>


      {/* Page content */}

      <View style={styles.scrollContainer}>

        <Modal
          animationType='fade'
          visible={popupVisible}
          transparent={true}
        >
          <View style={styles.popup}>
            <Text style={styles.paragraph}>Course Sucsessfully removed.</Text>
          </View>
        </Modal>

        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.smallParagraph}>Please enter your personal details within the box below and that the courses displayed within the bookings section is accurate.</Text>
            
          </View>

          <View style={styles.container}>
            <Text style={styles.smallHeading}>Personal Details</Text>

            <TextInput
              style={styles.paragraph}
              placeholder='First Name:'
              value={firstName}
              onChangeText={setFirstName}
            />

            <TextInput
              style={styles.paragraph}
              placeholder='Last Name:'
              value={lastName}
              onChangeText={setLastName}
            />

            <TextInput
              style={styles.paragraph}
              placeholder='Email:'
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.courseContainer}></View>

          <View style={styles.container}>
            <Text style={styles.smallHeading}>Chosen Courses</Text>
            <Text style={styles.paragraph}>Six Month Courses</Text>
            <Text style={styles.smallParagraph}>

              <View style={styles.row}>
                <TouchableOpacity onPress={() => {bookingsArraySixMonths[0] = "", bookingsArraySixMonths[4] = "", bookingsArraySixMonthsPrice[0] = 0, setPopupVisible(true), window.setTimeout(() => {setPopupVisible(false)}, 1000)}}>
                  <Text style={styles.button}>X</Text>
                </TouchableOpacity>
                <Text style={styles.courseTitle }>{bookingsArraySixMonths[0]} {bookingsArraySixMonths[4]}</Text>
              </View> 
              {"\n"}
              
              <View style={styles.row}>
                <TouchableOpacity onPress={() => {bookingsArraySixMonths[1] = "", bookingsArraySixMonths[5] = "", bookingsArraySixMonthsPrice[1] = 0, setPopupVisible(true), window.setTimeout(() => {setPopupVisible(false)}, 1000)}}>
                  <Text style={styles.button}>X</Text>
                </TouchableOpacity>
                <Text style={styles.courseTitle }>{bookingsArraySixMonths[1]} {bookingsArraySixMonths[5]}</Text>
              </View>
              {"\n"}

              <View style={styles.row}>
                <TouchableOpacity onPress={() => {bookingsArraySixMonths[2] = "", bookingsArraySixMonths[6] = "", bookingsArraySixMonthsPrice[2] = 0, setPopupVisible(true), window.setTimeout(() => {setPopupVisible(false)}, 1000)}}>
                  <Text style={styles.button}>X</Text>
                </TouchableOpacity>
                <Text style={styles.courseTitle }>{bookingsArraySixMonths[2]} {bookingsArraySixMonths[6]}</Text>
              </View>
              {"\n"}

              <View style={styles.row}>
                <TouchableOpacity onPress={() => {bookingsArraySixMonths[3] = "", bookingsArraySixMonths[7] = "", bookingsArraySixMonthsPrice[3] = 0, setPopupVisible(true), window.setTimeout(() => {setPopupVisible(false)}, 1000)}}>
                  <Text style={styles.button}>X</Text>
                </TouchableOpacity>
                <Text style={styles.courseTitle }>{bookingsArraySixMonths[3]} {bookingsArraySixMonths[7]}</Text>
              </View>
              {"\n"}

            </Text>

            <Text style={styles.paragraph}>Six Week Courses</Text>
            <Text style={styles.smallParagraph}>

              <View style={styles.row}>
                <TouchableOpacity onPress={() => {bookingsArraySixWeeks[0] = "", bookingsArraySixWeeks[3] = "", bookingsArraySixWeeksPrice[0] = 0, setPopupVisible(true), window.setTimeout(() => {setPopupVisible(false)}, 1000)}}>
                  <Text style={styles.button}>X</Text>
                </TouchableOpacity>
                <Text style={styles.courseTitle }>
                  {bookingsArraySixWeeks[0]} {bookingsArraySixWeeks[3]} 
                </Text>
              </View>
              {"\n"}
              
              <View style={styles.row}>
                <TouchableOpacity onPress={() => {bookingsArraySixWeeks[1] = "", bookingsArraySixWeeks[4] = "", bookingsArraySixWeeksPrice[1] = 0, setPopupVisible(true), window.setTimeout(() => {setPopupVisible(false)}, 1000)}}>
                  <Text style={styles.button}>X</Text>
                </TouchableOpacity>
                <Text style={styles.courseTitle }>
                  {bookingsArraySixWeeks[1]} {bookingsArraySixWeeks[4]} 
                </Text>
              </View>
              {"\n"}
              
              <View style={styles.row}>
                <TouchableOpacity onPress={() => {bookingsArraySixWeeks[2] = "", bookingsArraySixWeeks[5] = "", bookingsArraySixWeeksPrice[2] = 0, setPopupVisible(true), window.setTimeout(() => {setPopupVisible(false)}, 1000)}}>
                  <Text style={styles.button}>X</Text>
                </TouchableOpacity>
                <Text  style={styles.courseTitle }>
                  {bookingsArraySixWeeks[2]} {bookingsArraySixWeeks[5]}
                </Text>
              </View>

            </Text>
          </View>
          <View style={styles.courseContainer}></View> 

          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Text style={styles.button}>Submit Details</Text>
          </TouchableOpacity>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Empowering the Nation Copyright 2022-2025.</Text>
            <Text style={styles.footerText}>v1.0</Text>
          </View>

          {/* Screen overlay */}  
          <View style={modalVisible || popupVisible ? styles.opacityOverlayOn : styles.opacityOverlayOff} >
          </View>

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
  const [cartTotal, setCartTotal] = useState<number>(bookingsArraySixMonthsPrice[0] + bookingsArraySixMonthsPrice[1] + bookingsArraySixMonthsPrice[2] + bookingsArraySixMonthsPrice[3] + bookingsArraySixWeeksPrice[0] + bookingsArraySixWeeksPrice[1] + bookingsArraySixWeeksPrice[2]);
  const [discount, setDiscount] = useState<number>(0);
  const [priceTotal, setPriceTotal] = useState<number>(0);
  const [purchaseSuccess, setPurchaseSuccess] = useState<string>("");

  const calculateTotal = () => {
    // 1 course - no discount
    // 2 course - 5% discount
    // 3 course - 10% discount
    // 3< course - 15% discount
    // VAT 15%

    let itemCount = 0

    

    // Check for total number of items in cart 

    for (var i = 0; i < 5; i++) {
      if (bookingsArraySixMonthsPrice[i] > 0){
        itemCount++
      }
    }

    for (var i = 0; i < 4; i++) {
      if (bookingsArraySixWeeksPrice[i] > 0){
        itemCount++
      }
    }

    console.log(itemCount)

    if (itemCount > 1){
      setDiscount(0.05)
    }

    if (itemCount > 2){
      setDiscount(0.1)
    }

    if (itemCount > 3){
      setDiscount(0.15)
    }

    console.log(cartTotal + cartTotal * discount + cartTotal * 0.15)
    
    return (cartTotal + cartTotal * discount + cartTotal * 0.15)
  };

  return (
    <View>
      <View style={styles.banner}>

        <View>
          <View style={styles.row}>
            <Image 
              style={styles.logo}
              source={require("./assets/Logo.png")}
            />

            <View style={styles.headingContainer}>
              <Text style={styles.heading}>
                Empowering the nation
              </Text>
              <Text style={styles.heading}>
                Stronger together {"\n"}we can rise
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
            </View>

            <TouchableOpacity  onPress={()=> {setModalVisible(false)}}> 
              <Image source={require("./assets/dropdown menu icon on.png")} style={styles.buttonOn}></Image>
            </TouchableOpacity>


          {/* Dropdown menu page links */}
          </View>
            
            <View style={styles.linkContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.tinyLink}>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('CourseTypes')}>
                <Text style={styles.tinyLink}>Course Types</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixMonthCourses')}>
                <Text style={styles.tinyLink}>Six Month Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('SixWeekCourses')}>
                <Text style={styles.tinyLink}>Six Week Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
                <Text style={styles.tinyLink}>Contact Us</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Bookings')}>
                <Text style={styles.tinyLink}>Bookings</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Text style={styles.tinyLink}>Cart</Text>
              </TouchableOpacity>

          </View>

          </View>
        </Modal>
        <TouchableOpacity  onPress={()=> {setModalVisible(true)}}> 
          <Image source={require("./assets/dropdown menu icon off.png")} style={styles.buttonOff}></Image>
        </TouchableOpacity>
      </View>




      <View>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.container}>
              <Text style={styles.smallHeading}>Chosen Courses</Text>
              <Text style={styles.paragraph}>Six Month Courses</Text>
              <Text style={styles.smallParagraph}>{bookingsArraySixMonths[0]} R{bookingsArraySixMonthsPrice[0]} {"\n"}{bookingsArraySixMonths[1]} R{bookingsArraySixMonthsPrice[1]} {"\n"}{bookingsArraySixMonths[2]} R{bookingsArraySixMonthsPrice[2]} {"\n"}{bookingsArraySixMonths[3]} R{bookingsArraySixMonthsPrice[3]}</Text>

              <Text style={styles.paragraph}>Six Week Courses</Text>
              <Text style={styles.smallParagraph}>{bookingsArraySixWeeks[0]} R{bookingsArraySixWeeksPrice[0]} {"\n"}{bookingsArraySixWeeks[1]} R{bookingsArraySixWeeksPrice[1]} {"\n"}{bookingsArraySixWeeks[2]} R{bookingsArraySixWeeksPrice[2]}</Text>

            </View>
            <View style={styles.courseContainer}></View>

            
            <Text style={styles.paragraph}>Discount Applied: {discount * 100}%</Text>

            

            <TouchableOpacity onPress={() => setPriceTotal(calculateTotal) }>
              <Text style={styles.button}>Calculate Total</Text>
            </TouchableOpacity>

            <Text style={styles.paragraph}>Sum Total: R{priceTotal}</Text>

            <TouchableOpacity onPress={() => {setPurchaseSuccess("Purchase successful.")}}>
              <Text style={styles.button}>Proceed with purchase</Text>
            </TouchableOpacity>

            <Text style={styles.subHeading}>
              {purchaseSuccess}
            </Text>

        {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Empowering the Nation Copyright 2022-2025.</Text>
            <Text style={styles.footerText}>v1.0</Text>
          </View>

        {/* Screen overlay */}  
        <View style={modalVisible ? styles.opacityOverlayOn : styles.opacityOverlayOff}>
        </View>

        </ScrollView>
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
    fontSize: 12,
    fontWeight: 'bold',
    margin: 1,
    padding: 2,
    backgroundColor: 'ghostwhite',
  },
  subHeading: {
    fontSize: 23,
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: 'ghostwhite',
    margin: 20,
    marginTop: 40,
  },
  paragraph: {
    fontSize: 20,
    fontWeight: 'semibold',
    padding: 15,
    backgroundColor: 'ghostwhite',
    margin: 15
  },
  smallHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: 'ghostwhite',
    margin: 15,
    marginBottom: 25,
  },
  smallParagraph: {
    fontSize: 17,
    fontWeight: 'semibold',
    padding: 15,
    backgroundColor: 'ghostwhite',
    margin: 15
  },
  courseTitle: {
    fontSize: 17,
    fontWeight: 'semibold',
    padding: 5,
    backgroundColor: 'ghostwhite',
    marginTop: 30,
    alignContent: 'center',
    justifyContent: 'center'
  },
  tinyLink: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 6,
    borderColor: 'lightgray',
    borderWidth: 2,
    margin: 4,
  },
  container: {
    justifyContent: 'space-evenly',
    alignContent: 'space-evenly',
    borderColor: 'lightgray',
    borderWidth: 3,
    margin: 15,
  },
  linkContainer: {
    backgroundColor: 'ghostwhite',
    width: '40%',
    padding: 10,
    left: "60%",
    justifyContent: 'space-evenly',
    alignContent: 'space-evenly',
    top: "11.1%",
    borderLeftColor: "darkorange",
    borderLeftWidth: 2,
  },
  button: {
    color: 'dodgerblue',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: 'ghostwhite',
    borderColor: 'gray',
    borderWidth: 2,
    margin: 15,
  },
  buttonOff: {
    width: "10%",
    height: "10%",
    padding: 50,
    alignContent: 'center',
    borderRadius: 10,
  },
  buttonOn: {
    width: "10%",
    height: "10%",
    padding: 50,
    top: "56%",
    alignContent: 'center',
    borderRadius: 10,
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
    height: 50,
    width: 50,
    aspectRatio: 'auto',
    marginTop: 10,
  },
  headingContainer: {
    alignContent: 'space-between',
    justifyContent: 'space-between',
    padding: 8,
    margin: 10,
    backgroundColor: 'lightgray'
  },
  row:{
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  rowEven:{
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
  },
  rowLeft:{
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-evenly',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  scrollContainer:{
    borderColor: 'darkorange',
    borderTopWidth: 2,
    
    marginBottom: 325,
  },
  footer:{
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 3,
  }, 
  footerText:{
    color: 'gray',
  },
  popup:{
    flex: 1,
    backgroundColor: 'white',
    margin: 50,
    marginTop: 250,
    marginBottom: 150,
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  courseImage: {
    alignContent: 'center',
    justifyContent: 'center',
    left: '8%',
  },
  courseContainer: {
    marginBottom: 40,
    borderColor: 'lightgray',
    borderWidth: 2,
    margin: 10,
  },
  mapImage: {
    alignContent: 'center',
    justifyContent: 'center',
    
    height: 320,
    width: 323,
  },
  space: {
    margin: 15,
  },
});
