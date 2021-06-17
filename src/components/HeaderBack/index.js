import React from 'react';
import {
    View, TouchableOpacity, Image
} from 'react-native';
import { withNavigation } from '@react-navigation/compat';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { images } from '../../boot/image'


import styles from './styles';
import { Colors } from '../../comon';
import TextComponent from '../TextComponent';
import I18n from 'i18n-js';

class HeaderBack extends React.PureComponent {
    render() {
        const {

                text = null,
                onPress
        } = this.props;
        return (
            <View
                style={styles.container}
            >
                <TouchableOpacity
                    style={{
                        height: '100%',
                        width: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => {
                                if(onPress){
                                    onPress()
                                }else{
                                    this.props.navigation.goBack('');
                                }
                       
                    }}
                >
                    <IonicIcons
                        name="ios-arrow-back"
                        size={35}
                        color={Colors.textNew}
                    />
                </TouchableOpacity>

                {text ? <TextComponent
                    text={text}
                /> :   <View style={{
                    width: 50,
                    height: "100%"
                }} />}
                <View style={{
                    width: 50,
                    height: "100%"
                }} />
            </View>
        );
    }
}
HeaderBack.propTypes = {

};

HeaderBack.defaultProps = {

};
const mapPropsToState = state => ({
    auth: state.auth
});
export default connect(mapPropsToState)(withNavigation(HeaderBack));
