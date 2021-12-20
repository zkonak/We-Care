import router from "./router.js";
import UserController from "./controller.js";
import User from "./model.js";
const models = { User };

const controller = new UserController(models);
const routes = router(controller);

export default routes;