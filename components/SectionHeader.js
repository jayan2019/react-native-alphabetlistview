'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactNative, {
  StyleSheet,
  View,
  Text,
  NativeModules
} from 'react-native';

const { UIManager } = NativeModules;

export default class SectionHeader extends Component {

  componentDidMount() {
    this.props.updateTag && this.props.updateTag(ReactNative.findNodeHandle(this.refs.view), this.props.sectionId);
  }

  render() {
    const SectionComponent = this.props.component;
    const content = SectionComponent ?
      <SectionComponent {...this.props} /> :
      <Text>{this.props.title}</Text>;

    return (
      <View ref="view" style={styles.container}>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingLeft: 15,
    justifyContent: 'center',
    height: 50
  },
  text: {
    fontWeight: '700',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 2
  }
});

SectionHeader.propTypes = {

  /**
   * The id of the section
   */
  sectionId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),

  /**
   * A component to render for each section item
   */
  component: PropTypes.func,

  /**
   * A function used to propagate the root nodes handle back to the parent
   */
  updateTag: PropTypes.func
};
