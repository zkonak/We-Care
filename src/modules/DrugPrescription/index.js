import router from "./router.js";
import DrugPrescriptionController from "./controller.js";
import DrugPrescription from "./model.js";
const models = { DrugPrescription };

const controller = new DrugPrescriptionController(models);
const routes = router(controller);

export default routes;