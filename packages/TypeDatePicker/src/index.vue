<!-- v0.0.1 2023/01/04 gqd Pick date time according to type; -->
<template>
    <span>
        <a-radio-group v-model:value="value.type" @change="onTypeChange">
            <a-radio v-for="dateTypeItem in dateTypes" :key="dateTypeItem.key" :value="dateTypeItem.key">{{ dateTypeItem.desc }}</a-radio>
        </a-radio-group>
        <a-range-picker
            v-if="range"
            v-model:value="value.date"
            :disabled-date="disabledDate"
            @change="onDateChange"
        />
        <template v-else>
            <a-date-picker
                :picker="value.type === 'day' ? 'date' : value.type"
                :disabled-date="disabledDate"
                v-model:value="value.date"
                @change="onDateChange"
            />
        </template>
    </span>
</template>
<script>
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
dayjs.extend(isSameOrAfter);

export default {
    name: 'TypeDatePicker',
    components: {},
    props: {
        // 是否选择时间范围
        range: {
            type: Boolean,
            default: () => false,
        },
        value: {
            type: Object,
            default: () => {
                return {type: 'day', date: ''};
            },
        },
        // 自定义展示那几种类型单选按钮，默认天/周/月
        dateTypes: {
            type: Array,
            default: () => [{ key: 'day', desc: '天' }, { key: 'week', desc: '周' }, { key: 'month', desc: '月' },],
        },
    },
    computed: {
        // 自定义禁选时间，默认今天可选今天以前
        disabledDate() {
            return (currentDate) => currentDate.isSameOrAfter(dayjs().startOf(this.value.type || 'day'))
        },
    },
    data() {
        return {
        };
    },
    methods: {
        /**
         * 时间类型改变回调
         */
        onTypeChange(e) {
            const type = e.target.value;
            this.$emit('onTypeDateValueChange', {type, date: this.range ? [] : ''});
        },
        /**
         * 选择回调
         */
        onDateChange(date, dateString) {
            this.$emit('onTypeDateValueChange', {type: this.value.type, date});
        },
    },
}
</script>
