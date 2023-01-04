<template>
    <a-table 
        :class="['baseTable', defaultOptions.styleName]"
        :show-header="defaultOptions.showHeader"
        :columns="defaultOptions.columns"
        :data-source="defaultOptions.dataSource"
        :pagination="defaultOptions.pagination"
        :scroll="defaultOptions.scroll"
        :on-change="defaultOptions.onChange"
        :style="{ height: '100%', padding: defaultOptions.padding}"
    >
    </a-table>
</template>
<script>
import { Table } from 'ant-design-vue';
import NoData from '../../Common/NoData.vue';
import { toolUtil } from '../../utils/toolUtils';
import './index.less';
export default {
    name: 'BaseTable',
    components: {
        ATable: Table,
        NoData,
    },
    props: {
        option: {
            type: Object,
            default: () => {
                return {
                    showHeader: true,
                    columns: [],
                    dataSource: [],
                    pagination: false,
                    scroll: {
                        x: undefined,
                        y: 100,
                    },
                    showLineNo: true,
                    onChange: () => {},
                    styleName: 'striped',
                    padding: 0,
                };
            },
        },
    },
    data() {
        return {};
    },
    computed: {
        defaultOptions() {
            const retOpt = {
                size: 'middle',
                pagination: true,
            };
            toolUtil.merge(retOpt, this.option, true);
            if (retOpt.dataSource?.length > 0) {
                retOpt.dataSource.forEach((item, index) => {
                    item.key = index;
                });
            }
            return retOpt;
        },
    },
}
</script>
