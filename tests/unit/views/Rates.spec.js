import { shallowMount } from '@vue/test-utils'
import Rates from '@/views/Rates'
import HttpService from '@/services/http.service'

jest.mock('@/services/http.service', () => ({
    getRates: jest.fn()
}))

describe('rates', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(Rates, {
            propsData: {
                date: new Date("2/1/22")
            }
        })
    })
    test('should match with snapshot', () => {
        // expect(wrapper.html()).toMatchSnapshot()
    });
    test('should call the service', () => {
        expect(HttpService.getRates).toHaveBeenCalled()
    })
});