import { GameNightController } from "./controllers/GameNightController.js";
import { GameNightView } from "./views/GameNightView.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [GameNightController],
    view: ''
  }
  //,
  // {
  //   path: '#/about',
  //   view: 'app/views/AboutView.html'
  // }
])