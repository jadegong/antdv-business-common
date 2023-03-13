<template>
  <div>
    <div style="width: 1200px;">
      <a-form layout="inline">
        <a-form-item label="">
          <abc-type-date-picker
            :range="true"
            :value="typeDatePickerPageState.typeDatePickerValue"
            :dateTypes="typeDatePickerPageState.dateTypes"
            @onTypeDateValueChange="onTypeDateValueChange"
          >
          </abc-type-date-picker>
        </a-form-item>
      </a-form>
      <code-preview
        :sourceCode="typeDatePickerPageState.sourceCode"
      >
      </code-preview>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek'
dayjs.extend(isoWeek)

import CodePreview from '../../components/CodePreview.vue';

interface DateTypeModel {
  key: String;
  desc: String;
}

interface TypeFormatsModel {
  [key: string]: string;
}

interface TypeDatePickerValueModel {
  type: String;
  date: Dayjs | String | [Dayjs, Dayjs] | [String, String] | [];
}

interface TypeDatePickerPageStateModel {
  dateTypes: Array<DateTypeModel>;
  typeFormats: TypeFormatsModel;
  sourceCode: String;
  typeDatePickerValue: TypeDatePickerValueModel;
}

export default defineComponent({
  name: 'TypeDatePickerPage',
  components: {
    CodePreview
  },
  setup() {
    const typeDatePickerPageState = reactive<TypeDatePickerPageStateModel>({
      dateTypes: [{ key: 'day', desc: '天' }, { key: 'week', desc: '周' }, { key: 'month', desc: '月' }, { key: 'quarter', desc: '季' }],
      typeFormats: {
        datetime: 'YYYY-MM-DD HH:mm:ss',
        day: 'YYYY-MM-DD',
        month: 'YYYY-MM',
        week: 'YYYY-WW',
        quarter: 'YYYY-Q',
        year: 'YYYY',
      },
      sourceCode: '',
      typeDatePickerValue: {
        type: 'day',
        date: [],
      },
    })

    // functions
    const onTypeDateValueChange = (emitData: any) => {
      const { type, date } = emitData;
      typeDatePickerPageState.typeDatePickerValue.type = type;
      typeDatePickerPageState.typeDatePickerValue.date = date;
      if (typeof date === 'object' && date.length !== undefined) {
        date.forEach((item: Dayjs) => {
          console.log(item.format(typeDatePickerPageState.typeFormats[type]))
        });
      } else {
        let selectedDate = dayjs(date);
        if (selectedDate.isValid()) {
          console.log(selectedDate.format(type === 'day' ? 'YYYY-MM-DD' : 'YYYY-MM'));
        } else {
          console.log('Invalid date');
        }
      }
    }
    
    const loadSourceCode = async () => {
      typeDatePickerPageState.sourceCode = (
        await import('./demo.vue?raw')
      ).default;
    };

    onMounted(() => {
      loadSourceCode()
    });

    return {
      typeDatePickerPageState,
      onTypeDateValueChange,
    };
  },
});
</script>
