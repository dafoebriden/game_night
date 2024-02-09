import { Player } from './models/GameNight.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  players = [new Player('Bob')]
}

export const AppState = createObservableProxy(new ObservableAppState())