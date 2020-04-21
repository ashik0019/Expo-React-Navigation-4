import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Feather } from '@expo/vector-icons'
import {
  ProfileScreen,
  MessageScreen,
  ActivityScreen,
  ListScreen,
  ReportScreen,
  StatisticScreen,
  SingOutScreen
} from './screens/'
import Sidebar from './components/SideBar'
const DrawerNavigation = createDrawerNavigator({
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: "Profile",
      drawerIcon: ({ tintColor }) => <Feather name="user" size={18} tintColor={tintColor} />
    }
  },
  MessageScreen: {
    screen: MessageScreen,
    navigationOptions: {
      title: "Message",
      drawerIcon: ({ tintColor }) => <Feather name="message-square" size={18} tintColor={tintColor} />
    }
  },
  ActivityScreen: {
    screen: ActivityScreen,
    navigationOptions: {
      title: "Activities",
      drawerIcon: ({ tintColor }) => <Feather name="activity" size={18} tintColor={tintColor} />
    }
  },
  ListScreen: {
    screen: ListScreen,
    navigationOptions: {
      title: "Lists",
      drawerIcon: ({ tintColor }) => <Feather name="list" size={18} tintColor={tintColor} />
    }
  },
  ReportScreen: {
    screen: ReportScreen,
    navigationOptions: {
      title: "Reports",
      drawerIcon: ({ tintColor }) => <Feather name="bar-chart" size={18} tintColor={tintColor} />
    }
  },
  StatisticScreen: {
    screen: StatisticScreen,
    navigationOptions: {
      title: "Statistic",
      drawerIcon: ({ tintColor }) => <Feather name="trending-up" size={18} tintColor={tintColor} />
    }
  },
  SingOutScreen: {
    screen: StatisticScreen,
    navigationOptions: {
      title: "SignOut",
      drawerIcon: ({ tintColor }) => <Feather name="log-out" size={18} tintColor={tintColor} />
    }
  }

}, {
  contentComponent: props => <Sidebar {...props} />,
  drawerWidth: Dimensions.get('window').width * 0.88,
  hideStatusBar: true, 
  contentOptions: {
    activeBackgroundColor: "rgba(212,118,207,0.3)",
    activeTintColor: '#fc038c',
    itemsContainerStyle: {
      marginTop: 16,
      marginHorizontal: 8,
    },
    itemStyle: {
      borderRadius: 4,
    }
  }
})

export default createAppContainer(DrawerNavigation);