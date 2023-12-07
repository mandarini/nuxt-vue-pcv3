import { mount } from '@vue/test-utils';
import Kate from './kate.vue';

describe('Kate', () => {
  it('renders properly', () => {
    const wrapper = mount(Kate, {});
    expect(wrapper.text()).toContain('Welcome to Kate');
  });
});
