import { observable, action } from 'mobx'

export default class AppObservable {
  @observable name = '';

  constructor() {

  }

  @action setName(name) {
    this.name = name
  }
}
