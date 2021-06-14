import React, {useCallback} from 'react';
import ChildComponent from './ChildComponentExample';
import {useBind} from 'use-bind';

export interface IParentComponent {
}

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

export default ParentComponent;