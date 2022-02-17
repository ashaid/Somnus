import * as React from "react";
import ButtonAppBar from "../components/app-bar";
import Zzz from "../components/zzz";
import Banner from "../components/banner";

export interface IHomeProps {}

export interface IHomeState {}

export default class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div className="App">
        <ButtonAppBar />
        <Banner />
        <header className="App-header">
          <Zzz />
        </header>
      </div>
    );
  }
}
