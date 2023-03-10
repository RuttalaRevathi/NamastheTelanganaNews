/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Alert, SafeAreaView, TouchableHighlight, Linking } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import { StackActions } from '@react-navigation/native';
import { appThemeColor, blackcolor, graycolor, whitecolor } from '../styles/commonstyles';
import { sideMenuStyle } from '../styles/SideMenuStyles';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import FastImage from 'react-native-fast-image';

const popAction = StackActions.pop(1);
export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DrawerItem: false,
        };
    }
    NestedDrawerItem = () => {
        if (this.state.DrawerItem === true) {
            this.setState({ DrawerItem: false });
        }
        else {
            this.setState({ DrawerItem: true });
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ flex: 1, paddingTop: 20, backgroundColor: graycolor }}>
                    <View style={{ backgroundColor: appThemeColor, flexDirection: 'row' }}>
                        <View style={{ width: '90%' }}>
                            <Text style={sideMenuStyle.sectionsText}>Sections</Text>
                        </View>
                        <View >
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.goBack();
                            }}>
                                <AntDesign name="close" size={23} color={whitecolor} style={{ top: 5, alignSelf: 'flex-end', justifyContent: 'center' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView style={{ paddingBottom: 50 }}>
                       
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/topnews.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="???????????????????????? ??????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('LatestNews');
                            }}
                        />

                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/sidemenuIcons/horoscope.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="??????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('??????????????????');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/sidemenuIcons/horoscope.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="???????????? ???????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('??????????????????????????????');
                            }}
                        />

                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/sidemenuIcons/cartoon.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="???????????????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('???????????????????????????');
                            }}
                        />

                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/sidemenuIcons/health.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="?????????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('?????????????????????');
                            }}
                        />

                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/sidemenuIcons/hyderabad.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="??????????????????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('??????????????????????????????');
                            }}
                        />

                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/sidemenuIcons/telangana.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="?????????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('?????????????????????');
                            }}
                        />

                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/sidemenuIcons/ap.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="????????????????????????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('????????????????????????????????????');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/sidemenuIcons/national.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="??????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('??????????????????');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/sidemenuIcons/international.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="?????????????????????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('?????????????????????????????????');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/sidemenuIcons/sports.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="??????????????????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('??????????????????????????????');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/sidemenuIcons/business.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="????????????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('????????????????????????');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/sidemenuIcons/nri.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="???????????????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('???????????????????????????');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/sidemenuIcons/photos.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="??????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('??????????????????');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/sidemenuIcons/video.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="????????????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('????????????????????????');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/sidemenuIcons/editpage.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="?????????????????? ????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('?????????????????? ????????????');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/sidemenuIcons/zindagi.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="??????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('??????????????????');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/sidemenuIcons/bathukamma.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="?????????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('?????????????????????');
                            }}
                        />

                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/sidemenuIcons/agriculture.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="????????????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('????????????????????????');
                            }}
                        />

                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/sidemenuIcons/cooking.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="???????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('???????????????');
                            }}
                        />

                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/sidemenuIcons/vaasthu.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="??????????????????"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('??????????????????');
                            }}
                        />

                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/sidemenuIcons/more.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label={({ color }) => (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                    <View>
                                        <Text style={sideMenuStyle.text}>????????????????????????</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.NestedDrawerItem(this.setState({ shouldShow: !this.state.shouldShow }));
                                        }}>
                                        <AntDesign
                                            name={this.state.shouldShow ? "upcircleo" : "downcircleo"}
                                            size={20}
                                            color={blackcolor}
                                            style={{ top: 12 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )}
                            labelStyle={sideMenuStyle.text}
                        />
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="???????????????????????????"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('???????????????????????????');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="???????????????????????????"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('??????????????????????????????');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}
                                label="???????????????????????????"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('???????????????????????????');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="???????????????"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('???????????????');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="?????????????????? ????????????"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('?????????????????? ????????????');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="???????????????"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('???????????????');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="?????????????????????"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('?????????????????????');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="??????????????????????????????"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('??????????????????????????????');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="??????????????????????????????"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('??????????????????????????????');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="??????????????????"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('??????????????????');
                                }}
                            />
                        )}
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <FastImage
                                    source={require('../Assets/Images/paper.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="E-PAPER"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                Linking.openURL('https://epaper.ntnews.com/');
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <FastImage source={require('../Assets/Images/sidemenuIcons/contact.png')} style={sideMenuStyle.icon} />
                            }
                            label="Contact Us"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Contact');
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <FastImage source={require('../Assets/Images/sidemenuIcons/about.png')} style={sideMenuStyle.icon} />
                            }
                            label="About Us"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('About');
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <FastImage source={require('../Assets/Images/sidemenuIcons/privacy.png')} style={sideMenuStyle.icon} />
                            }
                            label="Privacy Policy"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Privacy');
                            }}
                        />
                       
                        <DrawerItem style={[sideMenuStyle.item]}
                            icon={({ color, size }) =>
                                <FastImage source={require('../Assets/Images/sidemenuIcons/conditions.png')} style={sideMenuStyle.icon} />
                            }
                           
                            label="Terms and Conditions"

                            labelStyle={[sideMenuStyle.text]}
                            onPress={() => {
                                this.props.navigation.navigate('Terms');
                            }}
                        />







                    </ScrollView>

                </View >
            </SafeAreaView>
        );

    }


}
