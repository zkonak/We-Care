"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@overnightjs/core");
const ApiError_1 = require("../helpers/ApiError");
class App extends core_1.Server {
    constructor(routes, middlewares) {
        console.log("QQQQQ");
        super();
        this.initializeMiddlewares(middlewares);
        super.addControllers(routes);
        this.initializeErrorHandler();
    }
    initializeMiddlewares(middlewares) {
        for (const key in middlewares) {
            if (key === 'csrf') {
                this.app.get('/csrf', middlewares[key], (req, res) => {
                    res.status(200).json(req.csrfToken());
                });
            }
            else
                this.app.use(middlewares[key]);
        }
    }
    initializeErrorHandler() {
        this.app.use(ApiError_1.handleError);
    }
    listen(port) {
        this.app.listen(port, () => __awaiter(this, void 0, void 0, function* () { return console.log(`application started on port : ${port}`); }));
    }
}
exports.default = App;
