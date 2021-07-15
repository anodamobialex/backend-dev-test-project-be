import {checkSchema} from "express-validator";
import qs from "query-string"

export default {

    /**
     *
     */
    read: checkSchema({
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
    create: checkSchema({
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
    update: checkSchema({
        id: {
            in: ["query"],
            isString: true,
            errorMessage: "ID is wrong"
        },
        firstName: {
            in: ["body"],
            optional:true,
            isString: true,
            errorMessage: "First name is wrong"
        },
        lastName: {
            in: ["body"],
            optional:true,
            isString: true,
            errorMessage: "Last name is wrong"
        },
        age: {
            in: ["body"],
            optional:true,
            isInt: true,
            toInt: true,
            errorMessage: "Age is wrong"
        }
    }),

    /**
     *
     */
    delete: checkSchema({
        id: {
            in: ["query"],
            isString: true,
            customSanitizer: {
                options: value => {
                    console.log(typeof value)
                    return value.split(",")
                }
            },
            errorMessage: "ID is wrong"
        },
    }),
}