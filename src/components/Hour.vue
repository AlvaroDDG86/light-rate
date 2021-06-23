<template>
    <div class="inline-block hour m-2">
        <div
            class="bg-indigo-50 px-8 py-8 bg-white w-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
            <h3 class="py-2 text-4xl font-bold font-mono p-4 rounded-md" :class="getBGColor()">{{ value }} <span class="text-2xl">€/MWh</span></h3>
            <div class="text-center mt-2 leading-none flex justify-between w-full">
                <span class="mr-3 inline-flex items-center leading-none text-2xl py-1 font-bold">
                  {{ percent }}
                </span>
                <span class=" inline-flex items-center leading-none text-5xl font-bold">
                  {{ hour }}
                </span>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        data: {
            type: Object,
            required: true,
            default () {
                return {
                    value: '',
                    percentage: '',
                    datetime: ''
                }
            }
        }
    },
    computed: {
        hour() {
            return new Date(this.data.datetime).toLocaleTimeString().slice(0, -3)
        },
        percent() {
            return `${parseFloat(this.data.percentage).toFixed(2)} %`
        },
        value() {
            return parseFloat(this.data.value).toFixed(2)
        }
    },
    methods: {
        getBGColor() {
            return {
                'bg-red-400': (this.data.value > 220),
                'bg-yellow-200': (this.data.value < 220 && this.data.value > 150),
                'bg-green-400': (this.data.value < 150)
            }
        }
    }
})
</script>