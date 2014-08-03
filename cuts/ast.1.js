// function f(a,b) { return MAGIC }


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
                        // "argument": {} // MAGIC
                    }
                ]
            },
            "rest": null,
            "generator": false,
            "expression": false
        }
    ]
}

// namedfundshell

{
    "type": "Program",
    "body": [
        {
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
                                "argument": { MAGIC : 1  }
                            }
                        ]
                    },
                    "rest": null,
                    "generator": false,
                    "expression": false
                }
            }
        }
    ]
}