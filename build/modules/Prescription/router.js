"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.default = (controller) => {
    const router = (0, express_1.Router)();
    router.route("/").post(controller.add);
    router.route("/").get(controller.getOne);
    router.route("/").patch(controller.update);
    router.route("/").delete(controller.delete);
    return router;
};
