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
