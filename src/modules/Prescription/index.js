import router from "./router.js";
import PrescriptionController from "./controller.js";
import Prescription from "./model.js";
const models = { Prescription };

const controller = new PrescriptionController(models);
const routes = router(controller);

export default routes;