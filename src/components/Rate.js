import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';

export default class Rate extends Component {
  state = {
    rate: 0,
  };

  componentDidMount() {
    const {readonly, rate} = this.props;
    if (readonly) {
      this.setState({rate: rate});
    }
  }

  onPressRate = val => {
    const {onUpdate, readonly} = this.props;
    this.setState({rate: val});
    if (readonly) {
      onUpdate(val);
    }
  };

  render() {
    const {style, readonly} = this.props;
    const {rate} = this.state;
    return (
      <View>
        <View style={[styles.rateView, style]}>
          <TouchableOpacity
            disabled={!!readonly}
            onPress={() => this.onPressRate(1)}
            style={styles.rate}>
            <Icons
              name="star"
              solid={rate > 0 ? true : false}
              size={20}
              color={rate > 0 ? 'yellow' : '#000'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!!readonly}
            onPress={() => this.onPressRate(2)}
            style={styles.rate}>
            <Icons
              name="star"
              solid={rate > 1 ? true : false}
              size={20}
              color={rate > 1 ? 'yellow' : '#000'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!!readonly}
            onPress={() => this.onPressRate(3)}
            style={styles.rate}>
            <Icons
              name="star"
              solid={rate > 2 ? true : false}
              size={20}
              color={rate > 2 ? 'yellow' : '#000'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!!readonly}
            onPress={() => this.onPressRate(4)}
            style={styles.rate}>
            <Icons
              name="star"
              solid={rate > 3 ? true : false}
              size={20}
              color={rate > 3 ? 'yellow' : '#000'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!!readonly}
            onPress={() => this.onPressRate(5)}
            style={styles.rate}>
            <Icons
              name="star"
              solid={rate > 4 ? true : false}
              size={20}
              color={rate > 4 ? 'yellow' : '#000'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rate: {
    margin: 2,
  },
  rateView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // rateText: {
  //   color: Colors.Colors.endeavour,
  //   margin: 2,
  // },
  // dateText: {
  //   color: Colors.Colors.nileBlue,
  // },
});
