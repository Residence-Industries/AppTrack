import React from 'react';
import { expect } from 'chai';
import * as types from '../../../client/constants/actionTypes';

// Import reducers here

describe('Reducers', () => {
  describe('firstReducer', () => {
    it('should pass the test', () => {
      const action = {
        type: 'PASS_TEST',
        didItPass: true
      };

      const state = firstReducer({
        didItPass: false
      }, action);

      expect(state.didItPass).to.eql(action.didItPass);
    })
  })
})
