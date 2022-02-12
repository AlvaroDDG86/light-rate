import { shallowMount } from '@vue/test-utils'
import Hour from '@/components/Hour'

const factory = (options) => {
    return shallowMount(Hour, {
        ...options
    })
}

describe('Hour', () => {
    test('should match with snapshot', () => {
        const wrapper = factory({
            props: {
                data: {
                    datetime: "2022-02-12T09:00:00.000+01:00",
                    percentage: 0.4427229653234936,
                    value: 211.17
                }
            },
            active: true
        })
        expect(wrapper.html()).toMatchSnapshot()
    });
});