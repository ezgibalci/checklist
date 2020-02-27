import React from 'react';

import LinkSecondary from './LinkSecondary';
import LinkLight from './LinkLight';
import LinkBrand from './LinkBrand';

const Wrapper = (storyFn: any) => (
  <div style={{ padding: 8, backgroundColor: '#101013' }}>{storyFn()}</div>
);

export default {
  title: 'Links',
  decorators: [Wrapper],
};

export const secondary = () => <LinkSecondary to="./">Hello</LinkSecondary>;
export const white = () => <LinkLight to="./">Hello</LinkLight>;
export const brand = () => <LinkBrand to="./">Hello</LinkBrand>;