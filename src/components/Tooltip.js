// @flow
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Button from './Button';

import styles from './style';

import type { Step } from '../types';

type Props = {
  isFirstStep: boolean,
  isLastStep: boolean,
  handleNext: func,
  handlePrev: func,
  handleStop: func,
  currentStep: Step,
  labels: Object,
};

const Tooltip = ({
  isFirstStep,
  isLastStep,
  handleNext,
  handlePrev,
  handleStop,
  currentStep,
  labels,
}: Props) => (
    <View>
      <View style={styles.tooltipContainer}>
        <Text testID="stepDescription" style={{ color: '#8C8C8C', textAlign: 'center' }}>
          {currentStep.text}
        </Text>
        {currentStep.commandText &&
          <Text style={{ color: '#D74545', fontWeight: 'bold', textAlign: 'center', marginVertical: 5 }}>{currentStep.commandText}</Text>
        }
      </View>
      <View style={[styles.bottomBar]}>
        {currentStep.showNextButton &&
          <TouchableOpacity onPress={isLastStep ? handleStop : handleNext} style={{
            marginVertical: 10,
            paddingHorizontal: 20,
            paddingVertical: 5,
            backgroundColor: '#D74545',
            borderRadius: 20,
          }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{isLastStep ? 'Done' : 'Next'}</Text>
          </TouchableOpacity>
        }
      </View>
    </View >
  );

export default Tooltip;
