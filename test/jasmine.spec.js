import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { JSDOM } from 'jsdom';
import injectStyledUtils from '../src/jasmine';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;

const { Button, fadeIn } = require('./utils/framework');

describe('jasmine', () => {
  beforeAll(() => {
    injectStyledUtils(jasmine);
  });

  it('toHaveStyleRule', () => {
    const component = ReactTestRenderer.create(<Button />);
    expect(component).toHaveStyleRule('color', 'blue');
  });

  xit('toNotHaveStyleRule', () => {
    const component = ReactTestRenderer.create(<Button />);
    expect(component).toNotHaveStyleRule('text-decoration');
  });

  it('toBeAGlobalStyle', () => {
    expect("body { font-family: 'Roboto'; }").toBeAGlobalStyle();
  });

  it('toHaveComponent', () => {
    expect(Button).toHaveComponent('button');
  });

  it('toHaveKeyframeRule', () => {
    expect(fadeIn).toHaveKeyframeRule('0%', 'opacity', '0');
  });
});
