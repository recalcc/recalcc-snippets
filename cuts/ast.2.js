// function f(a,b) { return a>b ? 1 : 0 }


{
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "f"
            },
            "params": [
                {
                    "type": "Identifier",
                    "name": "a"
                },
                {
                    "type": "Identifier",
                    "name": "b"
                }
            ],
            "defaults": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ReturnStatement",
                        "argument": {
                            "type": "ConditionalExpression",
                            "test": {
                                "type": "BinaryExpression",
                                "operator": ">",
                                "left": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "right": {
                                    "type": "Identifier",
                                    "name": "b"
                                }
                            },
                            "consequent": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            },
                            "alternate": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                            }
                        }
                    }
                ]
            },
            "rest": null,
            "generator": false,
            "expression": false
        }
    ]
}

// myfunc(42);

{
    "type": "Program",
    "body": [
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "CallExpression",
                "callee": {
                    "type": "Identifier",
                    "name": "myfunc"
                },
                "arguments": [
                    {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42"
                    }
                ]
            }
        }
    ]
}

// myfunc(a);

{
    "type": "Program",
    "body": [
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "CallExpression",
                "callee": {
                    "type": "Identifier",
                    "name": "myfunc"
                },
                "arguments": [
                    {
                        "type": "Identifier",
                        "name": "a"
                    }
                ]
            }
        }
    ]
}

// function f(a,b) { return a>b ? 1 : myfunc(0) }

{
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "f"
            },
            "params": [
                {
                    "type": "Identifier",
                    "name": "a"
                },
                {
                    "type": "Identifier",
                    "name": "b"
                }
            ],
            "defaults": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ReturnStatement",
                        "argument": {
                            "type": "ConditionalExpression",
                            "test": {
                                "type": "BinaryExpression",
                                "operator": ">",
                                "left": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "right": {
                                    "type": "Identifier",
                                    "name": "b"
                                }
                            },
                            "consequent": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                            },
                            "alternate": {
                                "type": "CallExpression",
                                "callee": {
                                    "type": "Identifier",
                                    "name": "myfunc"
                                },
                                "arguments": [
                                    {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            "rest": null,
            "generator": false,
            "expression": false
        }
    ]
}

// function f() {return 2+2}

{
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "f"
            },
            "params": [],
            "defaults": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ReturnStatement",
                        "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                            },
                            "right": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                            }
                        }
                    }
                ]
            },
            "rest": null,
            "generator": false,
            "expression": false
        }
    ]
}

function f() { return func(2+2) }

{
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "f"
            },
            "params": [],
            "defaults": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ReturnStatement",
                        "argument": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "Identifier",
                                "name": "func"
                            },
                            "arguments": [
                                {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2"
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2"
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "rest": null,
            "generator": false,
            "expression": false
        }
    ]
}


// a[2]

{
    "type": "Program",
    "body": [
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                    "type": "Identifier",
                    "name": "a"
                },
                "property": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2"
                }
            }
        }
    ]
}

////

{
    "type": "Program",
    "body": [{
        "type": "ExpressionStatement",
        "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
                "type": "Identifier",
                "name": "f"
            },
            "right": {
                "type": "FunctionExpression",
                "id": null,
                "params": [{
                    "type": "Identifier",
                    "name": "a"
                }],
                "defaults": [],
                "body": {
                    "type": "BlockStatement",
                    "body": [{
                        "type": "ReturnStatement",
                        "argument": {
                            "type": "ConditionalExpression",
                            "test": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                    "type": "UnaryExpression",
                                    "operator": "!",
                                    "argument": {
                                        "type": "Literal",
                                        "value": 6.656572590582073,
                                        "raw": "6.656572590582073"
                                    },
                                    "prefix": true
                                },
                                "right": {
                                    "type": "Identifier",
                                    "name": "a"
                                }
                            },
                            "consequent": {
                                "type": "ConditionalExpression",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "-",
                                    "left": {
                                        "type": "Literal",
                                        "value": 5.949997692368925,
                                        "raw": "5.949997692368925"
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": 6.533558175433427,
                                        "raw": "6.533558175433427"
                                    }
                                },
                                "consequent": {
                                    "type": "Literal",
                                    "value": 4.943285451736301,
                                    "raw": "4.943285451736301"
                                },
                                "alternate": {
                                    "type": "BinaryExpression",
                                    "operator": "-",
                                    "left": {
                                        "type": "Literal",
                                        "value": 5.6852072034962475,
                                        "raw": "5.6852072034962475"
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": false,
                                        "raw": "false"
                                    }
                                }
                            },
                            "alternate": {
                                "type": "Literal",
                                "value": 0.7817720482125878,
                                "raw": "0.7817720482125878"
                            }
                        }
                    }]
                },
                "rest": null,
                "generator": false,
                "expression": false
            }
        }
    }]
}


///

[
    ["crto", "Program"],
    ["crto.body.0", "ExpressionStatement"],
    ["crto.body.0.expression", "AssignmentExpression"],
    ["crto.body.0.expression.left", "Identifier"],
    ["crto.body.0.expression.right", "FunctionExpression"],
    ["crto.body.0.expression.right.params.0", "Identifier"],
    ["crto.body.0.expression.right.body", "BlockStatement"],
    ["crto.body.0.expression.right.body.body.0", "ReturnStatement"],
    ["crto.body.0.expression.right.body.body.0.argument", "ConditionalExpression"],
    ["crto.body.0.expression.right.body.body.0.argument.test", "BinaryExpression"],
    ["crto.body.0.expression.right.body.body.0.argument.test.left", "UnaryExpression"],
    ["crto.body.0.expression.right.body.body.0.argument.test.left.argument", "Literal"],
    ["crto.body.0.expression.right.body.body.0.argument.test.right", "Identifier"],
    ["crto.body.0.expression.right.body.body.0.argument.consequent", "ConditionalExpression"],
    ["crto.body.0.expression.right.body.body.0.argument.consequent.test", "BinaryExpression"],
    ["crto.body.0.expression.right.body.body.0.argument.consequent.test.left", "Literal"],
    ["crto.body.0.expression.right.body.body.0.argument.consequent.test.right", "Literal"],
    ["crto.body.0.expression.right.body.body.0.argument.consequent.consequent", "Literal"],
    ["crto.body.0.expression.right.body.body.0.argument.consequent.alternate", "BinaryExpression"],
    ["crto.body.0.expression.right.body.body.0.argument.consequent.alternate.left", "Literal"],
    ["crto.body.0.expression.right.body.body.0.argument.consequent.alternate.right", "Literal"],
    ["crto.body.0.expression.right.body.body.0.argument.alternate", "Literal"]
]

// 