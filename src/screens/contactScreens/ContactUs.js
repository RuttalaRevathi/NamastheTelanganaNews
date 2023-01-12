/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, SafeAreaView, Linking } from 'react-native';
import SubHeader from '../../components/SubHeader';
import { commonstyles } from '../../styles/commonstyles';
import { ContactStyles } from '../../styles/contactScreenStyles';


export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ContactData: []
        };
    }


    render() {


        return (
            <SafeAreaView styles={commonstyles.container}>
                
                <SubHeader title={'Contact Us '} isMenu={false} isBook={false} isShare={false}
                    leftBtnClick={() => this.props.navigation.goBack()}
                    ShareClick={() => { this.sharecall(); }}
                    BookClick={() => { alert('BookMark   Clicked'); }}
                />
                <View style={ContactStyles.mainView}>
                    <View style={{ left: 20, top: 10 }}>

                        <Text style={ContactStyles.text1}>CORPORATE OFFICE</Text>
                        <Text style={ContactStyles.text2}>TELANGANA PUBLICATIONS PVT. LTD,</Text>
                        <Text style={ContactStyles.text1}># 8-2-603/1/7,8&9, Krishnapuram,</Text>
                        <Text style={ContactStyles.text1}>Road No. 10, Banjara Hills,</Text>
                        <Text style={ContactStyles.text1}>HYDERABAD 500 034.</Text>
                        <Text style={ContactStyles.text1}>Telangana State {'\n'}
                        Ph: <Text style={{ color: 'blue' }}
                                    onPress={() => Linking.openURL('tel:+91 40 2329 1999')}>
                                    +91 40 2329 1999
                                </Text>,{'\n'}
                                Fax: <Text style={{ color: 'blue' }}
                                    onPress={() => Linking.openURL('tel:+91 40 2329 1117')}>
                                    +91 40 2329 1117
                                </Text>{'\n'}
                                Email: <Text style={{ color: 'blue' }}
                                    onPress={() => Linking.openURL('mailto:admin@tppl.news')}>
                                    admin@tppl.news
                                </Text></Text>
                        
                        
                    </View>
                </View>

            </SafeAreaView>
        );
    }
}