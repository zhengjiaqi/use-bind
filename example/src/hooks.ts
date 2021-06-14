/**
 * @Copyright 2021 Yuanfudao Inc, All Rights Reserved.
 * @author: zhengjiaqibj
 * @createTime: 2021-06-13 14:37:20
 * @lastEditTime: 2021-06-13 14:41:08
 * @lastEditor: zhengjiaqibj
 * @description: 文件描述
 */
import {useState} from 'react';

export interface IBind<T> {
    value: T;
}

/**
 * @description: 响应式双向绑定hook
 * @param {T} initialValue
 * @return {*}
 */
export function useBind<T>(initialValue: T): IBind<T> {
    const [value, setValue] = useState(initialValue);
    return {
        get value() {
            return value;
        },
        set value(val) {
            setValue(val);
        },
    };
}
