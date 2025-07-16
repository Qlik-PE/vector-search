define([], function () {
    'use strict';

    return {
        type: "items",
        component: "accordion",
        items: {
            configPanel: {
                use: "settings",
                items: {
                    automation: {
                        ref: "searchConfig.endpoint",
                        label: "Qlik Automate URL",
                        type: "string",
                        defaultValue: "<<Your Qlik Automate URL>>",
                    },
                    authenticationToken: {
                        ref: "searchConfig.authenticationToken",
                        label: "Authentication Token (from your Automation)",
                        type: "string",
                        defaultValue: "<<Your Authentication Token>>",
                    },
                    searchField: {
                        ref: "searchConfig.searchField",
                        label: "Dimension Field",
                        type: "string",
                        defaultValue: ""
                    },
                    searchQuery: {
                        ref: "searchConfig.searchQuery",
                        label: "Search Query (will be appended to the input value)",
                        type: "string",
                        defaultValue: "List me the movies with the highest rating that "
                    },
                    buttonCaption: {
                        type: "string",
                        ref: "searchConfig.buttonCaption",
                        label: "Button Caption",
                        defaultValue: "Vector Search"
                    },
                    searchExpression: {
                        type: "string",
                        expression: "optional",
                        ref: "searchConfig.searchExpression",
                        label: "Default Search Expression",
                        defaultValue: "Your search expression here"
                    },
                    searchExpression: {
                        type: "string",
                        expression: "optional",
                        ref: "searchConfig.varianceValue",
                        label: "Minimum Variance Value",
                        defaultValue: "0.5"
                    }
                }
            }
        }
            // searchConfig: {
            //     type: "items",
            //     label: "Search Configuration",
            //     items: {
            //         searchField: {
            //             ref: "searchConfig.searchField",
            //             label: "Dimension Field",
            //             type: "string",
            //             defaultValue: ""
            //         },
            //         searchQuery: {
            //             ref: "searchConfig.searchQuery",
            //             label: "Search Query",
            //             type: "string",
            //             defaultValue: "List me the movies with the highest rating that "
            //         }
            //     }
            // },
            //     displayConfig: {
            //         type: "items",
            //         label: "Display Configuration",
            //         items: {
            //             buttonCaption: {
            //                 type: "string",
            //                 ref: "displayConfig.buttonCaption",
            //                 label: "Button Caption",
            //                 defaultValue: "Vector Search"
            //             },
            //             searchExpression: {
            //                 type: "string",
            //                 expression: "optional",
            //                 ref: "displayConfig.searchExpression",
            //                 label: "default Search Expression",
            //                 defaultValue: "Your search expression here"
            //             }
            //         }
            //     }
            // }
        };
    });


