import React, {useCallback}  from 'react';
import {IBind} from 'use-bind';

export interface IChildComponent {
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

export default ChildComponent;