# use-bind

> Responsive two-way binding between components

[![NPM](https://img.shields.io/npm/v/use-defer.svg)](https://www.npmjs.com/package/use-bind) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[中文版-组件间响应式双向绑定](README.zh-CN.md)

## Install

```bash
npm install --save use-bind
```

## Usage
[Live Code](https://codesandbox.io/s/use-bind-vmqm9?file=/src/ParentComponentExample.tsx)

```tsx
import * as React from 'react';

import useBind from 'use-bind';

const useBindExample = () => {
  const myBind = useBind(true);

  const onClick = useCallback(() => {
    myBind.value = myBind.value + 1
  }, [myBind])

  return (
    <div>
      <p onClick={onClick}>
          Click me and value will increment to {myBind.value} .
      </p>
    </div>
  );
};
};
```

## Examples

### Using it between components
[Live Demo Code](https://codesandbox.io/s/use-bind-vmqm9?file=/src/ParentComponentExample.tsx)

[Live Demo Example](https://zhengjiaqi.github.io/use-bind/)

[Source code - ParentComponentExample.tsx](https://github.com/zhengjiaqi/use-bind/blob/master/example/src/ParentComponentExample.tsx)

```tsx
// ParentComponentExample.tsx
const ParentComponent: React.FC<IParentComponent> = (props: IParentComponent) => {
  const myBind = useBind(1);
  const onClick = useCallback(() => {
    myBind.value += 10;
  }, [myBind]);

  return (
    <div>
      <div className="parent-componment-value-click" onClick={onClick}>
        <span>Click me</span> will increase the value of the child component by 10 each time.
      </div>
      <ChildComponent myBind={myBind}></ChildComponent>
    </div>
  );
}
```

[Source code - ChildComponentExample.tsx](https://github.com/zhengjiaqi/use-bind/blob/master/example/src/ChildComponentExample.tsx)

```tsx
// ChildComponentExample.tsx
interface IChildComponent {
  myBind: IBind<number>
}

const ChildComponent: React.FC<IChildComponent> = ({ myBind }: IChildComponent) => {
  const onClick = useCallback(() => {
    myBind.value += 1;
  }, [myBind]);

  return (
    <div>
      <div className="child-componment-value-click" onClick={onClick}>
        <span>Click me</span> will increase the value of the child component itself by 1 each time.
      </div>
      <div className="child-componment-value">
       Child Component Value: <span>{myBind.value}</span>
      </div>
    </div>
  );
}
```

## License

MIT © [zhengjiaqi](https://github.com/zhengjiaqi)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
