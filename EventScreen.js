import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import Card from '../components/Card';
import Icon from '../components/Icon' ;

function EventScreen(props) {
    return (
       <View style={styles.container}>
           
            {/* menu */}
           <View style={styles.menu}>
           <MaterialCommunityIcons name="menu" size={24} color="black" />
           </View>

           {/* notification */}
           <View style={styles.notification}>
           <Ionicons name="md-notifications-outline" size={24} color="black" />
           </View>

           {/* logoholder */}
           <View style={styles.logoholder}>
           <Ionicons name="logo-tux" size={24} color="black" />
           </View>

           {/* Header: Events List */}
           <View style={styles.header}>
              <AppText>Events List</AppText> 
           </View>
           
           {/* Buttons */}
           <View style={styles.buttonposition}>
           <AppButton title="     Today" onPress={() => console.log("Tapped")}/>
           <AppButton title="Tomorrow" onPress={() => console.log("Tapped")}/>
           <AppButton title="This week" onPress={() => console.log("Tapped")}/>
           <AppButton title="This month" onPress={() => console.log("Tapped")}/>
           </View>

            {/* Bottom Icons */}
            <View style={styles.bottomicons}>            
             <Icon name="home" size={28} backgroundColor="white" iconColor="firebrick" 
             onPress={() => console.log("Tapped")}/>
             <Icon name="map-marker" size={28} backgroundColor="white" iconColor="blue"
             onPress={() => console.log("Tapped")} />
             <Icon name="calendar-month" size={28} backgroundColor="white" iconColor="green"
             onPress={() => console.log("Tapped")} />
             <Icon name="account" size={28} backgroundColor="white" iconColor="black"
             onPress={() => console.log("Tapped")} />
           </View>

           {/* Cards */}        
           <View style={styles.cardposition}>    
             <ScrollView>
               <Card 
               image={require("../assets/career.png")}
               title="Career Day" 
               subTitle="October 20, 2020"
               onPress={() => console.log("Tapped")}
               />
               <Card 
               image={require("../assets/laugh.png")}
               title="Game Night" 
               subTitle="October 22, 2020"
               onPress={() => console.log("Tapped")}
               />
               <Card 
               image={require("../assets/workshop.png")}
               title="Workshop LRC" 
               subTitle="October 24, 2020"
               onPress={() => console.log("Tapped")}
               />
               <Card 
               image={require("../assets/laugh.png")}
               title="Comedy Night" 
               subTitle="October 25, 2020"
               onPress={() => console.log("Tapped")}
               />
               <Card 
               image={require("../assets/laugh.png")}
               title="Comedy Night" 
               subTitle="October 25, 2020"
               onPress={() => console.log("Tapped")}
               /> 
             </ScrollView>   
           </View>
           
       </View>
       
    );
}
const styles = StyleSheet.create({
   container:{
       paddingTop: 40, 
   }, 
   menu:{
       position: "absolute",
       top:50,
       left: 20
   },
   notification:{
    position: "absolute",
    top:50,
    right: 20
   },
   logoholder:{
       position: "absolute",
       top: 50,
       left: 200
   },
   header:{
       justifyContent: "center",
       alignItems:"center",
       position:  "absolute",
       top:75,
       backgroundColor: "paleturquoise",
       width:'100%',
       height: 40,
   },
   buttonposition:{
    position:  "absolute",
    top:125,
    marginRight: 8,
    flexDirection: "row",
   },
   cardposition:{
    position:"absolute",
    top:160,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 5, 
    left: 22,
   },
bottomicons:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    marginLeft: 25,
    marginRight: 25,
    position:  "absolute",
    top: 800 ,
    backgroundColor:"white",
   },
})
export default EventScreen;