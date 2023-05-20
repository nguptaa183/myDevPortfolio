import React from 'react';
import { Footer } from '../../layouts';
import { Global } from './styles';
import './fonts.css';

export const Layout = ({ children }) => (
  <>
    <Global />
    {children}
    <Footer />
  </>
);
