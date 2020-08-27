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

  renderStars = () => {
    const {readonly} = this.props;
    const {rate} = this.state;
    let stars = [];
    for (let i = 0; i < 5; i++) {
      const star = (
        <TouchableOpacity
          key={i}
          disabled={!!readonly}
          onPress={() => this.onPressRate(i + 1)}
          style={styles.rate}>
          <Icons
            name="star"
            solid={rate > i ? true : false}
            size={20}
            color={rate > i ? 'yellow' : '#000'}
          />
        </TouchableOpacity>
      );
      stars.push(star);
    }

    return stars;
  };

  render() {
    const {style} = this.props;

    return (
      <View>
        <View style={[styles.rateView, style]}>{this.renderStars()}</View>
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
