import { AppState } from "../AppState.js";


export class GameNightController {
    constructor() {
        console.log('GameNight Controller module loaded')
        LogPlayers()
    }
}

function LogPlayers() {
    console.log(AppState.players)
}