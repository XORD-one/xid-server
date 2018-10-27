define({ "api": [
  {
    "type": "post",
    "url": "/acceptFriendRequest",
    "title": "Accept friend request",
    "name": "acceptFriendRequest",
    "group": "Client",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Key for API authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Request ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Success/Error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n     \"status\": \"Success\",\n     \"message\": \"Request accepted\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"status\": \"Error\",\n   \"message\": \"Invalid API Key\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "D:/Expendive/Workspace/NodeJS/SLSHServer/app.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/cancelFriendRequest",
    "title": "Cancel friend request",
    "name": "cancelFriendRequest",
    "group": "Client",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Key for API authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Request ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Success/Error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n     \"status\": \"Success\",\n     \"message\": \"Request cancelled\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"status\": \"Error\",\n   \"message\": \"Invalid API Key\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "D:/Expendive/Workspace/NodeJS/SLSHServer/app.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/getAllFriends",
    "title": "Get all friends of a user",
    "name": "getAllFriends",
    "group": "Client",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Key for API authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Username.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Success/Error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "body",
            "description": "<p>Response Object[].</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n     \"status\": \"Success\",\n     \"message\": \"Friends fetched\",\n     \"body\": [\n           {\n               userName: \"user\",\n               name: \"User\",\n               age: \"21\"\n           },\n           {\n               userName: \"user\",\n               name: \"User\",\n               age: \"21\"\n           },\n           {\n               userName: \"user\",\n               name: \"User\",\n               age: \"21\"\n           }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"status\": \"Error\",\n   \"message\": \"Invalid API Key\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "D:/Expendive/Workspace/NodeJS/SLSHServer/app.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/getAllUsers",
    "title": "Get all users",
    "name": "getAllUsers",
    "group": "Client",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Key for API authentication.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Success/Error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "body",
            "description": "<p>Response Object[].</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n     \"status\": \"Success\",\n     \"message\": \"Friends fetched\",\n     \"body\": [\n           {\n               userName: \"user\",\n               name: \"User\",\n               age: \"21\",\n           },\n           {\n               userName: \"user\",\n               name: \"User\",\n               age: \"21\",\n           },\n           {\n               userName: \"user\",\n               name: \"User\",\n               age: \"21\",\n           }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"status\": \"Error\",\n   \"message\": \"Invalid API Key\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "D:/Expendive/Workspace/NodeJS/SLSHServer/app.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/getFriendRequests",
    "title": "Get all friend requests of a user",
    "name": "getFriendRequests",
    "group": "Client",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Key for API authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Username.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Success/Error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "body",
            "description": "<p>Response Object[].</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n     \"status\": \"Success\",\n     \"message\": \"Friend requests fetched\",\n     \"body\": [\n           {\n               id: \"REQ-sdfdfd-zvdgdg-arereggdd\",\n                  userName: \"user\",\n                  userFullName: \"User\",\n                  date: 1345674343,\n                  typeId: 1,\n           },\n           {\n               id: \"REQ-sdfdfd-zvdgdg-arereggdd\",\n                  userName: \"user\",\n                  userFullName: \"User\",\n                  date: 1345674343,\n                  typeId: 1,\n           },\n           {\n               id: \"REQ-sdfdfd-zvdgdg-arereggdd\",\n                  userName: \"user\",\n                  userFullName: \"User\",\n                  date: 1345674343,\n                  typeId: 0,\n           }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"status\": \"Error\",\n   \"message\": \"Invalid API Key\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "D:/Expendive/Workspace/NodeJS/SLSHServer/app.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/getLocation",
    "title": "Get location of a user",
    "name": "getLocation",
    "group": "Client",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Key for API authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Username of user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Success/Error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Response Object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n     \"status\": \"Success\",\n     \"message\": \"Location fetched\",\n     \"body\": {\n           latitude: \"67.5456\",\n           longitude: \"68.6634\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"status\": \"Error\",\n   \"message\": \"Invalid API Key\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "D:/Expendive/Workspace/NodeJS/SLSHServer/app.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/getMinimalUser",
    "title": "Get minimal user",
    "name": "getMinimalUser",
    "group": "Client",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Key for API authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Username.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Success/Error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Response Object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n     \"status\": \"Success\",\n     \"message\": \"User profile fetched\",\n     \"body\": {\n           userName: \"user\",\n           name: \"User\",\n           age: 21,\n           description: \"Description\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"status\": \"Error\",\n   \"message\": \"Invalid API Key\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "D:/Expendive/Workspace/NodeJS/SLSHServer/app.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/getMovementStatus",
    "title": "Get movement status of a user",
    "name": "getMovementStatus",
    "group": "Client",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Key for API authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Username of user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Success/Error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Response Object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n     \"status\": \"Success\",\n     \"message\": \"Movement Status fetched\",\n     \"body\": {\n           isInMotion = true\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"status\": \"Error\",\n   \"message\": \"Invalid API Key\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "D:/Expendive/Workspace/NodeJS/SLSHServer/app.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/getUser",
    "title": "Get user",
    "name": "getUser",
    "group": "Client",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Key for API authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Username.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Success/Error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Response Object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n     \"status\": \"Success\",\n     \"message\": \"User profile fetched\",\n     \"body\": {\n           userName: \"user\",\n           name: \"User\",\n           age: 21,\n           description: \"Description\",\n           location: \"87.5436,67.53567\",\n           isInMotion: false,\n           locationHistory: [\n               \"87.5436,67.53567\",\n               \"87.5436,67.53567\",\n               \"87.5436,67.53567\"\n           ],\n           locationFriends: [\n               \"USER-24gdgdgh-fdgsds-4343dggd\",\n               \"USER-24gdgdgh-fdgsds-4343dggd\",\n               \"USER-24gdgdgh-fdgsds-4343dggd\",\n           ],\n           motionFriends: [\n               \"USER-24gdgdgh-fdgsds-4343dggd\",\n               \"USER-24gdgdgh-fdgsds-4343dggd\",\n               \"USER-24gdgdgh-fdgsds-4343dggd\",\n           ],\n           receivedRequests: [\n               {\n                   id: \"REQ-gfg-dfgdf3-fdgd3\",\n                   userName: \"USER-24gdgdgh-fdgsds-4343dggd\",\n                   date: 24562345,\n                   typeId: 0\n               },\n               {\n                   id: \"REQ-gfg-dfgdf3-fdgd3\",\n                   userName: \"USER-24gdgdgh-fdgsds-4343dggd\",\n                   date: 24562345,\n                   typeId: 0\n               }\n           ],\n           sentRequests: [\n               {\n                   id: \"REQ-gfg-dfgdf3-fdgd3\",\n                   userName: \"USER-24gdgdgh-fdgsds-4343dggd\",\n                   date: 24562345,\n                   typeId: 0\n               },\n               {\n                   id: \"REQ-gfg-dfgdf3-fdgd3\",\n                   userName: \"USER-24gdgdgh-fdgsds-4343dggd\",\n                   date: 24562345,\n                   typeId: 0\n               }\n           ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"status\": \"Error\",\n   \"message\": \"Invalid API Key\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "D:/Expendive/Workspace/NodeJS/SLSHServer/app.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/rejectFriendRequest",
    "title": "Reject friend request",
    "name": "rejectFriendRequest",
    "group": "Client",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Key for API authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Request ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Success/Error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n     \"status\": \"Success\",\n     \"message\": \"Request rejected\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"status\": \"Error\",\n   \"message\": \"Invalid API Key\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "D:/Expendive/Workspace/NodeJS/SLSHServer/app.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/removeFriend",
    "title": "Remove friend",
    "name": "removeFriend",
    "group": "Client",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Key for API authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "friendUserName",
            "description": "<p>Friend Username</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Success/Error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n     \"status\": \"Success\",\n     \"message\": \"Friend removed\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"status\": \"Error\",\n   \"message\": \"Invalid API Key\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "D:/Expendive/Workspace/NodeJS/SLSHServer/app.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/sendFriendRequest",
    "title": "Send friend request to a user",
    "name": "sendFriendRequest",
    "group": "Client",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Key for API authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fromUserName",
            "description": "<p>Username of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "toUserName",
            "description": "<p>Username of friend.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "typeId",
            "description": "<p>Request type.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Success/Error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Response Object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n     \"status\": \"Success\",\n     \"message\": \"Request sent\",\n     \"body\": {\n           id: \"REQ-gdgwqrr-gfhfght-e56fhfh\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"status\": \"Error\",\n   \"message\": \"Invalid API Key\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "D:/Expendive/Workspace/NodeJS/SLSHServer/app.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/signInUser",
    "title": "Sign In user",
    "name": "signInUser",
    "group": "Client",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Key for API authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Success/Error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Response Object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n     \"status\": \"Success\",\n     \"message\": \"User signed in\",\n     \"body\": {\n           userName: \"user\",\n           name: \"User\",\n           age: 21,\n           description: \"Description\",\n           location: \"87.5436,67.53567\",\n           isInMotion: false,\n           locationHistory: [\n               \"87.5436,67.53567\",\n               \"87.5436,67.53567\",\n               \"87.5436,67.53567\"\n           ],\n           locationFriends: [\n               \"USER-24gdgdgh-fdgsds-4343dggd\",\n               \"USER-24gdgdgh-fdgsds-4343dggd\",\n               \"USER-24gdgdgh-fdgsds-4343dggd\",\n           ],\n           motionFriends: [\n               \"USER-24gdgdgh-fdgsds-4343dggd\",\n               \"USER-24gdgdgh-fdgsds-4343dggd\",\n               \"USER-24gdgdgh-fdgsds-4343dggd\",\n           ],\n           receivedRequests: [\n               {\n                   id: \"REQ-gfg-dfgdf3-fdgd3\",\n                   toUser: \"USER-24gdgdgh-fdgsds-4343dggd\",\n                   typeId: 0\n               },\n               {\n                   id: \"REQ-gfg-dfgdf3-fdgd3\",\n                   toUser: \"USER-24gdgdgh-fdgsds-4343dggd\",\n                   typeId: 0\n               }\n           ],\n           sentRequests: [\n               {\n                   id: \"REQ-gfg-dfgdf3-fdgd3\",\n                   toUser: \"USER-24gdgdgh-fdgsds-4343dggd\",\n                   typeId: 0\n               },\n               {\n                   id: \"REQ-gfg-dfgdf3-fdgd3\",\n                   toUser: \"USER-24gdgdgh-fdgsds-4343dggd\",\n                   typeId: 0\n               }\n           ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"status\": \"Error\",\n   \"message\": \"Invalid API Key\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "D:/Expendive/Workspace/NodeJS/SLSHServer/app.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/signUpUser",
    "title": "Sign Up user",
    "name": "signUpUser",
    "group": "Client",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Key for API authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "age",
            "description": "<p>Age.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Current location.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Success/Error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n     \"status\": \"Success\",\n     \"message\": \"User signed up\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"status\": \"Error\",\n   \"message\": \"Invalid API Key\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "D:/Expendive/Workspace/NodeJS/SLSHServer/app.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/updateLocation",
    "title": "Update location of a user",
    "name": "updateLocation",
    "group": "Client",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Key for API authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Location.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Success/Error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "body",
            "description": "<p>Response Object[].</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n     \"status\": \"Success\",\n     \"message\": \"Location updated\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"status\": \"Error\",\n   \"message\": \"Invalid API Key\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "D:/Expendive/Workspace/NodeJS/SLSHServer/app.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/updateMotionStatus",
    "title": "Update movement status of a user",
    "name": "updateMotionStatus",
    "group": "Client",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Key for API authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isInMotion",
            "description": "<p>Motion status.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Success/Error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "body",
            "description": "<p>Response Object[].</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n     \"status\": \"Success\",\n     \"message\": \"Motion status updated\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"status\": \"Error\",\n   \"message\": \"Invalid API Key\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "D:/Expendive/Workspace/NodeJS/SLSHServer/app.js",
    "groupTitle": "Client"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "D:/Expendive/Workspace/NodeJS/SLSHServer/doc/main.js",
    "group": "D__Expendive_Workspace_NodeJS_SLSHServer_doc_main_js",
    "groupTitle": "D__Expendive_Workspace_NodeJS_SLSHServer_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/connectionTest",
    "title": "Test Server Connection.",
    "name": "connectionTest",
    "group": "Superuser",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "D:/Expendive/Workspace/NodeJS/SLSHServer/app.js",
    "groupTitle": "Superuser"
  }
] });
