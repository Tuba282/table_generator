#! /usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from "inquirer";
function table_generator() {
    return __awaiter(this, void 0, void 0, function* () {
        const desired_number = yield inquirer.prompt([
            {
                message: "Enter your disre number to generate its table :",
                type: "number",
                name: "num",
            },
        ]);
        for (let i = 0; i <= 12; i++) {
            console.log(`\t\t${desired_number.num} * ${i} = ${desired_number.num * i}`);
        }
    });
}
table_generator();
