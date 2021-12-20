import router from "./router.js";
import ConsultationController from "./controller.js";
import Consultation from "./model.js";
const models = { Consultation };

const controller = new ConsultationController(models);
const routes = router(controller);

export default routes;