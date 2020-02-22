const spec = {
  swagger: "2.0",
  info: {
    title: "techpost",
    version: "1.0.0",
  },
  schemes: [
    "https",
    "http"
  ],
  basePath: "/api/v1",
  tags: [
    {
      name: "projects",
      description: "levtech project list",
    },
    {
      name: "users",
      description: "firebase.User",
      externalDocs: {
        description: "Find out more about User type",
        url: "https://firebase.google.com/docs/reference/js/firebase.User?hl=ja"
      }
    },
    {
      name: "reviews",
      description: "user.reviews",
    },
  ],
  paths: {
    [`/users`]: {
      get: {
        tags: [
          "users"
        ],
        description: "admin page will call this endpoint",
        summary: "Get user",
        operationId: "getUser",
        consumes: [
          "application/json"
        ],
        produces: [
          "application/json"
        ],
        parameters: [
          {
            in: "query",
            name: "createdAt",
            type: "string",
            enum: [
              "asc",
              "desc"
            ],
            default: "asc",
            description: "Sort order by createdAt"
          },
          {
            in: "query",
            name: "limit",
            type: "number",
            default: 20,
            required: false,
          },
          {
            in: "query",
            name: "offset",
            type: "number",
            default: 0,
            required: false,
          },
        ],
        responses: {
          200: {
            description: "success",
            schema: {
              type: "array",
              items: {
                $ref: '#/definitions/User'
              }
            }
          }
        }
      },
      post: {
        tags: [
          "users"
        ],
        summary: "Create user",
        operationId: "createUser",
        consumes: [
          "application/json"
        ],
        produces: [
          "application/json"
        ],
        parameters: [
          {
            in: "body",
            name: "user",
            description: "Created user object",
            required: true,
            schema: {
              $ref: "#/definitions/User"
            }
          }
        ],
        responses: {
          200: {
            description: "success",
            schema: {
              $ref: '#/definitions/User'
            }
          }
        }
      }
    },
    [`/projects/summuries`]: {
      get: {
        tags: [
          "projects"
        ],
        summary: "Get projects summuries",
        operationId: "getProjectSummuries",
        consumes: [
          "application/json"
        ],
        produces: [
          "application/json"
        ],
        parameters: [
          {
            in: "query",
            name: "createdAt",
            type: "string",
            enum: [
              "asc",
              "desc"
            ],
            default: "desc",
            description: "Sort order by createdAt"
          },
          {
            in: "query",
            name: "limit",
            type: "number",
            default: 20,
            required: false,
          },
          {
            in: "query",
            name: "offset",
            type: "number",
            default: 0,
            required: false,
          },

        ],
        responses: {
          200: {
            description: "success",
            schema: {
              type: "array",
              items: {
                $ref: '#/definitions/ProjectCardItem'
              }
            },
          }
        }
      },
    },
    [`/projects/search`]: {
      get: {
        tags: [
          "projects"
        ],
        summary: "Get projects",
        operationId: "getProjectsSearch",
        consumes: [
          "application/json"
        ],
        produces: [
          "application/json"
        ],
        parameters: [
          {
            in: "query",
            name: "keyword",
            type: "string",
            description: "keyword skill.name | station.name | database.name | framework.name | projectTask.name",
          },
          {
            in: "query",
            name: "skill",
            type: "array",
            items: {
              type: "number",
            },
            description: "skill_ids",
          },
          {
            in: "query",
            name: "district",
            type: "array",
            items: {
              type: "number",
            },
            description: "district_ids",
          },
          {
            in: "query",
            name: "limit",
            type: "number",
            default: 20,
            required: false,
          },
          {
            in: "query",
            name: "offset",
            type: "number",
            default: 0,
            required: false,
          },

        ],
        responses: {
          200: {
            description: "success",
            schema: {
              type: "array",
              items: {
                $ref: '#/definitions/ProjectListItem'
              }
            }
          }
        }
      }
    },
    [`/projects/search/skill-{skillId}`]: {
      get: {
        tags: [
          "projects"
        ],
        summary: "Get projects",
        operationId: "getProjectsBySkillId",
        consumes: [
          "application/json"
        ],
        produces: [
          "application/json"
        ],
        parameters: [
          {
            in: "query",
            name: "createdAt",
            type: "string",
            enum: [
              "asc",
              "desc"
            ],
            default: "desc",
            description: "Sort order by createdAt"
          },
          {
            in: "query",
            name: "limit",
            type: "number",
            default: 12,
            required: false,
          },
          {
            in: "query",
            name: "offset",
            type: "number",
            default: 0,
            required: false,
          }
        ],
        responses: {
          200: {
            description: "success",
            schema: {
              type: "array",
              items: {
                $ref: '#/definitions/ProjectListItem'
              }
            }
          }
        }
      }
    },
    [`/projects/{projectId}`]: {
      get: {
        tags: [
          "projects"
        ],
        summary: "Get project detail",
        operationId: "getProjectDetail",
        consumes: [
          "application/json"
        ],
        produces: [
          "application/json"
        ],
        responses: {
          200: {
            description: "success",
            schema: {
              $ref: '#/definitions/ProjectDetail'
            }
          }
        }
      }
    },
    [`/projects/{projectId}/reviews`]: {
      get: {
        tags: [
          "projects"
        ],
        summary: "Get project reviews",
        operationId: "getProjectReviews",
        consumes: [
          "application/json"
        ],
        produces: [
          "application/json"
        ],
        parameters: [
          {
            in: "query",
            name: "createdAt",
            type: "string",
            enum: [
              "asc",
              "desc"
            ],
            default: "desc",
            description: "Sort order by createdAt"
          },
          {
            in: "query",
            name: "limit",
            type: "number",
            default: 20,
            required: false,
          },
          {
            in: "query",
            name: "offset",
            type: "number",
            default: 0,
            required: false,
          },

        ],
        responses: {
          200: {
            description: "success",
            schema: {
              type: "array",
              items: {
                $ref: '#/definitions/Review'
              }
            }
          }
        }
      }
    },
    [`/reviews/search`]: {
      get: {
        tags: [
          "reviews"
        ],
        summary: "Get project user reviews",
        operationId: "GetProjectUserReviews",
        consumes: [
          "application/json"
        ],
        produces: [
          "application/json"
        ],
        parameters: [
          {
            in: "query",
            name: "keyword",
            type: "string",
            description: "params accept Project.properties | Review.properties",
          },
          {
            in: "query",
            name: "skill",
            type: "array",
            items: {
              type: "number",
            },
            description: "skill_ids",
          },
          {
            in: "query",
            name: "district",
            type: "array",
            items: {
              type: "number",
            },
            description: "district_ids",
          },
          {
            in: "query",
            name: "createdAt",
            type: "string",
            enum: [
              "asc",
              "desc"
            ],
            default: "desc",
            description: "Sort order by createdAt"
          },
          {
            in: "query",
            name: "limit",
            type: "number",
            default: 12,
            required: false,
          },
          {
            in: "query",
            name: "offset",
            type: "number",
            default: 0,
            required: false,
          }
        ],
        responses: {
          200: {
            description: "success",
            schema: {
              type: "array",
              items: {
                $ref: '#/definitions/Review'
              }
            },
          }
        }
      }
    },
    [`/reviews/{userId}`]: {
      get: {
        tags: [
          "reviews"
        ],
        summary: "Get project user reviews by userId",
        operationId: "GetProjectUserReviewsByUserId",
        consumes: [
          "application/json"
        ],
        produces: [
          "application/json"
        ],
        parameters: [
          {
            in: "query",
            name: "createdAt",
            type: "string",
            enum: [
              "asc",
              "desc"
            ],
            default: "desc",
            description: "Sort order by createdAt"
          },
          {
            in: "query",
            name: "limit",
            type: "number",
            default: 12,
            required: false,
          },
          {
            in: "query",
            name: "offset",
            type: "number",
            default: 0,
            required: false,
          }
        ],
        responses: {
          200: {
            description: "success",
            schema: {
              type: "array",
              items: {
                $ref: '#/definitions/Review'
              }
            },
          }
        }
      },
      post: {
        tags: [
          "reviews"
        ],
        summary: "Post project user review",
        operationId: "PostProjectUserReview",
        consumes: [
          "application/json"
        ],
        produces: [
          "application/json"
        ],
        parameters: [
          {
            in: "body",
            name: "review",
            description: "Created project user review",
            required: true,
            schema: {
              $ref: "#/definitions/Review"
            }
          }
        ],
        responses: {
          200: {
            description: "success",
            schema: {
              $ref: '#/definitions/Review'
            }
          }
        }
      },
    },
    [`/reviews/suggestProjects`]: {
      post: {
        description: 'suggest similar project list in order to prevent creating duplicated project',
        tags: [
          "reviews"
        ],
        summary: "Post Suggestions Project List",
        operationId: "PostSuggestionsProjectList",
        consumes: [
          "application/json"
        ],
        produces: [
          "application/json"
        ],
        parameters: [
          {
            in: "body",
            name: "projectSuggestFactor",
            description: "suggest list based on user choices of review form",
            required: true,
            schema: {
              $ref: "#/definitions/ProjectSuggestFactor"
            }
          }
        ],
        responses: {
          200: {
            description: "success",
            schema: {
              type: "array",
              items: {
                $ref: '#/definitions/ProjectSuggestListItem'
              }
            }
          }
        }
      }
    },
    [`/reviews/{userId}/{projectId}`]: {
      put: {
        tags: [
          "reviews"
        ],
        summary: "Update project user review",
        operationId: "UpdateProjectUserReview",
        consumes: [
          "application/json"
        ],
        produces: [
          "application/json"
        ],
        parameters: [
          {
            in: "body",
            name: "review",
            description: "Created project user review",
            required: true,
            schema: {
              $ref: "#/definitions/Review"
            }
          }
        ],
        responses: {
          200: {
            description: "success",
          }
        }
      },
    }
  },
  definitions: {
    User: {
      type: "object",
      required: [
        "id",
      ],
      properties: {
        id: {
          type: "number",
          example: "1"
        },
        uid: {
          type: "string",
          example: "AIXAyXSRDdRxSbVB0RkFw1urcWJ3"
        },
        email: {
          type: "string",
          example: "test@gmail.com"
        },
        displayName: {
          type: "string",
          example: "testFirstName testLastName"
        },
        photoURL: {
          type: "string",
          example: "https://lh3.googleusercontent.com/a-/BBxE7mBt6kCILt6KUUApDgp8ahRKOw9_9IA6bdXsCz298w"
        },
        emailVerified: {
          type: "boolean"
        },
        isAnonymous: {
          type: "boolean"
        },
        providerId: {
          type: "string"
        },
        active: {
          type: "boolean"
        }
      }
    },
    ProjectCardItem: {
      type: "object",
      properties: {
        projectId: {
          type: "number",
          example: "41591"
        },
        projectTitle: {
          type: "string",
          example: "【Vue.js/Nuxt.js】HR関連サービス開発",
        },
        projectReward: {
          type: "string",
          example: "800,000",
        },
        constractTypes: {
          type: "string",
          enum: [
            "業務委託"
          ]
        },
        projectStation: {
          type: "string",
          example: "渋谷（東京都）",
        },
        skills: {
          type: "array",
          items: {
            $ref: "#/definitions/Skill"
          }
        },
        createdAt: {
          type: "string",
          format: "date-time",
          example: "2019-09-07T10:40:52Z",
        }
      }
    },
    ProjectListItem: {
      type: "object",
      properties: {
        projectId: {
          type: "number",
          example: "41591"
        },
        projectTitle: {
          type: "string",
          example: "【Vue.js/Nuxt.js】HR関連サービス開発",
        },
        projectReward: {
          type: "string",
          example: "800,000",
        },
        constractTypes: {
          type: "string",
          enum: [
            "業務委託(フリーランス)"
          ]
        },
        projectTask: {
          type: "string",
          example: `・スマートフォンとPC向けのHR関連サービス開発に携わって頂きます。 ・設計から幅広く担当して頂きます。 ・ご経験がある方は、Pythonも併せて依頼されることもございます。 ※担当範囲は、スキルや経験および進捗状況により変動いたします。 ・スマートフォンとPC向けのHR関連サービス開発に携わって頂きます。`,
        },
        projectStation: {
          type: "string",
          example: "渋谷（東京都）",
        },
        skills: {
          type: "array",
          items: {
            $ref: "#/definitions/Skill"
          }
        },
        requiredSkills: {
          type: "string",
          example: `・Vue.jsの実務経験1年以上・VuexもしくはSPA開発の実務経験1年以上 【下記から1点必須】 ・設計の実務経験 ・Nuxt.jsの実務経験 ・TypeScriptの実務経験 ・Jestの実務経験 ・UI/UXデザインの実務経験 ・サーバーサイドレンダリングの実務経験 ・コンポーネント指向のアプリケーション開発の実務経験 ・自社サービス開発の実務経験 ・マッチングサービス開発の実務経験 ・ディレクターやデザイナーと連携しながら仕様策定した実務経験 【歓迎スキル】・HR関連サービス開発の実務経験 ・Sketch、Figma、Illustrator、Photoshopの実務経験 ・Python、Djangoの実務経験 ・AWSの実務経験 ・ネイティブアプリ開発の実務経験 ・アーキテクトの実務経験  ・Gitを用いたチーム開発の実務経験 ・スクラム開発の実務経験  ・レビューの実務経験  ・CI/CD環境構築や自動化の実務経験  ・リーダーやリードエンジニアの実務経験  ・OSSなどへのコントリビュートやオーナーシップの経験 ※上記に似た経験やスキルをお持ちであれば申し込み可能なケースもございます！まずはお気軽にご相談ください！`,
        },
        createdAt: {
          type: "string",
          format: "date-time",
          example: "2019-09-07T10:40:52Z",
        }
      }
    },
    ProjectDetail: {
      type: "object",
      properties: {
        projectId: {
          type: "number",
          example: "41591"
        },
        projectTitle: {
          type: "string",
          example: "【Vue.js/Nuxt.js】HR関連サービス開発",
        },
        projectReward: {
          type: "string",
          example: "800,000",
        },
        constractTypes: {
          type: "string",
          enum: [
            "業務委託(フリーランス)"
          ]
        },
        projectStation: {
          type: "string",
          example: "渋谷（東京都）",
        },
        position: {
          type: "array",
          items: {
            $ref: "#/definitions/Position"
          }
        },
        projectTask: {
          type: "string",
          example: `<p>・スマートフォンとPC向けのHR関連サービス開発に携わって頂きます。 <br>
          ・設計から幅広く担当して頂きます。 <br>
          ・ご経験がある方は、Pythonも併せて依頼されることもございます。<br>
          ※担当範囲は、スキルや経験および進捗状況により変動いたします。</p>`,
        },
        requiredSkills: {
          type: "string",
          example: `<p class="descDetail__txt">・Vue.jsの実務経験1年以上<br>
          ・VuexもしくはSPA開発の実務経験1年以上<br>
          【下記から1点必須】<br>
          ・設計の実務経験<br>
          ・Nuxt.jsの実務経験<br>
          ・TypeScriptの実務経験<br>
          ・Jestの実務経験<br>
          ・UI/UXデザインの実務経験<br>
          ・サーバーサイドレンダリングの実務経験<br>
          ・コンポーネント指向のアプリケーション開発の実務経験<br>
          ・自社サービス開発の実務経験<br>
          ・マッチングサービス開発の実務経験<br>
          ・ディレクターやデザイナーと連携しながら仕様策定した実務経験<br>
          </p>
          <p class="descDetail__txt descDetail__txt--skill">【歓迎スキル】</p>
          <p class="descDetail__txt">・HR関連サービス開発の実務経験<br>
          ・Sketch、Figma、Illustrator、Photoshopの実務経験<br>
          ・Python、Djangoの実務経験<br>
          ・AWSの実務経験<br>
          ・ネイティブアプリ開発の実務経験<br>
          ・アーキテクトの実務経験 <br>
          ・Gitを用いたチーム開発の実務経験<br>
          ・スクラム開発の実務経験 <br>
          ・レビューの実務経験 <br>
          ・CI/CD環境構築や自動化の実務経験 <br>
          ・リーダーやリードエンジニアの実務経験 <br>
          ・OSSなどへのコントリビュートやオーナーシップの経験<br>
          </p>
          <p class="descDetail__note">※上記に似た経験やスキルをお持ちであれば申し込み可能なケースもございます！まずはお気軽にご相談ください！</p>`,
        },
        skills: {
          type: "array",
          items: {
            $ref: "#/definitions/Skill"
          }
        },
        frameworks: {
          type: "array",
          items: {
            $ref: "#/definitions/Framework"
          }
        },
        databases: {
          type: "array",
          items: {
            $ref: "#/definitions/Database"
          }
        },
        operationSystems: {
          type: "array",
          items: {
            $ref: "#/definitions/OperationSystem"
          }
        },
        otherTools: {
          type: "string",
          example: "AWS, Nginx, Unicorn, GitHub, Hadoop"
        },
        createdAt: {
          type: "string",
          format: "date-time",
          example: "2019-09-07T10:40:52Z",
        }
      }
    },
    Review: {
      type: "object",
      required: [],
      properties: {
        userId: { type: "number", example: "1" },
        projectId: { type: "number", example: "1" },
        projectTitle: { type: "string", example: "道路業向け基幹業務システム開発" },
        reward: { type: "number", example: "60" },
        industry: {
          $ref: "#/definitions/Industry"
        },
        station: {
          $ref: "#/definitions/Station"
        },
        position: {
          $ref: "#/definitions/Position"
        },
        skills: {
          type: "array",
          items: {
            $ref: "#/definitions/Skill"
          }
        },
        databases: {
          type: "array",
          items: {
            $ref: "#/definitions/Database"
          }
        },
        frameworks: {
          type: "array",
          items: {
            $ref: "#/definitions/Framework"
          }
        },
        technicalDebts: {
          type: "array",
          items: {
            $ref: "#/definitions/TechnicalDebt"
          }
        },
        codeReviews: {
          type: "array",
          items: {
            $ref: "#/definitions/CodeReview"
          }
        },
        testingPolicies: {
          type: "array",
          items: {
            $ref: "#/definitions/TestingPolicy"
          }
        },
        interviews: {
          type: "array",
          items: {
            $ref: "#/definitions/Interview"
          }
        },
        projectTerm: {
          $ref: "#/definitions/ProjectTerm"
        },
        projectTasks: {
          type: "array",
          items: {
            $ref: "#/definitions/ProjectTask"
          }
        },
        contractType: {
          $ref: "#/definitions/ContractType"
        },
        projectMemberScale: {
          $ref: "#/definitions/ProjectMemberScale"
        },
        projectPositiveComment: { type: "string" },
        projectNagativeComment: { type: "string" },
        developWorkConditions: {
          type: "array",
          items: {
            $ref: "#/definitions/DevelopWorkCondition"
          }
        },
        billingMonthlyHoursMinimum: { type: "string", example: "140" },
        billingMonthlyHoursMaximum: { type: "string", example: "180" },
        projectRate: { type: "number", format: "float" },
        active: { type: "boolean" }
      }
    },
    ProjectSuggestListItem: {
      type: "object",
      $ref: "#/definitions/ProjectListItem"
    },
    ProjectSuggestFactor: {
      type: "object",
      required: [
        "id"
      ],
      properties: {
        projectTitle: {
          type: "string"
        },
        station: {
          $ref: "#/definitions/Station"
        },
        industry: {
          $ref: "#/definitions/Industry"
        },
        skills: {
          type: "array",
          items: {
            $ref: "#/definitions/Skill"
          }
        },
        databases: {
          type: "array",
          items: {
            $ref: "#/definitions/Database"
          }
        },
        frameworks: {
          type: "array",
          items: {
            $ref: "#/definitions/Framework"
          }
        },
      }
    },
    ProjectTerm: {
      type: "object",
      required: [
        "id"
      ],
      properties: {
        id: { type: "number" },
        name: {
          type: "string",
          example: "6ヶ月未満"
        },
      }
    },
    ContractType: {
      type: "object",
      required: [
        "id"
      ],
      properties: {
        id: { type: "number" },
        name: {
          type: "string", example: "フリーランス"
        },
      }
    },
    ProjectMemberScale: {
      type: "object",
      required: [
        "id"
      ],
      properties: {
        id: { type: "number" },
        name: {
          type: "string", example: "2~3人"
        },
      }
    },
    Position: {
      type: "object",
      required: [
        "id"
      ],
      properties: {
        id: { type: "number" },
        name: { type: "string", example: "SE(システムエンジニア)" },
      }
    },
    Industry: {
      type: "object",
      required: [
        "id"
      ],
      properties: {
        id: { type: "number" },
        name: { type: "string", example: "ソーシャルゲーム" }
      }
    },
    Station: {
      type: "object",
      required: [
        "id"
      ],
      properties: {
        id: { type: "number" },
        name: { type: "string", example: "渋谷" }
      }
    },
    Skill: {
      type: "object",
      required: [
        "id"
      ],
      properties: {
        id: { type: "number" },
        name: { type: "string", example: "Ruby" }
      }
    },
    Database: {
      type: "object",
      required: [
        "id"
      ],
      properties: {
        id: { type: "number" },
        name: { type: "string", example: "MySQL" }
      }
    },
    Framework: {
      type: "object",
      required: [
        "id"
      ],
      properties: {
        id: { type: "number" },
        name: { type: "string", example: "Ruby on Rails" }
      }
    },
    TechnicalDebt: {
      type: "object",
      required: [
        "id"
      ],
      properties: {
        id: { type: "number" },
        name: { type: "string", example: "技術的負債の返済を重視し、迅速に返済している" }
      }
    },
    CodeReview: {
      type: "object",
      required: [
        "id"
      ],
      properties: {
        id: { type: "number" },
        name: { type: "string", example: "設計を意識している" }
      }
    },
    TestingPolicy: {
      type: "object",
      required: [
        "id"
      ],
      properties: {
        id: { type: "number" },
        name: { type: "string", example: "高いテストカバレッジを目指している" }
      }
    },
    Interview: {
      type: "object",
      required: [
        "id"
      ],
      properties: {
        id: { type: "number" },
        name: { type: "string", example: "簡単なプログラミング試験を受けた" }
      }
    },
    ProjectTask: {
      type: "object",
      required: [
        "id"
      ],
      properties: {
        id: { type: "number" },
        name: { type: "string", example: "新規開発" }
      }
    },
    DevelopWorkCondition: {
      type: "object",
      required: [
        "id"
      ],
      properties: {
        id: { type: "number" },
        name: { type: "string", example: "開発環境構築が自動化済み" }
      }
    },
    OperationSystem: {
      type: "object",
      required: [
        "id"
      ],
      properties: {
        id: { type: "number" },
        name: { type: "string", example: "Windows" }
      }
    }
  }
}
