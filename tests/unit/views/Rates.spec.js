import { shallowMount } from '@vue/test-utils'
import Rates from '@/views/Rates'

describe('rates', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(Rates)
    })
    test('should match with snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    });
});