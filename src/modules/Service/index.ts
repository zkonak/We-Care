import router from "./router.js";
import ServiceController from "./controller.js";
import Service from "./model.js";
const models = { Service };

const controller = new ServiceController(models);
const routes = router(controller);

export default routes;