"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.default = ((controller) => {
    const userRouter = (0, express_1.Router)();
    userRouter
        .route('/')
        .get(controller.getOne)
        .post(controller.add);
    userRouter.route(`/auth`).post(controller.login);
    return userRouter;
});
