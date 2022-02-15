"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ConsultationRouter {
    constructor(controller) {
        this.router = (0, express_1.Router)();
        this.initializeRoutes(controller);
        return this.router;
    }
    initializeRoutes(controller) {
        this.router
            .route("/")
            .get(auth.isAuth, controller.getAll)
            .post(auth.isAuth, csrf, controller.add);
    }
}
