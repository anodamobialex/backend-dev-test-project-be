"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
exports.default = {
    /**
     *
     */
    read: express_validator_1.checkSchema({
        id: {
            in: ["query"],
            optional: true,
            isString: true,
            errorMessage: "ID is wrong"
        },
        firstName: {
            in: ["query"],
            optional: true,
            isString: true,
            errorMessage: "First name is wrong"
        },
        lastName: {
            in: ["query"],
            optional: true,
            isString: true,
            errorMessage: "Last name is wrong"
        },
        age: {
            in: ["query"],
            isInt: true,
            optional: true,
            toInt: true,
            errorMessage: "Age is wrong"
        }
    }),
    /**
     *
     */
    create: express_validator_1.checkSchema({
        firstName: {
            in: ["body"],
            isString: true,
            errorMessage: "First name is wrong"
        },
        lastName: {
            in: ["body"],
            isString: true,
            errorMessage: "Last name is wrong"
        },
        age: {
            in: ["body"],
            isInt: true,
            toInt: true,
            errorMessage: "Age is wrong"
        }
    }),
    /**
     *
     */
    update: express_validator_1.checkSchema({
        id: {
            in: ["query"],
            isString: true,
            errorMessage: "ID is wrong"
        },
        firstName: {
            in: ["body"],
            optional: true,
            isString: true,
            errorMessage: "First name is wrong"
        },
        lastName: {
            in: ["body"],
            optional: true,
            isString: true,
            errorMessage: "Last name is wrong"
        },
        age: {
            in: ["body"],
            optional: true,
            isInt: true,
            toInt: true,
            errorMessage: "Age is wrong"
        }
    }),
    /**
     *
     */
    delete: express_validator_1.checkSchema({
        id: {
            in: ["query"],
            isString: true,
            customSanitizer: {
                options: function (value) {
                    console.log(typeof value);
                    return value.split(",");
                }
            },
            errorMessage: "ID is wrong"
        },
    }),
};
//# sourceMappingURL=user.js.map