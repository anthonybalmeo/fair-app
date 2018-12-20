/* eslint-disable no-unused-vars */
import React from 'react';
import { Redirect } from 'react-router'

// Redirects /listing to initial /listing/1
export default () =>
  <Redirect to="/listing/1" />
