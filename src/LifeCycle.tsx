import React from "react";

interface ILifecycleProps {
  someProp: number;
}

interface ILifecycleState {
  stateField: number;
  isMounted: boolean;
}

export class LifeCycle extends React.Component<ILifecycleProps, ILifecycleState> {
  constructor(props: ILifecycleProps) {
    super(props);

    this.state = {stateField: 0, isMounted: false};
  }

  static getDerivedStateFromProps (props: Readonly<ILifecycleProps>, state: Readonly<ILifecycleState>) {
    
  }

  // метод ошибки
  static getDerivedStateFromError(error: Error){
    return {}
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    
  }

// если pureComponent то использовать не стоит
  public shouldComponentUpdate(
    nextProps: Readonly<ILifecycleProps>,
    nextState: Readonly<ILifecycleState>,
    nextContent: any

  ):boolean{
    return this.props != nextProps || this.state != nextState;
  }

  public render() {
    return <div onClick={this.handleClick}>1</div>
  }

  // этот метод вызывается перед тем как компонент обновится
  public getSnapshotBeforeUpdate(
    prevProps: Readonly<ILifecycleProps>,
    prevState: Readonly<ILifecycleState>,
  ): any | null {
    return '1234'
  }

  public componentDidUpdate(
    prevProps: Readonly<ILifecycleProps>,
    prevState: Readonly<ILifecycleState>,
    snapshot?: any // это то что мы возвращаем из getSnapshotBeforeUpdate
  ) {
    if (snapshot > 100) {
      this.setState({})
    }
  }
  

  // изменять дом элементы, запускать таймеры, отслеживать размер окна и можно использовать setState()
  public componentDidMount(): void {

  }

  public componentWillUnmount() {
    document.removeEventListener('resize', () => {})
  }

  private handleClick = () => {
    this.setState({stateField: 1})
  }
}