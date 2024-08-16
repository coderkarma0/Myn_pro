"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/component/plan.js":
/*!***********************************!*\
  !*** ./src/app/component/plan.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardStack: function() { return /* binding */ CardStack; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _PlansCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlansCards */ \"(app-pages-browser)/./src/app/component/PlansCards.tsx\");\n/* harmony import */ var _PlansDetaIilsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlansDetaIilsCard */ \"(app-pages-browser)/./src/app/component/PlansDetaIilsCard.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n // Assuming this component handles displaying detailed info\nconst CARD_OFFSET = 120;\nconst SCALE_FACTOR = 0.06;\n// Define the tabs array\nconst CardStack = ()=>{\n    var _selectedCard_detail, _selectedCard_detail1;\n    _s();\n    const [cards, setCards] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(tabs);\n    const [selectedCard, setSelectedCard] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(tabs[0]);\n    const moveToEnd = (from)=>{\n        const updatedCards = moveItem(cards, from, cards.length - 1);\n        setCards(updatedCards);\n        setSelectedCard(updatedCards[updatedCards.length - 1]);\n    };\n    const moveNext = ()=>{\n        setCards((prevCards)=>{\n            const [first, ...rest] = prevCards;\n            const updatedCards = [\n                ...rest,\n                first\n            ];\n            setSelectedCard(updatedCards[0]); // Set the first card as the new selected card\n            return updatedCards;\n        });\n    };\n    const movePrevious = ()=>{\n        setCards((prevCards)=>{\n            const last = prevCards[prevCards.length - 1];\n            const rest = prevCards.slice(0, -1);\n            const updatedCards = [\n                last,\n                ...rest\n            ];\n            setSelectedCard(updatedCards[0]); // Set the first card as the new selected card\n            return updatedCards;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col md:flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"  flex flex-row p-4 md:w-1/2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" flex h-full w-full items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"relative flex h-full w-full items-center justify-center\",\n                            children: cards.map((card, index)=>{\n                                const canDrag = index === 0;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.li, {\n                                    className: \"absolute h-3/4 w-3/4 list-none rounded-lg md:h-3/4 md:w-1/2\",\n                                    style: {\n                                        cursor: canDrag ? \"grab\" : \"auto\"\n                                    },\n                                    animate: {\n                                        top: index * -CARD_OFFSET,\n                                        // scale: 1 - index * SCALE_FACTOR,\n                                        zIndex: cards.length - index\n                                    },\n                                    drag: canDrag ? \"y\" : false,\n                                    dragConstraints: {\n                                        top: 0,\n                                        bottom: 0\n                                    },\n                                    onDragEnd: ()=>moveToEnd(index),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlansCards__WEBPACK_IMPORTED_MODULE_2__.PlanCard, {\n                                        title: card.title,\n                                        subtitle: card.subtitle,\n                                        content: card.content,\n                                        alertMessage: card.alertMessage\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Myn_pro/src/app/component/plan.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, card.id, false, {\n                                    fileName: \"/workspaces/Myn_pro/src/app/component/plan.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/workspaces/Myn_pro/src/app/component/plan.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Myn_pro/src/app/component/plan.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 flex flex-col justify-center gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: movePrevious,\n                                className: \"rounded-lg bg-blue-500 px-4 py-2 text-white\",\n                                children: \"Previous\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Myn_pro/src/app/component/plan.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: moveNext,\n                                className: \"rounded-lg bg-blue-500 px-4 py-2 text-white\",\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Myn_pro/src/app/component/plan.js\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Myn_pro/src/app/component/plan.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Myn_pro/src/app/component/plan.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlansDetaIilsCard__WEBPACK_IMPORTED_MODULE_3__.PlanDetailsCard, {\n                    features: selectedCard === null || selectedCard === void 0 ? void 0 : (_selectedCard_detail = selectedCard.detail) === null || _selectedCard_detail === void 0 ? void 0 : _selectedCard_detail.features,\n                    title: selectedCard === null || selectedCard === void 0 ? void 0 : (_selectedCard_detail1 = selectedCard.detail) === null || _selectedCard_detail1 === void 0 ? void 0 : _selectedCard_detail1.title\n                }, void 0, false, {\n                    fileName: \"/workspaces/Myn_pro/src/app/component/plan.js\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspaces/Myn_pro/src/app/component/plan.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Myn_pro/src/app/component/plan.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardStack, \"D1W2RAjz1xIZR3nG6dIQxrmG4KE=\");\n_c = CardStack;\n// Utility function to move an item within an array\nconst moveItem = (arr, fromIndex, toIndex)=>{\n    const result = [\n        ...arr\n    ]; // Create a copy of the array\n    const [item] = result.splice(fromIndex, 1); // Remove the item from the original position\n    result.splice(toIndex, 0, item); // Insert the item at the new position\n    return result;\n};\nconst tabs = [\n    {\n        id: 1,\n        subtitle: \"Ideal for Small Teams\",\n        title: \"Starter\",\n        content: {\n            idealText: \"Businesses looking to hire a few key players\",\n            feeText: \"Typically 9%*\"\n        },\n        alertMessage: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" absolute bottom-[-113px] right-12 h-[108px] w-[396px] gap-3 rounded-xl bg-green-800 px-6 py-4 text-center font-medium text-xl leading-7 text-white\",\n            children: \"Reach 10 placements and you will automatically be upgraded to Pro for additional functionalities.\"\n        }, void 0, false, {\n            fileName: \"/workspaces/Myn_pro/src/app/component/plan.js\",\n            lineNumber: 124,\n            columnNumber: 7\n        }, undefined),\n        detail: {\n            title: \"\",\n            features: [\n                {\n                    title: \"Fully Digital Source-to-Pay Platform\",\n                    description: \"End to end employment portal optimising talent sourcing, management, payroll, retention and well-being.\"\n                },\n                {\n                    title: \"AI-Powered Candidate Scoring\",\n                    description: \"Our advanced AI algorithms rank candidates based on their fit for your roles, saving you time and effort.\"\n                },\n                {\n                    title: \"Vacancy QA\",\n                    description: \"Ensure your job postings are of the highest quality to attract the best talent.\"\n                },\n                {\n                    title: \"Candidate CV Search\",\n                    description: \"Access to the Myn Community with over 150k of active available candidates across the UK.\"\n                },\n                {\n                    title: \"In-App Communication Tools\",\n                    description: \"Seamlessly communicate with candidates without leaving the platform.\"\n                },\n                {\n                    title: \"Payroll & Timesheeting\",\n                    description: \"Effortless payroll management for your new hires.\"\n                },\n                {\n                    title: \"Compliance\",\n                    description: \"We ensure all hires meet necessary compliance standards.\"\n                },\n                {\n                    title: \"Digital Forms & Documents\",\n                    description: \"Streamline your hiring process with digital paperwork.\"\n                }\n            ]\n        }\n    },\n    {\n        id: 2,\n        subtitle: \"For Growing Businesses\",\n        title: \"Pro\",\n        content: {\n            idealText: \"Businesses with ongoing recruitment requirements\",\n            feeText: \"Typically 8%* (for more than 10 placements)\"\n        },\n        alertMessage: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" absolute bottom-[-113px] right-12 h-[108px] w-[396px] gap-3 rounded-xl bg-green-800 px-6 py-4 text-center font-medium text-xl leading-7 text-white\",\n            children: \"Enjoy reduced fees as you recruit more and increase volumes with added features included.\"\n        }, void 0, false, {\n            fileName: \"/workspaces/Myn_pro/src/app/component/plan.js\",\n            lineNumber: 183,\n            columnNumber: 7\n        }, undefined),\n        detail: {\n            title: \"All of the benefits of the Starter Package, plus:\",\n            features: [\n                {\n                    title: \"Private Talent Pool\",\n                    description: \"Build and nurture your own pool of candidates for future hiring needs.\"\n                },\n                {\n                    title: \"Custom Career Site\",\n                    description: \"Enhance your brand with a dedicated careers page tailored to your company.\"\n                },\n                {\n                    title: \"Custom Branding & Workflows\",\n                    description: \"Maintain your brand's identity across all candidate communications.\"\n                },\n                {\n                    title: \"Targeted Advertising Strategies\",\n                    description: \"Reach the right candidates with precision marketing\"\n                },\n                {\n                    title: \"Advanced Insights & Reporting\",\n                    description: \"Gain deeper insights into your recruitment process with detailed reports.\"\n                },\n                {\n                    title: \"Dedicated Success Manager\",\n                    description: \"Get personalised support to maximize your hiring success.\"\n                }\n            ]\n        }\n    },\n    {\n        id: 3,\n        subtitle: \"Tailored for Large Organisations\",\n        title: \"Enterprise\",\n        content: {\n            idealText: \"Large companies with extensive recruitment needs\",\n            feeText: \"Custom rates (fees decrease with higher recruitment volume)\"\n        },\n        alertMessage: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"icon\"\n        }, void 0, false, {\n            fileName: \"/workspaces/Myn_pro/src/app/component/plan.js\",\n            lineNumber: 231,\n            columnNumber: 18\n        }, undefined),\n        detail: {\n            title: \"Everything in the Pro Package, plus bespoke services:\",\n            features: [\n                {\n                    title: \"Market Analysis & Competitor Insights\",\n                    description: \"Stay ahead with comprehensive market and competitor analysis.\"\n                },\n                {\n                    title: \"Bespoke Service Options\",\n                    description: \"Customised solutions to fit your unique hiring needs.\"\n                },\n                {\n                    title: \"Custom Integrations\",\n                    description: \"Integrate seamlessly with your existing CRM or ATS for a unified workflow.\"\n                }\n            ]\n        }\n    }\n];\nvar _c;\n$RefreshReg$(_c, \"CardStack\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L3BsYW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFDQztBQUNjLENBQUMsMkRBQTJEO0FBRWxILE1BQU1JLGNBQWM7QUFDcEIsTUFBTUMsZUFBZTtBQUNyQix3QkFBd0I7QUFFakIsTUFBTUMsWUFBWTtRQXdGTEMsc0JBQ0hBOztJQXhGZixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1QscURBQWMsQ0FBQ1c7SUFDekMsTUFBTSxDQUFDSixjQUFjSyxnQkFBZ0IsR0FBR1oscURBQWMsQ0FBQ1csSUFBSSxDQUFDLEVBQUU7SUFFOUQsTUFBTUUsWUFBWSxDQUFDQztRQUNqQixNQUFNQyxlQUFlQyxTQUFTUixPQUFPTSxNQUFNTixNQUFNUyxNQUFNLEdBQUc7UUFDMURSLFNBQVNNO1FBQ1RILGdCQUFnQkcsWUFBWSxDQUFDQSxhQUFhRSxNQUFNLEdBQUcsRUFBRTtJQUN2RDtJQUVBLE1BQU1DLFdBQVc7UUFDZlQsU0FBUyxDQUFDVTtZQUNSLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHQyxLQUFLLEdBQUdGO1lBQ3pCLE1BQU1KLGVBQWU7bUJBQUlNO2dCQUFNRDthQUFNO1lBQ3JDUixnQkFBZ0JHLFlBQVksQ0FBQyxFQUFFLEdBQUcsOENBQThDO1lBQ2hGLE9BQU9BO1FBQ1Q7SUFDRjtJQUVBLE1BQU1PLGVBQWU7UUFDbkJiLFNBQVMsQ0FBQ1U7WUFDUixNQUFNSSxPQUFPSixTQUFTLENBQUNBLFVBQVVGLE1BQU0sR0FBRyxFQUFFO1lBQzVDLE1BQU1JLE9BQU9GLFVBQVVLLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDakMsTUFBTVQsZUFBZTtnQkFBQ1E7bUJBQVNGO2FBQUs7WUFDcENULGdCQUFnQkcsWUFBWSxDQUFDLEVBQUUsR0FBRyw4Q0FBOEM7WUFDaEYsT0FBT0E7UUFDVDtJQUNGO0lBRUEscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDRDtnQkFB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WUFDTlIsT0FBTztZQUNQTyxVQUFVO2dCQUNSO29CQUNFUCxPQUFPO29CQUNQaUIsYUFDRTtnQkFDSjtnQkFDQTtvQkFDRWpCLE9BQU87b0JBQ1BpQixhQUNFO2dCQUNKO2dCQUNBO29CQUNFakIsT0FBTztvQkFDUGlCLGFBQ0U7Z0JBQ0o7Z0JBQ0E7b0JBQ0VqQixPQUFPO29CQUNQaUIsYUFBYTtnQkFDZjtnQkFDQTtvQkFDRWpCLE9BQU87b0JBQ1BpQixhQUNFO2dCQUNKO2dCQUNBO29CQUNFakIsT0FBTztvQkFDUGlCLGFBQ0U7Z0JBQ0o7YUFDRDtRQUNIO0lBQ0Y7SUFDQTtRQUNFYixJQUFJO1FBQ0pILFVBQVU7UUFDVkQsT0FBTztRQUNQRSxTQUFTO1lBQ1BhLFdBQVc7WUFDWEMsU0FBUztRQUNYO1FBQ0FiLDRCQUFhLDhEQUFDcEI7c0JBQUk7Ozs7OztRQUdsQnlCLFFBQVE7WUFDTlIsT0FBTztZQUNQTyxVQUFVO2dCQUNSO29CQUNFUCxPQUFPO29CQUNQaUIsYUFDRTtnQkFDSjtnQkFDQTtvQkFDRWpCLE9BQU87b0JBQ1BpQixhQUFhO2dCQUNmO2dCQUNBO29CQUNFakIsT0FBTztvQkFDUGlCLGFBQ0U7Z0JBQ0o7YUFDRDtRQUNIO0lBQ0Y7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudC9wbGFuLmpzP2MxY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IFBsYW5DYXJkIH0gZnJvbSBcIi4vUGxhbnNDYXJkc1wiO1xuaW1wb3J0IHsgUGxhbkRldGFpbHNDYXJkIH0gZnJvbSBcIi4vUGxhbnNEZXRhSWlsc0NhcmRcIjsgLy8gQXNzdW1pbmcgdGhpcyBjb21wb25lbnQgaGFuZGxlcyBkaXNwbGF5aW5nIGRldGFpbGVkIGluZm9cblxuY29uc3QgQ0FSRF9PRkZTRVQgPSAxMjA7XG5jb25zdCBTQ0FMRV9GQUNUT1IgPSAwLjA2O1xuLy8gRGVmaW5lIHRoZSB0YWJzIGFycmF5XG5cbmV4cG9ydCBjb25zdCBDYXJkU3RhY2sgPSAoKSA9PiB7XG4gIGNvbnN0IFtjYXJkcywgc2V0Q2FyZHNdID0gUmVhY3QudXNlU3RhdGUodGFicyk7XG4gIGNvbnN0IFtzZWxlY3RlZENhcmQsIHNldFNlbGVjdGVkQ2FyZF0gPSBSZWFjdC51c2VTdGF0ZSh0YWJzWzBdKTtcblxuICBjb25zdCBtb3ZlVG9FbmQgPSAoZnJvbSkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRDYXJkcyA9IG1vdmVJdGVtKGNhcmRzLCBmcm9tLCBjYXJkcy5sZW5ndGggLSAxKTtcbiAgICBzZXRDYXJkcyh1cGRhdGVkQ2FyZHMpO1xuICAgIHNldFNlbGVjdGVkQ2FyZCh1cGRhdGVkQ2FyZHNbdXBkYXRlZENhcmRzLmxlbmd0aCAtIDFdKTtcbiAgfTtcblxuICBjb25zdCBtb3ZlTmV4dCA9ICgpID0+IHtcbiAgICBzZXRDYXJkcygocHJldkNhcmRzKSA9PiB7XG4gICAgICBjb25zdCBbZmlyc3QsIC4uLnJlc3RdID0gcHJldkNhcmRzO1xuICAgICAgY29uc3QgdXBkYXRlZENhcmRzID0gWy4uLnJlc3QsIGZpcnN0XTtcbiAgICAgIHNldFNlbGVjdGVkQ2FyZCh1cGRhdGVkQ2FyZHNbMF0pOyAvLyBTZXQgdGhlIGZpcnN0IGNhcmQgYXMgdGhlIG5ldyBzZWxlY3RlZCBjYXJkXG4gICAgICByZXR1cm4gdXBkYXRlZENhcmRzO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVQcmV2aW91cyA9ICgpID0+IHtcbiAgICBzZXRDYXJkcygocHJldkNhcmRzKSA9PiB7XG4gICAgICBjb25zdCBsYXN0ID0gcHJldkNhcmRzW3ByZXZDYXJkcy5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnN0IHJlc3QgPSBwcmV2Q2FyZHMuc2xpY2UoMCwgLTEpO1xuICAgICAgY29uc3QgdXBkYXRlZENhcmRzID0gW2xhc3QsIC4uLnJlc3RdO1xuICAgICAgc2V0U2VsZWN0ZWRDYXJkKHVwZGF0ZWRDYXJkc1swXSk7IC8vIFNldCB0aGUgZmlyc3QgY2FyZCBhcyB0aGUgbmV3IHNlbGVjdGVkIGNhcmRcbiAgICAgIHJldHVybiB1cGRhdGVkQ2FyZHM7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3dcIj5cbiAgICAgIHsvKiBDYXJkIFN0YWNrIGFuZCBOYXZpZ2F0aW9uICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgIGZsZXggZmxleC1yb3cgcC00IG1kOnctMS8yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggaC1mdWxsIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLWZ1bGwgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAge2NhcmRzLm1hcCgoY2FyZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY2FuRHJhZyA9IGluZGV4ID09PSAwO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgICAgICAgICAga2V5PXtjYXJkLmlkfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaC0zLzQgdy0zLzQgbGlzdC1ub25lIHJvdW5kZWQtbGcgbWQ6aC0zLzQgbWQ6dy0xLzJcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBjYW5EcmFnID8gXCJncmFiXCIgOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogaW5kZXggKiAtQ0FSRF9PRkZTRVQsXG4gICAgICAgICAgICAgICAgICAgIC8vIHNjYWxlOiAxIC0gaW5kZXggKiBTQ0FMRV9GQUNUT1IsXG5cbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBjYXJkcy5sZW5ndGggLSBpbmRleCxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBkcmFnPXtjYW5EcmFnID8gXCJ5XCIgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIGRyYWdDb25zdHJhaW50cz17e1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbkRyYWdFbmQ9eygpID0+IG1vdmVUb0VuZChpbmRleCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFBsYW5DYXJkXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjYXJkLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZT17Y2FyZC5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17Y2FyZC5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICBhbGVydE1lc3NhZ2U9e2NhcmQuYWxlcnRNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e21vdmVQcmV2aW91c31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctYmx1ZS01MDAgcHgtNCBweS0yIHRleHQtd2hpdGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFByZXZpb3VzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17bW92ZU5leHR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWJsdWUtNTAwIHB4LTQgcHktMiB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBOZXh0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBDYXJkIERldGFpbHMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8UGxhbkRldGFpbHNDYXJkXG4gICAgICAgICAgZmVhdHVyZXM9e3NlbGVjdGVkQ2FyZD8uZGV0YWlsPy5mZWF0dXJlc31cbiAgICAgICAgICB0aXRsZT17c2VsZWN0ZWRDYXJkPy5kZXRhaWw/LnRpdGxlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyBVdGlsaXR5IGZ1bmN0aW9uIHRvIG1vdmUgYW4gaXRlbSB3aXRoaW4gYW4gYXJyYXlcbmNvbnN0IG1vdmVJdGVtID0gKGFyciwgZnJvbUluZGV4LCB0b0luZGV4KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IFsuLi5hcnJdOyAvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBhcnJheVxuICBjb25zdCBbaXRlbV0gPSByZXN1bHQuc3BsaWNlKGZyb21JbmRleCwgMSk7IC8vIFJlbW92ZSB0aGUgaXRlbSBmcm9tIHRoZSBvcmlnaW5hbCBwb3NpdGlvblxuICByZXN1bHQuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pOyAvLyBJbnNlcnQgdGhlIGl0ZW0gYXQgdGhlIG5ldyBwb3NpdGlvblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgdGFicyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHN1YnRpdGxlOiBcIklkZWFsIGZvciBTbWFsbCBUZWFtc1wiLFxuICAgIHRpdGxlOiBcIlN0YXJ0ZXJcIixcbiAgICBjb250ZW50OiB7XG4gICAgICBpZGVhbFRleHQ6IFwiQnVzaW5lc3NlcyBsb29raW5nIHRvIGhpcmUgYSBmZXcga2V5IHBsYXllcnNcIixcbiAgICAgIGZlZVRleHQ6IFwiVHlwaWNhbGx5IDklKlwiLFxuICAgIH0sXG4gICAgYWxlcnRNZXNzYWdlOiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBhYnNvbHV0ZSBib3R0b20tWy0xMTNweF0gcmlnaHQtMTIgaC1bMTA4cHhdIHctWzM5NnB4XSBnYXAtMyByb3VuZGVkLXhsIGJnLWdyZWVuLTgwMCBweC02IHB5LTQgdGV4dC1jZW50ZXIgZm9udC1tZWRpdW0gdGV4dC14bCBsZWFkaW5nLTcgdGV4dC13aGl0ZVwiPlxuICAgICAgICBSZWFjaCAxMCBwbGFjZW1lbnRzIGFuZCB5b3Ugd2lsbCBhdXRvbWF0aWNhbGx5IGJlIHVwZ3JhZGVkIHRvIFBybyBmb3JcbiAgICAgICAgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXRpZXMuXG4gICAgICA8L2Rpdj5cbiAgICApLFxuXG4gICAgZGV0YWlsOiB7XG4gICAgICB0aXRsZTogXCJcIixcbiAgICAgIGZlYXR1cmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJGdWxseSBEaWdpdGFsIFNvdXJjZS10by1QYXkgUGxhdGZvcm1cIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiRW5kIHRvIGVuZCBlbXBsb3ltZW50IHBvcnRhbCBvcHRpbWlzaW5nIHRhbGVudCBzb3VyY2luZywgbWFuYWdlbWVudCwgcGF5cm9sbCwgcmV0ZW50aW9uIGFuZCB3ZWxsLWJlaW5nLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IFwiQUktUG93ZXJlZCBDYW5kaWRhdGUgU2NvcmluZ1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJPdXIgYWR2YW5jZWQgQUkgYWxnb3JpdGhtcyByYW5rIGNhbmRpZGF0ZXMgYmFzZWQgb24gdGhlaXIgZml0IGZvciB5b3VyIHJvbGVzLCBzYXZpbmcgeW91IHRpbWUgYW5kIGVmZm9ydC5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIlZhY2FuY3kgUUFcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiRW5zdXJlIHlvdXIgam9iIHBvc3RpbmdzIGFyZSBvZiB0aGUgaGlnaGVzdCBxdWFsaXR5IHRvIGF0dHJhY3QgdGhlIGJlc3QgdGFsZW50LlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IFwiQ2FuZGlkYXRlIENWIFNlYXJjaFwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJBY2Nlc3MgdG8gdGhlIE15biBDb21tdW5pdHkgd2l0aCBvdmVyIDE1MGsgb2YgYWN0aXZlIGF2YWlsYWJsZSBjYW5kaWRhdGVzIGFjcm9zcyB0aGUgVUsuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJJbi1BcHAgQ29tbXVuaWNhdGlvbiBUb29sc1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJTZWFtbGVzc2x5IGNvbW11bmljYXRlIHdpdGggY2FuZGlkYXRlcyB3aXRob3V0IGxlYXZpbmcgdGhlIHBsYXRmb3JtLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IFwiUGF5cm9sbCAmIFRpbWVzaGVldGluZ1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkVmZm9ydGxlc3MgcGF5cm9sbCBtYW5hZ2VtZW50IGZvciB5b3VyIG5ldyBoaXJlcy5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIkNvbXBsaWFuY2VcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiV2UgZW5zdXJlIGFsbCBoaXJlcyBtZWV0IG5lY2Vzc2FyeSBjb21wbGlhbmNlIHN0YW5kYXJkcy5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIkRpZ2l0YWwgRm9ybXMgJiBEb2N1bWVudHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTdHJlYW1saW5lIHlvdXIgaGlyaW5nIHByb2Nlc3Mgd2l0aCBkaWdpdGFsIHBhcGVyd29yay5cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHN1YnRpdGxlOiBcIkZvciBHcm93aW5nIEJ1c2luZXNzZXNcIixcbiAgICB0aXRsZTogXCJQcm9cIixcbiAgICBjb250ZW50OiB7XG4gICAgICBpZGVhbFRleHQ6IFwiQnVzaW5lc3NlcyB3aXRoIG9uZ29pbmcgcmVjcnVpdG1lbnQgcmVxdWlyZW1lbnRzXCIsXG4gICAgICBmZWVUZXh0OiBcIlR5cGljYWxseSA4JSogKGZvciBtb3JlIHRoYW4gMTAgcGxhY2VtZW50cylcIixcbiAgICB9LFxuICAgIGFsZXJ0TWVzc2FnZTogKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYWJzb2x1dGUgYm90dG9tLVstMTEzcHhdIHJpZ2h0LTEyIGgtWzEwOHB4XSB3LVszOTZweF0gZ2FwLTMgcm91bmRlZC14bCBiZy1ncmVlbi04MDAgcHgtNiBweS00IHRleHQtY2VudGVyIGZvbnQtbWVkaXVtIHRleHQteGwgbGVhZGluZy03IHRleHQtd2hpdGVcIj5cbiAgICAgICAgRW5qb3kgcmVkdWNlZCBmZWVzIGFzIHlvdSByZWNydWl0IG1vcmUgYW5kIGluY3JlYXNlIHZvbHVtZXMgd2l0aCBhZGRlZFxuICAgICAgICBmZWF0dXJlcyBpbmNsdWRlZC5cbiAgICAgIDwvZGl2PlxuICAgICksXG4gICAgZGV0YWlsOiB7XG4gICAgICB0aXRsZTogXCJBbGwgb2YgdGhlIGJlbmVmaXRzIG9mIHRoZSBTdGFydGVyIFBhY2thZ2UsIHBsdXM6XCIsXG4gICAgICBmZWF0dXJlczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IFwiUHJpdmF0ZSBUYWxlbnQgUG9vbFwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJCdWlsZCBhbmQgbnVydHVyZSB5b3VyIG93biBwb29sIG9mIGNhbmRpZGF0ZXMgZm9yIGZ1dHVyZSBoaXJpbmcgbmVlZHMuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJDdXN0b20gQ2FyZWVyIFNpdGVcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiRW5oYW5jZSB5b3VyIGJyYW5kIHdpdGggYSBkZWRpY2F0ZWQgY2FyZWVycyBwYWdlIHRhaWxvcmVkIHRvIHlvdXIgY29tcGFueS5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIkN1c3RvbSBCcmFuZGluZyAmIFdvcmtmbG93c1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJNYWludGFpbiB5b3VyIGJyYW5kJ3MgaWRlbnRpdHkgYWNyb3NzIGFsbCBjYW5kaWRhdGUgY29tbXVuaWNhdGlvbnMuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJUYXJnZXRlZCBBZHZlcnRpc2luZyBTdHJhdGVnaWVzXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiUmVhY2ggdGhlIHJpZ2h0IGNhbmRpZGF0ZXMgd2l0aCBwcmVjaXNpb24gbWFya2V0aW5nXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJBZHZhbmNlZCBJbnNpZ2h0cyAmIFJlcG9ydGluZ1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJHYWluIGRlZXBlciBpbnNpZ2h0cyBpbnRvIHlvdXIgcmVjcnVpdG1lbnQgcHJvY2VzcyB3aXRoIGRldGFpbGVkIHJlcG9ydHMuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJEZWRpY2F0ZWQgU3VjY2VzcyBNYW5hZ2VyXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIkdldCBwZXJzb25hbGlzZWQgc3VwcG9ydCB0byBtYXhpbWl6ZSB5b3VyIGhpcmluZyBzdWNjZXNzLlwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgc3VidGl0bGU6IFwiVGFpbG9yZWQgZm9yIExhcmdlIE9yZ2FuaXNhdGlvbnNcIixcbiAgICB0aXRsZTogXCJFbnRlcnByaXNlXCIsXG4gICAgY29udGVudDoge1xuICAgICAgaWRlYWxUZXh0OiBcIkxhcmdlIGNvbXBhbmllcyB3aXRoIGV4dGVuc2l2ZSByZWNydWl0bWVudCBuZWVkc1wiLFxuICAgICAgZmVlVGV4dDogXCJDdXN0b20gcmF0ZXMgKGZlZXMgZGVjcmVhc2Ugd2l0aCBoaWdoZXIgcmVjcnVpdG1lbnQgdm9sdW1lKVwiLFxuICAgIH0sXG4gICAgYWxlcnRNZXNzYWdlOjxkaXY+XG4gICAgICAgIGljb25cbiAgICA8L2Rpdj4sXG4gICAgZGV0YWlsOiB7XG4gICAgICB0aXRsZTogXCJFdmVyeXRoaW5nIGluIHRoZSBQcm8gUGFja2FnZSwgcGx1cyBiZXNwb2tlIHNlcnZpY2VzOlwiLFxuICAgICAgZmVhdHVyZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIk1hcmtldCBBbmFseXNpcyAmIENvbXBldGl0b3IgSW5zaWdodHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiU3RheSBhaGVhZCB3aXRoIGNvbXByZWhlbnNpdmUgbWFya2V0IGFuZCBjb21wZXRpdG9yIGFuYWx5c2lzLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IFwiQmVzcG9rZSBTZXJ2aWNlIE9wdGlvbnNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXN0b21pc2VkIHNvbHV0aW9ucyB0byBmaXQgeW91ciB1bmlxdWUgaGlyaW5nIG5lZWRzLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IFwiQ3VzdG9tIEludGVncmF0aW9uc1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJJbnRlZ3JhdGUgc2VhbWxlc3NseSB3aXRoIHlvdXIgZXhpc3RpbmcgQ1JNIG9yIEFUUyBmb3IgYSB1bmlmaWVkIHdvcmtmbG93LlwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIlBsYW5DYXJkIiwiUGxhbkRldGFpbHNDYXJkIiwiQ0FSRF9PRkZTRVQiLCJTQ0FMRV9GQUNUT1IiLCJDYXJkU3RhY2siLCJzZWxlY3RlZENhcmQiLCJjYXJkcyIsInNldENhcmRzIiwidXNlU3RhdGUiLCJ0YWJzIiwic2V0U2VsZWN0ZWRDYXJkIiwibW92ZVRvRW5kIiwiZnJvbSIsInVwZGF0ZWRDYXJkcyIsIm1vdmVJdGVtIiwibGVuZ3RoIiwibW92ZU5leHQiLCJwcmV2Q2FyZHMiLCJmaXJzdCIsInJlc3QiLCJtb3ZlUHJldmlvdXMiLCJsYXN0Iiwic2xpY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsIm1hcCIsImNhcmQiLCJpbmRleCIsImNhbkRyYWciLCJsaSIsInN0eWxlIiwiY3Vyc29yIiwiYW5pbWF0ZSIsInRvcCIsInpJbmRleCIsImRyYWciLCJkcmFnQ29uc3RyYWludHMiLCJib3R0b20iLCJvbkRyYWdFbmQiLCJ0aXRsZSIsInN1YnRpdGxlIiwiY29udGVudCIsImFsZXJ0TWVzc2FnZSIsImlkIiwiYnV0dG9uIiwib25DbGljayIsImZlYXR1cmVzIiwiZGV0YWlsIiwiYXJyIiwiZnJvbUluZGV4IiwidG9JbmRleCIsInJlc3VsdCIsIml0ZW0iLCJzcGxpY2UiLCJpZGVhbFRleHQiLCJmZWVUZXh0IiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/plan.js\n"));

/***/ })

});