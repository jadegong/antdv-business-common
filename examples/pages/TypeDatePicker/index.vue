<!-- v0.0.1 2023/01/04 gqd Pick date time according to type, demo; -->
<template>
    <div>
        <div style="width: 60%; margin: 0 auto;">
            <a-form
                layout="inline"
            >
                <a-form-item label="">
                    <type-date-picker :value="typeDatePickerValue" :dateTypes="dateTypes" @onTypeDateValueChange="onTypeDateValueChange" />
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs';
// import { toolUtil } from '../../utils/toolUtils';
export default {
    name: 'TypeDatePickerPage',
    components: {},
    data() {
        return {
            dateTypes: [{ key: 'day', desc: '天' }, { key: 'month', desc: '月' }],
            typeDatePickerValue: {
                type: 'day',
                date: '',
            },
        };
    },
    methods: {
        /**
         * 处理选择的时间数据
         */
        onTypeDateValueChange(emitData) {
            const { type, date } = emitData;
            this.typeDatePickerValue = { type, date };
            let selectedDate = dayjs(date);
            if (selectedDate.isValid()) {
                console.log(selectedDate.format(type === 'day' ? 'YYYY-MM-DD' : 'YYYY-MM'));
            } else {
                console.log('Invalid date');
            }
        },
    },
}
</script>
