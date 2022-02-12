import { shallowMount } from '@vue/test-utils'
import Banner from '@/components/Banner'

describe('Hour', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(Banner, {
            props: {
                message: 'Meesage example'
            }
        })
    })
    test('should match with snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    });
    test('should render the message', () => {
        setTimeout(() => {
            const message = wrapper.find('span')
            expect(message.text()).toBe('Meesage example')
        }, 1000);
    });
});