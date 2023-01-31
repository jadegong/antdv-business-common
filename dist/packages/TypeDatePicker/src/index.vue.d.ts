import type { PropType } from 'vue';
import dayjs from 'dayjs';
interface TypeDatePickerPropsValueModel {
    type?: String;
    date?: any;
}
interface TypeDatePickerPropsDateTypesItemModel {
    key: String;
    desc: String;
}
interface TypeDatePickerPropsDateTypesModel {
    [index: number]: TypeDatePickerPropsDateTypesItemModel;
}
declare const _sfc_main: import("vue").DefineComponent<{
    range: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    value: {
        type: PropType<TypeDatePickerPropsValueModel>;
        default: () => {
            type: string;
            date: string;
        };
    };
    dateTypes: {
        type: PropType<TypeDatePickerPropsDateTypesModel>;
        default: () => {
            key: string;
            desc: string;
        }[];
    };
}, unknown, unknown, {
    disabledDate(): (currentDate: any) => any;
}, {
    /**
     * 时间类型改变回调
     */
    onTypeChange(e: Event): void;
    /**
     * 选择回调
     */
    onDateChange(date: dayjs | String | [dayjs, dayjs] | [String, String], dateString: String | [String, String]): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    range: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    value: {
        type: PropType<TypeDatePickerPropsValueModel>;
        default: () => {
            type: string;
            date: string;
        };
    };
    dateTypes: {
        type: PropType<TypeDatePickerPropsDateTypesModel>;
        default: () => {
            key: string;
            desc: string;
        }[];
    };
}>>, {
    value: {
        type: string;
        date: string;
    };
    range: boolean;
    dateTypes: TypeDatePickerPropsDateTypesModel;
}>;
export default _sfc_main;
