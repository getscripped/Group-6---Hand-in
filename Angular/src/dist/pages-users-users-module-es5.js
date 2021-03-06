function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-users-users-module"], {
  /***/
  "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/backend.service.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/backend.service.js ***!
    \********************************************************************************/

  /*! exports provided: BackendService */

  /***/
  function node_modulesAngularInMemoryWebApi__ivy_ngcc__BackendServiceJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackendService", function () {
      return BackendService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _http_status_codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./http-status-codes */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-status-codes.js");
    /* harmony import */


    var _delay_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./delay-response */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/delay-response.js");
    /* harmony import */


    var _interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./interfaces */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/interfaces.js");
    /**
     * Base class for in-memory web api back-ends
     * Simulate the behavior of a RESTy web api
     * backed by the simple in-memory data store provided by the injected `InMemoryDbService` service.
     * Conforms mostly to behavior described here:
     * http://www.restapitutorial.com/lessons/httpmethods.html
     */


    var BackendService =
    /** @class */
    function () {
      function BackendService(inMemDbService, config) {
        if (config === void 0) {
          config = {};
        }

        this.inMemDbService = inMemDbService;
        this.config = new _interfaces__WEBPACK_IMPORTED_MODULE_4__["InMemoryBackendConfig"]();
        this.requestInfoUtils = this.getRequestInfoUtils();
        var loc = this.getLocation('/');
        this.config.host = loc.host; // default to app web server host

        this.config.rootPath = loc.path; // default to path when app is served (e.g.'/')

        Object.assign(this.config, config);
      }

      Object.defineProperty(BackendService.prototype, "dbReady", {
        ////  protected /////
        get: function get() {
          if (!this.dbReadySubject) {
            // first time the service is called.
            this.dbReadySubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
            this.resetDb();
          }

          return this.dbReadySubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(function (r) {
            return r;
          }));
        },
        enumerable: true,
        configurable: true
      });
      /**
       * Process Request and return an Observable of Http Response object
       * in the manner of a RESTy web api.
       *
       * Expect URI pattern in the form :base/:collectionName/:id?
       * Examples:
       *   // for store with a 'customers' collection
       *   GET api/customers          // all customers
       *   GET api/customers/42       // the character with id=42
       *   GET api/customers?name=^j  // 'j' is a regex; returns customers whose name starts with 'j' or 'J'
       *   GET api/customers.json/42  // ignores the ".json"
       *
       * Also accepts direct commands to the service in which the last segment of the apiBase is the word "commands"
       * Examples:
       *     POST commands/resetDb,
       *     GET/POST commands/config - get or (re)set the config
       *
       *   HTTP overrides:
       *     If the injected inMemDbService defines an HTTP method (lowercase)
       *     The request is forwarded to that method as in
       *     `inMemDbService.get(requestInfo)`
       *     which must return either an Observable of the response type
       *     for this http library or null|undefined (which means "keep processing").
       */

      BackendService.prototype.handleRequest = function (req) {
        var _this = this; //  handle the request when there is an in-memory database


        return this.dbReady.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(function () {
          return _this.handleRequest_(req);
        }));
      };

      BackendService.prototype.handleRequest_ = function (req) {
        var _this = this;

        var url = req.urlWithParams ? req.urlWithParams : req.url; // Try override parser
        // If no override parser or it returns nothing, use default parser

        var parser = this.bind('parseRequestUrl');
        var parsed = parser && parser(url, this.requestInfoUtils) || this.parseRequestUrl(url);
        var collectionName = parsed.collectionName;
        var collection = this.db[collectionName];
        var reqInfo = {
          req: req,
          apiBase: parsed.apiBase,
          collection: collection,
          collectionName: collectionName,
          headers: this.createHeaders({
            'Content-Type': 'application/json'
          }),
          id: this.parseId(collection, collectionName, parsed.id),
          method: this.getRequestMethod(req),
          query: parsed.query,
          resourceUrl: parsed.resourceUrl,
          url: url,
          utils: this.requestInfoUtils
        };
        var resOptions;

        if (/commands\/?$/i.test(reqInfo.apiBase)) {
          return this.commands(reqInfo);
        }

        var methodInterceptor = this.bind(reqInfo.method);

        if (methodInterceptor) {
          // InMemoryDbService intercepts this HTTP method.
          // if interceptor produced a response, return it.
          // else InMemoryDbService chose not to intercept; continue processing.
          var interceptorResponse = methodInterceptor(reqInfo);

          if (interceptorResponse) {
            return interceptorResponse;
          }

          ;
        }

        if (this.db[collectionName]) {
          // request is for a known collection of the InMemoryDbService
          return this.createResponse$(function () {
            return _this.collectionHandler(reqInfo);
          });
        }

        if (this.config.passThruUnknownUrl) {
          // unknown collection; pass request thru to a "real" backend.
          return this.getPassThruBackend().handle(req);
        } // 404 - can't handle this request


        resOptions = this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NOT_FOUND, "Collection '" + collectionName + "' not found");
        return this.createResponse$(function () {
          return resOptions;
        });
      };
      /**
       * Add configured delay to response observable unless delay === 0
       */


      BackendService.prototype.addDelay = function (response) {
        var d = this.config.delay;
        return d === 0 ? response : Object(_delay_response__WEBPACK_IMPORTED_MODULE_3__["delayResponse"])(response, d || 500);
      };
      /**
       * Apply query/search parameters as a filter over the collection
       * This impl only supports RegExp queries on string properties of the collection
       * ANDs the conditions together
       */


      BackendService.prototype.applyQuery = function (collection, query) {
        // extract filtering conditions - {propertyName, RegExps) - from query/search parameters
        var conditions = [];
        var caseSensitive = this.config.caseSensitiveSearch ? undefined : 'i';
        query.forEach(function (value, name) {
          value.forEach(function (v) {
            return conditions.push({
              name: name,
              rx: new RegExp(decodeURI(v), caseSensitive)
            });
          });
        });
        var len = conditions.length;

        if (!len) {
          return collection;
        } // AND the RegExp conditions


        return collection.filter(function (row) {
          var ok = true;
          var i = len;

          while (ok && i) {
            i -= 1;
            var cond = conditions[i];
            ok = cond.rx.test(row[cond.name]);
          }

          return ok;
        });
      };
      /**
       * Get a method from the `InMemoryDbService` (if it exists), bound to that service
       */


      BackendService.prototype.bind = function (methodName) {
        var fn = this.inMemDbService[methodName];
        return fn ? fn.bind(this.inMemDbService) : undefined;
      };

      BackendService.prototype.bodify = function (data) {
        return this.config.dataEncapsulation ? {
          data: data
        } : data;
      };

      BackendService.prototype.clone = function (data) {
        return JSON.parse(JSON.stringify(data));
      };

      BackendService.prototype.collectionHandler = function (reqInfo) {
        // const req = reqInfo.req;
        var resOptions;

        switch (reqInfo.method) {
          case 'get':
            resOptions = this.get(reqInfo);
            break;

          case 'post':
            resOptions = this.post(reqInfo);
            break;

          case 'put':
            resOptions = this.put(reqInfo);
            break;

          case 'delete':
            resOptions = this["delete"](reqInfo);
            break;

          default:
            resOptions = this.createErrorResponseOptions(reqInfo.url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].METHOD_NOT_ALLOWED, 'Method not allowed');
            break;
        } // If `inMemDbService.responseInterceptor` exists, let it morph the response options


        var interceptor = this.bind('responseInterceptor');
        return interceptor ? interceptor(resOptions, reqInfo) : resOptions;
      };
      /**
       * Commands reconfigure the in-memory web api service or extract information from it.
       * Commands ignore the latency delay and respond ASAP.
       *
       * When the last segment of the `apiBase` path is "commands",
       * the `collectionName` is the command.
       *
       * Example URLs:
       *   commands/resetdb (POST) // Reset the "database" to its original state
       *   commands/config (GET)   // Return this service's config object
       *   commands/config (POST)  // Update the config (e.g. the delay)
       *
       * Usage:
       *   http.post('commands/resetdb', undefined);
       *   http.get('commands/config');
       *   http.post('commands/config', '{"delay":1000}');
       */


      BackendService.prototype.commands = function (reqInfo) {
        var _this = this;

        var command = reqInfo.collectionName.toLowerCase();
        var method = reqInfo.method;
        var resOptions = {
          url: reqInfo.url
        };

        switch (command) {
          case 'resetdb':
            resOptions.status = _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NO_CONTENT;
            return this.resetDb(reqInfo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(function () {
              return _this.createResponse$(function () {
                return resOptions;
              }, false
              /* no latency delay */
              );
            }));

          case 'config':
            if (method === 'get') {
              resOptions.status = _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].OK;
              resOptions.body = this.clone(this.config); // any other HTTP method is assumed to be a config update
            } else {
              var body = this.getJsonBody(reqInfo.req);
              Object.assign(this.config, body);
              this.passThruBackend = undefined; // re-create when needed

              resOptions.status = _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NO_CONTENT;
            }

            break;

          default:
            resOptions = this.createErrorResponseOptions(reqInfo.url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].INTERNAL_SERVER_ERROR, "Unknown command \"" + command + "\"");
        }

        return this.createResponse$(function () {
          return resOptions;
        }, false
        /* no latency delay */
        );
      };

      BackendService.prototype.createErrorResponseOptions = function (url, status, message) {
        return {
          body: {
            error: "" + message
          },
          url: url,
          headers: this.createHeaders({
            'Content-Type': 'application/json'
          }),
          status: status
        };
      };
      /**
       * Create a cold response Observable from a factory for ResponseOptions
       * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
       * @param withDelay - if true (default), add simulated latency delay from configuration
       */


      BackendService.prototype.createResponse$ = function (resOptionsFactory, withDelay) {
        if (withDelay === void 0) {
          withDelay = true;
        }

        var resOptions$ = this.createResponseOptions$(resOptionsFactory);
        var resp$ = this.createResponse$fromResponseOptions$(resOptions$);
        return withDelay ? this.addDelay(resp$) : resp$;
      };
      /**
       * Create a cold Observable of ResponseOptions.
       * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
       */


      BackendService.prototype.createResponseOptions$ = function (resOptionsFactory) {
        var _this = this;

        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (responseObserver) {
          var resOptions;

          try {
            resOptions = resOptionsFactory();
          } catch (error) {
            var err = error.message || error;
            resOptions = _this.createErrorResponseOptions('', _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].INTERNAL_SERVER_ERROR, "" + err);
          }

          var status = resOptions.status;

          try {
            resOptions.statusText = Object(_http_status_codes__WEBPACK_IMPORTED_MODULE_2__["getStatusText"])(status);
          } catch (e) {
            /* ignore failure */
          }

          if (Object(_http_status_codes__WEBPACK_IMPORTED_MODULE_2__["isSuccess"])(status)) {
            responseObserver.next(resOptions);
            responseObserver.complete();
          } else {
            responseObserver.error(resOptions);
          }

          return function () {}; // unsubscribe function
        });
      };

      BackendService.prototype["delete"] = function (_a) {
        var collection = _a.collection,
            collectionName = _a.collectionName,
            headers = _a.headers,
            id = _a.id,
            url = _a.url; // tslint:disable-next-line:triple-equals

        if (id == undefined) {
          return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NOT_FOUND, "Missing \"" + collectionName + "\" id");
        }

        var exists = this.removeById(collection, id);
        return {
          headers: headers,
          status: exists || !this.config.delete404 ? _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NO_CONTENT : _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NOT_FOUND
        };
      };
      /**
       * Find first instance of item in collection by `item.id`
       * @param collection
       * @param id
       */


      BackendService.prototype.findById = function (collection, id) {
        return collection.find(function (item) {
          return item.id === id;
        });
      };
      /**
       * Generate the next available id for item in this collection
       * Use method from `inMemDbService` if it exists and returns a value,
       * else delegates to `genIdDefault`.
       * @param collection - collection of items with `id` key property
       */


      BackendService.prototype.genId = function (collection, collectionName) {
        var genId = this.bind('genId');

        if (genId) {
          var id = genId(collection, collectionName); // tslint:disable-next-line:triple-equals

          if (id != undefined) {
            return id;
          }
        }

        return this.genIdDefault(collection, collectionName);
      };
      /**
       * Default generator of the next available id for item in this collection
       * This default implementation works only for numeric ids.
       * @param collection - collection of items with `id` key property
       * @param collectionName - name of the collection
       */


      BackendService.prototype.genIdDefault = function (collection, collectionName) {
        if (!this.isCollectionIdNumeric(collection, collectionName)) {
          throw new Error("Collection '" + collectionName + "' id type is non-numeric or unknown. Can only generate numeric ids.");
        }

        var maxId = 0;
        collection.reduce(function (prev, item) {
          maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
        }, undefined);
        return maxId + 1;
      };

      BackendService.prototype.get = function (_a) {
        var collection = _a.collection,
            collectionName = _a.collectionName,
            headers = _a.headers,
            id = _a.id,
            query = _a.query,
            url = _a.url;
        var data = collection; // tslint:disable-next-line:triple-equals

        if (id != undefined && id !== '') {
          data = this.findById(collection, id);
        } else if (query) {
          data = this.applyQuery(collection, query);
        }

        if (!data) {
          return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NOT_FOUND, "'" + collectionName + "' with id='" + id + "' not found");
        }

        return {
          body: this.bodify(this.clone(data)),
          headers: headers,
          status: _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].OK
        };
      };
      /**
       * Get location info from a url, even on server where `document` is not defined
       */


      BackendService.prototype.getLocation = function (url) {
        if (!url.startsWith('http')) {
          // get the document iff running in browser
          var doc = typeof document === 'undefined' ? undefined : document; // add host info to url before parsing.  Use a fake host when not in browser.

          var base = doc ? doc.location.protocol + '//' + doc.location.host : 'http://fake';
          url = url.startsWith('/') ? base + url : base + '/' + url;
        }

        return Object(_interfaces__WEBPACK_IMPORTED_MODULE_4__["parseUri"])(url);
      };

      ;
      /**
       * get or create the function that passes unhandled requests
       * through to the "real" backend.
       */

      BackendService.prototype.getPassThruBackend = function () {
        return this.passThruBackend ? this.passThruBackend : this.passThruBackend = this.createPassThruBackend();
      };
      /**
       * Get utility methods from this service instance.
       * Useful within an HTTP method override
       */


      BackendService.prototype.getRequestInfoUtils = function () {
        var _this = this;

        return {
          createResponse$: this.createResponse$.bind(this),
          findById: this.findById.bind(this),
          isCollectionIdNumeric: this.isCollectionIdNumeric.bind(this),
          getConfig: function getConfig() {
            return _this.config;
          },
          getDb: function getDb() {
            return _this.db;
          },
          getJsonBody: this.getJsonBody.bind(this),
          getLocation: this.getLocation.bind(this),
          getPassThruBackend: this.getPassThruBackend.bind(this),
          parseRequestUrl: this.parseRequestUrl.bind(this)
        };
      };

      BackendService.prototype.indexOf = function (collection, id) {
        return collection.findIndex(function (item) {
          return item.id === id;
        });
      };
      /** Parse the id as a number. Return original value if not a number. */


      BackendService.prototype.parseId = function (collection, collectionName, id) {
        if (!this.isCollectionIdNumeric(collection, collectionName)) {
          // Can't confirm that `id` is a numeric type; don't parse as a number
          // or else `'42'` -> `42` and _get by id_ fails.
          return id;
        }

        var idNum = parseFloat(id);
        return isNaN(idNum) ? id : idNum;
      };
      /**
       * return true if can determine that the collection's `item.id` is a number
       * This implementation can't tell if the collection is empty so it assumes NO
       * */


      BackendService.prototype.isCollectionIdNumeric = function (collection, collectionName) {
        // collectionName not used now but override might maintain collection type information
        // so that it could know the type of the `id` even when the collection is empty.
        return !!(collection && collection[0]) && typeof collection[0].id === 'number';
      };
      /**
       * Parses the request URL into a `ParsedRequestUrl` object.
       * Parsing depends upon certain values of `config`: `apiBase`, `host`, and `urlRoot`.
       *
       * Configuring the `apiBase` yields the most interesting changes to `parseRequestUrl` behavior:
       *   When apiBase=undefined and url='http://localhost/api/collection/42'
       *     {base: 'api/', collectionName: 'collection', id: '42', ...}
       *   When apiBase='some/api/root/' and url='http://localhost/some/api/root/collection'
       *     {base: 'some/api/root/', collectionName: 'collection', id: undefined, ...}
       *   When apiBase='/' and url='http://localhost/collection'
       *     {base: '/', collectionName: 'collection', id: undefined, ...}
       *
       * The actual api base segment values are ignored. Only the number of segments matters.
       * The following api base strings are considered identical: 'a/b' ~ 'some/api/' ~ `two/segments'
       *
       * To replace this default method, assign your alternative to your InMemDbService['parseRequestUrl']
       */


      BackendService.prototype.parseRequestUrl = function (url) {
        try {
          var loc = this.getLocation(url);
          var drop = this.config.rootPath.length;
          var urlRoot = '';

          if (loc.host !== this.config.host) {
            // url for a server on a different host!
            // assume it's collection is actually here too.
            drop = 1; // the leading slash

            urlRoot = loc.protocol + '//' + loc.host + '/';
          }

          var path = loc.path.substring(drop);
          var pathSegments = path.split('/');
          var segmentIx = 0; // apiBase: the front part of the path devoted to getting to the api route
          // Assumes first path segment if no config.apiBase
          // else ignores as many path segments as are in config.apiBase
          // Does NOT care what the api base chars actually are.

          var apiBase = void 0; // tslint:disable-next-line:triple-equals

          if (this.config.apiBase == undefined) {
            apiBase = pathSegments[segmentIx++];
          } else {
            apiBase = Object(_interfaces__WEBPACK_IMPORTED_MODULE_4__["removeTrailingSlash"])(this.config.apiBase.trim());

            if (apiBase) {
              segmentIx = apiBase.split('/').length;
            } else {
              segmentIx = 0; // no api base at all; unwise but allowed.
            }
          }

          apiBase += '/';
          var collectionName = pathSegments[segmentIx++]; // ignore anything after a '.' (e.g.,the "json" in "customers.json")

          collectionName = collectionName && collectionName.split('.')[0];
          var id = pathSegments[segmentIx++];
          var query = this.createQueryMap(loc.query);
          var resourceUrl = urlRoot + apiBase + collectionName + '/';
          return {
            apiBase: apiBase,
            collectionName: collectionName,
            id: id,
            query: query,
            resourceUrl: resourceUrl
          };
        } catch (err) {
          var msg = "unable to parse url '" + url + "'; original error: " + err.message;
          throw new Error(msg);
        }
      }; // Create entity
      // Can update an existing entity too if post409 is false.


      BackendService.prototype.post = function (_a) {
        var collection = _a.collection,
            collectionName = _a.collectionName,
            headers = _a.headers,
            id = _a.id,
            req = _a.req,
            resourceUrl = _a.resourceUrl,
            url = _a.url;
        var item = this.clone(this.getJsonBody(req)); // tslint:disable-next-line:triple-equals

        if (item.id == undefined) {
          try {
            item.id = id || this.genId(collection, collectionName);
          } catch (err) {
            var emsg = err.message || '';

            if (/id type is non-numeric/.test(emsg)) {
              return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].UNPROCESSABLE_ENTRY, emsg);
            } else {
              console.error(err);
              return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].INTERNAL_SERVER_ERROR, "Failed to generate new id for '" + collectionName + "'");
            }
          }
        }

        if (id && id !== item.id) {
          return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].BAD_REQUEST, "Request id does not match item.id");
        } else {
          id = item.id;
        }

        var existingIx = this.indexOf(collection, id);
        var body = this.bodify(item);

        if (existingIx === -1) {
          collection.push(item);
          headers.set('Location', resourceUrl + '/' + id);
          return {
            headers: headers,
            body: body,
            status: _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].CREATED
          };
        } else if (this.config.post409) {
          return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].CONFLICT, "'" + collectionName + "' item with id='" + id + " exists and may not be updated with POST; use PUT instead.");
        } else {
          collection[existingIx] = item;
          return this.config.post204 ? {
            headers: headers,
            status: _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NO_CONTENT
          } : // successful; no content
          {
            headers: headers,
            body: body,
            status: _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].OK
          }; // successful; return entity
        }
      }; // Update existing entity
      // Can create an entity too if put404 is false.


      BackendService.prototype.put = function (_a) {
        var collection = _a.collection,
            collectionName = _a.collectionName,
            headers = _a.headers,
            id = _a.id,
            req = _a.req,
            url = _a.url;
        var item = this.clone(this.getJsonBody(req)); // tslint:disable-next-line:triple-equals

        if (item.id == undefined) {
          return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NOT_FOUND, "Missing '" + collectionName + "' id");
        }

        if (id && id !== item.id) {
          return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].BAD_REQUEST, "Request for '" + collectionName + "' id does not match item.id");
        } else {
          id = item.id;
        }

        var existingIx = this.indexOf(collection, id);
        var body = this.bodify(item);

        if (existingIx > -1) {
          collection[existingIx] = item;
          return this.config.put204 ? {
            headers: headers,
            status: _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NO_CONTENT
          } : // successful; no content
          {
            headers: headers,
            body: body,
            status: _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].OK
          }; // successful; return entity
        } else if (this.config.put404) {
          // item to update not found; use POST to create new item for this id.
          return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NOT_FOUND, "'" + collectionName + "' item with id='" + id + " not found and may not be created with PUT; use POST instead.");
        } else {
          // create new item for id not found
          collection.push(item);
          return {
            headers: headers,
            body: body,
            status: _http_status_codes__WEBPACK_IMPORTED_MODULE_2__["STATUS"].CREATED
          };
        }
      };

      BackendService.prototype.removeById = function (collection, id) {
        var ix = this.indexOf(collection, id);

        if (ix > -1) {
          collection.splice(ix, 1);
          return true;
        }

        return false;
      };
      /**
       * Tell your in-mem "database" to reset.
       * returns Observable of the database because resetting it could be async
       */


      BackendService.prototype.resetDb = function (reqInfo) {
        var _this = this;

        this.dbReadySubject.next(false);
        var db = this.inMemDbService.createDb(reqInfo);
        var db$ = db instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"] ? db : typeof db.then === 'function' ? Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(db) : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(db);
        db$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (d) {
          _this.db = d;

          _this.dbReadySubject.next(true);
        });
        return this.dbReady;
      };

      return BackendService;
    }(); //# sourceMappingURL=backend.service.js.map

    /***/

  },

  /***/
  "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/delay-response.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/delay-response.js ***!
    \*******************************************************************************/

  /*! exports provided: delayResponse */

  /***/
  function node_modulesAngularInMemoryWebApi__ivy_ngcc__DelayResponseJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "delayResponse", function () {
      return delayResponse;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); // Replaces use of RxJS delay. See v0.5.4.

    /** adds specified delay (in ms) to both next and error channels of the response observable */


    function delayResponse(response$, delayMs) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
        var completePending = false;
        var nextPending = false;
        var subscription = response$.subscribe(function (value) {
          nextPending = true;
          setTimeout(function () {
            observer.next(value);

            if (completePending) {
              observer.complete();
            }
          }, delayMs);
        }, function (error) {
          return setTimeout(function () {
            return observer.error(error);
          }, delayMs);
        }, function () {
          completePending = true;

          if (!nextPending) {
            observer.complete();
          }
        });
        return function () {
          return subscription.unsubscribe();
        };
      });
    } //# sourceMappingURL=delay-response.js.map

    /***/

  },

  /***/
  "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-client-backend.service.js":
  /*!********************************************************************************************!*\
    !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-client-backend.service.js ***!
    \********************************************************************************************/

  /*! exports provided: HttpClientBackendService */

  /***/
  function node_modulesAngularInMemoryWebApi__ivy_ngcc__HttpClientBackendServiceJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientBackendService", function () {
      return HttpClientBackendService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _http_status_codes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./http-status-codes */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-status-codes.js");
    /* harmony import */


    var _interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./interfaces */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/interfaces.js");
    /* harmony import */


    var _backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./backend.service */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/backend.service.js");

    var __extends = undefined && undefined.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };
    /**
     * For Angular `HttpClient` simulate the behavior of a RESTy web api
     * backed by the simple in-memory data store provided by the injected `InMemoryDbService`.
     * Conforms mostly to behavior described here:
     * http://www.restapitutorial.com/lessons/httpmethods.html
     *
     * ### Usage
     *
     * Create an in-memory data store class that implements `InMemoryDbService`.
     * Call `config` static method with this service class and optional configuration object:
     * ```
     * // other imports
     * import { HttpClientModule } from '@angular/common/http';
     * import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
     *
     * import { InMemHeroService, inMemConfig } from '../api/in-memory-hero.service';
     * @NgModule({
     *  imports: [
     *    HttpModule,
     *    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService, inMemConfig),
     *    ...
     *  ],
     *  ...
     * })
     * export class AppModule { ... }
     * ```
     */


    var HttpClientBackendService =
    /** @class */
    function (_super) {
      __extends(HttpClientBackendService, _super);

      function HttpClientBackendService(inMemDbService, config, xhrFactory) {
        var _this = _super.call(this, inMemDbService, config) || this;

        _this.xhrFactory = xhrFactory;
        return _this;
      }

      HttpClientBackendService.prototype.handle = function (req) {
        try {
          return this.handleRequest(req);
        } catch (error) {
          var err = error.message || error;
          var resOptions_1 = this.createErrorResponseOptions(req.url, _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].INTERNAL_SERVER_ERROR, "" + err);
          return this.createResponse$(function () {
            return resOptions_1;
          });
        }
      }; ////  protected overrides /////


      HttpClientBackendService.prototype.getJsonBody = function (req) {
        return req.body;
      };

      HttpClientBackendService.prototype.getRequestMethod = function (req) {
        return (req.method || 'get').toLowerCase();
      };

      HttpClientBackendService.prototype.createHeaders = function (headers) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headers);
      };

      HttpClientBackendService.prototype.createQueryMap = function (search) {
        var map = new Map();

        if (search) {
          var params_1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
            fromString: search
          });
          params_1.keys().forEach(function (p) {
            return map.set(p, params_1.getAll(p));
          });
        }

        return map;
      };

      HttpClientBackendService.prototype.createResponse$fromResponseOptions$ = function (resOptions$) {
        return resOptions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (opts) {
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"](opts);
        }));
      };

      HttpClientBackendService.prototype.createPassThruBackend = function () {
        try {
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpXhrBackend"](this.xhrFactory);
        } catch (ex) {
          ex.message = 'Cannot create passThru404 backend; ' + (ex.message || '');
          throw ex;
        }
      };

      HttpClientBackendService = __decorate([__param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_interfaces__WEBPACK_IMPORTED_MODULE_4__["InMemoryBackendConfig"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __metadata("design:paramtypes", [_interfaces__WEBPACK_IMPORTED_MODULE_4__["InMemoryDbService"], _interfaces__WEBPACK_IMPORTED_MODULE_4__["InMemoryBackendConfigArgs"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["XhrFactory"]])], HttpClientBackendService);

      HttpClientBackendService.ɵfac = function HttpClientBackendService_Factory(t) {
        return new (t || HttpClientBackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_interfaces__WEBPACK_IMPORTED_MODULE_4__["InMemoryDbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_interfaces__WEBPACK_IMPORTED_MODULE_4__["InMemoryBackendConfig"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["XhrFactory"]));
      };

      HttpClientBackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HttpClientBackendService,
        factory: function factory(t) {
          return HttpClientBackendService.ɵfac(t);
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpClientBackendService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _interfaces__WEBPACK_IMPORTED_MODULE_4__["InMemoryDbService"]
          }, {
            type: _interfaces__WEBPACK_IMPORTED_MODULE_4__["InMemoryBackendConfigArgs"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_interfaces__WEBPACK_IMPORTED_MODULE_4__["InMemoryBackendConfig"]]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["XhrFactory"]
          }];
        }, null);
      })();

      return HttpClientBackendService;
    }(_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]); //# sourceMappingURL=http-client-backend.service.js.map

    /***/

  },

  /***/
  "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-client-in-memory-web-api.module.js":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-client-in-memory-web-api.module.js ***!
    \*****************************************************************************************************/

  /*! exports provided: httpClientInMemBackendServiceFactory, HttpClientInMemoryWebApiModule */

  /***/
  function node_modulesAngularInMemoryWebApi__ivy_ngcc__HttpClientInMemoryWebApiModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "httpClientInMemBackendServiceFactory", function () {
      return httpClientInMemBackendServiceFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientInMemoryWebApiModule", function () {
      return HttpClientInMemoryWebApiModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./interfaces */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/interfaces.js");
    /* harmony import */


    var _http_client_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./http-client-backend.service */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-client-backend.service.js"); ////// HttpClient-Only version ////


    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }; // Internal - Creates the in-mem backend for the HttpClient module
    // AoT requires factory to be exported


    function httpClientInMemBackendServiceFactory(dbService, options, xhrFactory) {
      var backend = new _http_client_backend_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientBackendService"](dbService, options, xhrFactory);
      return backend;
    }

    var HttpClientInMemoryWebApiModule =
    /** @class */
    function () {
      function HttpClientInMemoryWebApiModule() {}

      HttpClientInMemoryWebApiModule_1 = HttpClientInMemoryWebApiModule;
      /**
      *  Redirect the Angular `HttpClient` XHR calls
      *  to in-memory data store that implements `InMemoryDbService`.
      *  with class that implements InMemoryDbService and creates an in-memory database.
      *
      *  Usually imported in the root application module.
      *  Can import in a lazy feature module too, which will shadow modules loaded earlier
      *
      * @param {Type} dbCreator - Class that creates seed data for in-memory database. Must implement InMemoryDbService.
      * @param {InMemoryBackendConfigArgs} [options]
      *
      * @example
      * HttpInMemoryWebApiModule.forRoot(dbCreator);
      * HttpInMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
      */

      HttpClientInMemoryWebApiModule.forRoot = function (dbCreator, options) {
        return {
          ngModule: HttpClientInMemoryWebApiModule_1,
          providers: [{
            provide: _interfaces__WEBPACK_IMPORTED_MODULE_2__["InMemoryDbService"],
            useClass: dbCreator
          }, {
            provide: _interfaces__WEBPACK_IMPORTED_MODULE_2__["InMemoryBackendConfig"],
            useValue: options
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"],
            useFactory: httpClientInMemBackendServiceFactory,
            deps: [_interfaces__WEBPACK_IMPORTED_MODULE_2__["InMemoryDbService"], _interfaces__WEBPACK_IMPORTED_MODULE_2__["InMemoryBackendConfig"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["XhrFactory"]]
          }]
        };
      };
      /**
      *
      * Enable and configure the in-memory web api in a lazy-loaded feature module.
      * Same as `forRoot`.
      * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
      */


      HttpClientInMemoryWebApiModule.forFeature = function (dbCreator, options) {
        return HttpClientInMemoryWebApiModule_1.forRoot(dbCreator, options);
      };

      var HttpClientInMemoryWebApiModule_1;
      HttpClientInMemoryWebApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: HttpClientInMemoryWebApiModule
      });
      HttpClientInMemoryWebApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function HttpClientInMemoryWebApiModule_Factory(t) {
          return new (t || HttpClientInMemoryWebApiModule)();
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpClientInMemoryWebApiModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{}]
        }], function () {
          return [];
        }, null);
      })();

      return HttpClientInMemoryWebApiModule;
    }(); //# sourceMappingURL=http-client-in-memory-web-api.module.js.map

    /***/

  },

  /***/
  "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-status-codes.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-status-codes.js ***!
    \**********************************************************************************/

  /*! exports provided: STATUS, STATUS_CODE_INFO, getStatusText, isSuccess */

  /***/
  function node_modulesAngularInMemoryWebApi__ivy_ngcc__HttpStatusCodesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STATUS", function () {
      return STATUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STATUS_CODE_INFO", function () {
      return STATUS_CODE_INFO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getStatusText", function () {
      return getStatusText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isSuccess", function () {
      return isSuccess;
    });

    var STATUS = {
      CONTINUE: 100,
      SWITCHING_PROTOCOLS: 101,
      OK: 200,
      CREATED: 201,
      ACCEPTED: 202,
      NON_AUTHORITATIVE_INFORMATION: 203,
      NO_CONTENT: 204,
      RESET_CONTENT: 205,
      PARTIAL_CONTENT: 206,
      MULTIPLE_CHOICES: 300,
      MOVED_PERMANTENTLY: 301,
      FOUND: 302,
      SEE_OTHER: 303,
      NOT_MODIFIED: 304,
      USE_PROXY: 305,
      TEMPORARY_REDIRECT: 307,
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      PAYMENT_REQUIRED: 402,
      FORBIDDEN: 403,
      NOT_FOUND: 404,
      METHOD_NOT_ALLOWED: 405,
      NOT_ACCEPTABLE: 406,
      PROXY_AUTHENTICATION_REQUIRED: 407,
      REQUEST_TIMEOUT: 408,
      CONFLICT: 409,
      GONE: 410,
      LENGTH_REQUIRED: 411,
      PRECONDITION_FAILED: 412,
      PAYLOAD_TO_LARGE: 413,
      URI_TOO_LONG: 414,
      UNSUPPORTED_MEDIA_TYPE: 415,
      RANGE_NOT_SATISFIABLE: 416,
      EXPECTATION_FAILED: 417,
      IM_A_TEAPOT: 418,
      UPGRADE_REQUIRED: 426,
      INTERNAL_SERVER_ERROR: 500,
      NOT_IMPLEMENTED: 501,
      BAD_GATEWAY: 502,
      SERVICE_UNAVAILABLE: 503,
      GATEWAY_TIMEOUT: 504,
      HTTP_VERSION_NOT_SUPPORTED: 505,
      PROCESSING: 102,
      MULTI_STATUS: 207,
      IM_USED: 226,
      PERMANENT_REDIRECT: 308,
      UNPROCESSABLE_ENTRY: 422,
      LOCKED: 423,
      FAILED_DEPENDENCY: 424,
      PRECONDITION_REQUIRED: 428,
      TOO_MANY_REQUESTS: 429,
      REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
      UNAVAILABLE_FOR_LEGAL_REASONS: 451,
      VARIANT_ALSO_NEGOTIATES: 506,
      INSUFFICIENT_STORAGE: 507,
      NETWORK_AUTHENTICATION_REQUIRED: 511
    };
    /*tslint:disable:quotemark max-line-length one-line */

    var STATUS_CODE_INFO = {
      '100': {
        'code': 100,
        'text': 'Continue',
        'description': '\"The initial part of a request has been received and has not yet been rejected by the server.\"',
        'spec_title': 'RFC7231#6.2.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.2.1'
      },
      '101': {
        'code': 101,
        'text': 'Switching Protocols',
        'description': '\"The server understands and is willing to comply with the client\'s request, via the Upgrade header field, for a change in the application protocol being used on this connection.\"',
        'spec_title': 'RFC7231#6.2.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.2.2'
      },
      '200': {
        'code': 200,
        'text': 'OK',
        'description': '\"The request has succeeded.\"',
        'spec_title': 'RFC7231#6.3.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.1'
      },
      '201': {
        'code': 201,
        'text': 'Created',
        'description': '\"The request has been fulfilled and has resulted in one or more new resources being created.\"',
        'spec_title': 'RFC7231#6.3.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.2'
      },
      '202': {
        'code': 202,
        'text': 'Accepted',
        'description': '\"The request has been accepted for processing, but the processing has not been completed.\"',
        'spec_title': 'RFC7231#6.3.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.3'
      },
      '203': {
        'code': 203,
        'text': 'Non-Authoritative Information',
        'description': '\"The request was successful but the enclosed payload has been modified from that of the origin server\'s 200 (OK) response by a transforming proxy.\"',
        'spec_title': 'RFC7231#6.3.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.4'
      },
      '204': {
        'code': 204,
        'text': 'No Content',
        'description': '\"The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.\"',
        'spec_title': 'RFC7231#6.3.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.5'
      },
      '205': {
        'code': 205,
        'text': 'Reset Content',
        'description': '\"The server has fulfilled the request and desires that the user agent reset the \"document view\", which caused the request to be sent, to its original state as received from the origin server.\"',
        'spec_title': 'RFC7231#6.3.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.6'
      },
      '206': {
        'code': 206,
        'text': 'Partial Content',
        'description': '\"The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests\'s Range header field.\"',
        'spec_title': 'RFC7233#4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7233#section-4.1'
      },
      '300': {
        'code': 300,
        'text': 'Multiple Choices',
        'description': '\"The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.\"',
        'spec_title': 'RFC7231#6.4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.1'
      },
      '301': {
        'code': 301,
        'text': 'Moved Permanently',
        'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.\"',
        'spec_title': 'RFC7231#6.4.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.2'
      },
      '302': {
        'code': 302,
        'text': 'Found',
        'description': '\"The target resource resides temporarily under a different URI.\"',
        'spec_title': 'RFC7231#6.4.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.3'
      },
      '303': {
        'code': 303,
        'text': 'See Other',
        'description': '\"The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request.\"',
        'spec_title': 'RFC7231#6.4.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.4'
      },
      '304': {
        'code': 304,
        'text': 'Not Modified',
        'description': '\"A conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false.\"',
        'spec_title': 'RFC7232#4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7232#section-4.1'
      },
      '305': {
        'code': 305,
        'text': 'Use Proxy',
        'description': '*deprecated*',
        'spec_title': 'RFC7231#6.4.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.5'
      },
      '307': {
        'code': 307,
        'text': 'Temporary Redirect',
        'description': '\"The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.\"',
        'spec_title': 'RFC7231#6.4.7',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.7'
      },
      '400': {
        'code': 400,
        'text': 'Bad Request',
        'description': '\"The server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.\"',
        'spec_title': 'RFC7231#6.5.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.1'
      },
      '401': {
        'code': 401,
        'text': 'Unauthorized',
        'description': '\"The request has not been applied because it lacks valid authentication credentials for the target resource.\"',
        'spec_title': 'RFC7235#6.3.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7235#section-3.1'
      },
      '402': {
        'code': 402,
        'text': 'Payment Required',
        'description': '*reserved*',
        'spec_title': 'RFC7231#6.5.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.2'
      },
      '403': {
        'code': 403,
        'text': 'Forbidden',
        'description': '\"The server understood the request but refuses to authorize it.\"',
        'spec_title': 'RFC7231#6.5.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.3'
      },
      '404': {
        'code': 404,
        'text': 'Not Found',
        'description': '\"The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.\"',
        'spec_title': 'RFC7231#6.5.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.4'
      },
      '405': {
        'code': 405,
        'text': 'Method Not Allowed',
        'description': '\"The method specified in the request-line is known by the origin server but not supported by the target resource.\"',
        'spec_title': 'RFC7231#6.5.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.5'
      },
      '406': {
        'code': 406,
        'text': 'Not Acceptable',
        'description': '\"The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.\"',
        'spec_title': 'RFC7231#6.5.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.6'
      },
      '407': {
        'code': 407,
        'text': 'Proxy Authentication Required',
        'description': '\"The client needs to authenticate itself in order to use a proxy.\"',
        'spec_title': 'RFC7231#6.3.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.2'
      },
      '408': {
        'code': 408,
        'text': 'Request Timeout',
        'description': '\"The server did not receive a complete request message within the time that it was prepared to wait.\"',
        'spec_title': 'RFC7231#6.5.7',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.7'
      },
      '409': {
        'code': 409,
        'text': 'Conflict',
        'description': '\"The request could not be completed due to a conflict with the current state of the resource.\"',
        'spec_title': 'RFC7231#6.5.8',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.8'
      },
      '410': {
        'code': 410,
        'text': 'Gone',
        'description': '\"Access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.\"',
        'spec_title': 'RFC7231#6.5.9',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.9'
      },
      '411': {
        'code': 411,
        'text': 'Length Required',
        'description': '\"The server refuses to accept the request without a defined Content-Length.\"',
        'spec_title': 'RFC7231#6.5.10',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.10'
      },
      '412': {
        'code': 412,
        'text': 'Precondition Failed',
        'description': '\"One or more preconditions given in the request header fields evaluated to false when tested on the server.\"',
        'spec_title': 'RFC7232#4.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7232#section-4.2'
      },
      '413': {
        'code': 413,
        'text': 'Payload Too Large',
        'description': '\"The server is refusing to process a request because the request payload is larger than the server is willing or able to process.\"',
        'spec_title': 'RFC7231#6.5.11',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.11'
      },
      '414': {
        'code': 414,
        'text': 'URI Too Long',
        'description': '\"The server is refusing to service the request because the request-target is longer than the server is willing to interpret.\"',
        'spec_title': 'RFC7231#6.5.12',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.12'
      },
      '415': {
        'code': 415,
        'text': 'Unsupported Media Type',
        'description': '\"The origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method.\"',
        'spec_title': 'RFC7231#6.5.13',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.13'
      },
      '416': {
        'code': 416,
        'text': 'Range Not Satisfiable',
        'description': '\"None of the ranges in the request\'s Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.\"',
        'spec_title': 'RFC7233#4.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7233#section-4.4'
      },
      '417': {
        'code': 417,
        'text': 'Expectation Failed',
        'description': '\"The expectation given in the request\'s Expect header field could not be met by at least one of the inbound servers.\"',
        'spec_title': 'RFC7231#6.5.14',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.14'
      },
      '418': {
        'code': 418,
        'text': 'I\'m a teapot',
        'description': '\"1988 April Fools Joke. Returned by tea pots requested to brew coffee.\"',
        'spec_title': 'RFC 2324',
        'spec_href': 'https://tools.ietf.org/html/rfc2324'
      },
      '426': {
        'code': 426,
        'text': 'Upgrade Required',
        'description': '\"The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.\"',
        'spec_title': 'RFC7231#6.5.15',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.15'
      },
      '500': {
        'code': 500,
        'text': 'Internal Server Error',
        'description': '\"The server encountered an unexpected condition that prevented it from fulfilling the request.\"',
        'spec_title': 'RFC7231#6.6.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.1'
      },
      '501': {
        'code': 501,
        'text': 'Not Implemented',
        'description': '\"The server does not support the functionality required to fulfill the request.\"',
        'spec_title': 'RFC7231#6.6.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.2'
      },
      '502': {
        'code': 502,
        'text': 'Bad Gateway',
        'description': '\"The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.\"',
        'spec_title': 'RFC7231#6.6.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.3'
      },
      '503': {
        'code': 503,
        'text': 'Service Unavailable',
        'description': '\"The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.\"',
        'spec_title': 'RFC7231#6.6.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.4'
      },
      '504': {
        'code': 504,
        'text': 'Gateway Time-out',
        'description': '\"The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.\"',
        'spec_title': 'RFC7231#6.6.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.5'
      },
      '505': {
        'code': 505,
        'text': 'HTTP Version Not Supported',
        'description': '\"The server does not support, or refuses to support, the protocol version that was used in the request message.\"',
        'spec_title': 'RFC7231#6.6.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.6'
      },
      '102': {
        'code': 102,
        'text': 'Processing',
        'description': '\"An interim response to inform the client that the server has accepted the complete request, but has not yet completed it.\"',
        'spec_title': 'RFC5218#10.1',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.1'
      },
      '207': {
        'code': 207,
        'text': 'Multi-Status',
        'description': '\"Status for multiple independent operations.\"',
        'spec_title': 'RFC5218#10.2',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.2'
      },
      '226': {
        'code': 226,
        'text': 'IM Used',
        'description': '\"The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.\"',
        'spec_title': 'RFC3229#10.4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc3229#section-10.4.1'
      },
      '308': {
        'code': 308,
        'text': 'Permanent Redirect',
        'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET.\"',
        'spec_title': 'RFC7238',
        'spec_href': 'http://tools.ietf.org/html/rfc7238'
      },
      '422': {
        'code': 422,
        'text': 'Unprocessable Entity',
        'description': '\"The server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.\"',
        'spec_title': 'RFC5218#10.3',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.3'
      },
      '423': {
        'code': 423,
        'text': 'Locked',
        'description': '\"The source or destination resource of a method is locked.\"',
        'spec_title': 'RFC5218#10.4',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.4'
      },
      '424': {
        'code': 424,
        'text': 'Failed Dependency',
        'description': '\"The method could not be performed on the resource because the requested action depended on another action and that action failed.\"',
        'spec_title': 'RFC5218#10.5',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.5'
      },
      '428': {
        'code': 428,
        'text': 'Precondition Required',
        'description': '\"The origin server requires the request to be conditional.\"',
        'spec_title': 'RFC6585#3',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-3'
      },
      '429': {
        'code': 429,
        'text': 'Too Many Requests',
        'description': '\"The user has sent too many requests in a given amount of time (\"rate limiting\").\"',
        'spec_title': 'RFC6585#4',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-4'
      },
      '431': {
        'code': 431,
        'text': 'Request Header Fields Too Large',
        'description': '\"The server is unwilling to process the request because its header fields are too large.\"',
        'spec_title': 'RFC6585#5',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-5'
      },
      '451': {
        'code': 451,
        'text': 'Unavailable For Legal Reasons',
        'description': '\"The server is denying access to the resource in response to a legal demand.\"',
        'spec_title': 'draft-ietf-httpbis-legally-restricted-status',
        'spec_href': 'http://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status'
      },
      '506': {
        'code': 506,
        'text': 'Variant Also Negotiates',
        'description': '\"The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.\"',
        'spec_title': 'RFC2295#8.1',
        'spec_href': 'http://tools.ietf.org/html/rfc2295#section-8.1'
      },
      '507': {
        'code': 507,
        'text': 'Insufficient Storage',
        'description': '\The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.\"',
        'spec_title': 'RFC5218#10.6',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.6'
      },
      '511': {
        'code': 511,
        'text': 'Network Authentication Required',
        'description': '\"The client needs to authenticate to gain network access.\"',
        'spec_title': 'RFC6585#6',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-6'
      }
    };
    /**
     * get the status text from StatusCode
     */

    function getStatusText(status) {
      return STATUS_CODE_INFO[status].text || 'Unknown Status';
    }
    /**
     * Returns true if the the Http Status Code is 200-299 (success)
     */


    function isSuccess(status) {
      return status >= 200 && status < 300;
    }

    ; //# sourceMappingURL=http-status-codes.js.map

    /***/
  },

  /***/
  "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/in-memory-web-api.module.js":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/in-memory-web-api.module.js ***!
    \*****************************************************************************************/

  /*! exports provided: InMemoryWebApiModule */

  /***/
  function node_modulesAngularInMemoryWebApi__ivy_ngcc__InMemoryWebApiModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InMemoryWebApiModule", function () {
      return InMemoryWebApiModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./interfaces */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/interfaces.js");
    /* harmony import */


    var _http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./http-client-in-memory-web-api.module */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-client-in-memory-web-api.module.js"); ////// For apps with both Http and HttpClient ////


    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var InMemoryWebApiModule =
    /** @class */
    function () {
      function InMemoryWebApiModule() {}

      InMemoryWebApiModule_1 = InMemoryWebApiModule;
      /**
      *  Redirect BOTH Angular `Http` and `HttpClient` XHR calls
      *  to in-memory data store that implements `InMemoryDbService`.
      *  with class that implements InMemoryDbService and creates an in-memory database.
      *
      *  Usually imported in the root application module.
      *  Can import in a lazy feature module too, which will shadow modules loaded earlier
      *
      * @param {Type} dbCreator - Class that creates seed data for in-memory database. Must implement InMemoryDbService.
      * @param {InMemoryBackendConfigArgs} [options]
      *
      * @example
      * InMemoryWebApiModule.forRoot(dbCreator);
      * InMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
      */

      InMemoryWebApiModule.forRoot = function (dbCreator, options) {
        return {
          ngModule: InMemoryWebApiModule_1,
          providers: [{
            provide: _interfaces__WEBPACK_IMPORTED_MODULE_2__["InMemoryDbService"],
            useClass: dbCreator
          }, {
            provide: _interfaces__WEBPACK_IMPORTED_MODULE_2__["InMemoryBackendConfig"],
            useValue: options
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"],
            useFactory: _http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_3__["httpClientInMemBackendServiceFactory"],
            deps: [_interfaces__WEBPACK_IMPORTED_MODULE_2__["InMemoryDbService"], _interfaces__WEBPACK_IMPORTED_MODULE_2__["InMemoryBackendConfig"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["XhrFactory"]]
          }]
        };
      };
      /**
       *
       * Enable and configure the in-memory web api in a lazy-loaded feature module.
       * Same as `forRoot`.
       * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
       */


      InMemoryWebApiModule.forFeature = function (dbCreator, options) {
        return InMemoryWebApiModule_1.forRoot(dbCreator, options);
      };

      var InMemoryWebApiModule_1;
      InMemoryWebApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: InMemoryWebApiModule
      });
      InMemoryWebApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function InMemoryWebApiModule_Factory(t) {
          return new (t || InMemoryWebApiModule)();
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InMemoryWebApiModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{}]
        }], function () {
          return [];
        }, null);
      })();

      return InMemoryWebApiModule;
    }(); //# sourceMappingURL=in-memory-web-api.module.js.map

    /***/

  },

  /***/
  "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js ***!
    \**********************************************************************/

  /*! exports provided: BackendService, STATUS, STATUS_CODE_INFO, getStatusText, isSuccess, HttpClientBackendService, InMemoryWebApiModule, httpClientInMemBackendServiceFactory, HttpClientInMemoryWebApiModule, InMemoryDbService, InMemoryBackendConfigArgs, InMemoryBackendConfig, parseUri, removeTrailingSlash */

  /***/
  function node_modulesAngularInMemoryWebApi__ivy_ngcc__IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _backend_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./backend.service */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/backend.service.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BackendService", function () {
      return _backend_service__WEBPACK_IMPORTED_MODULE_0__["BackendService"];
    });
    /* harmony import */


    var _http_status_codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./http-status-codes */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-status-codes.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "STATUS", function () {
      return _http_status_codes__WEBPACK_IMPORTED_MODULE_1__["STATUS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "STATUS_CODE_INFO", function () {
      return _http_status_codes__WEBPACK_IMPORTED_MODULE_1__["STATUS_CODE_INFO"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getStatusText", function () {
      return _http_status_codes__WEBPACK_IMPORTED_MODULE_1__["getStatusText"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isSuccess", function () {
      return _http_status_codes__WEBPACK_IMPORTED_MODULE_1__["isSuccess"];
    });
    /* harmony import */


    var _http_client_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./http-client-backend.service */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-client-backend.service.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HttpClientBackendService", function () {
      return _http_client_backend_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientBackendService"];
    });
    /* harmony import */


    var _in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./in-memory-web-api.module */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/in-memory-web-api.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InMemoryWebApiModule", function () {
      return _in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_3__["InMemoryWebApiModule"];
    });
    /* harmony import */


    var _http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./http-client-in-memory-web-api.module */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-client-in-memory-web-api.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "httpClientInMemBackendServiceFactory", function () {
      return _http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_4__["httpClientInMemBackendServiceFactory"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HttpClientInMemoryWebApiModule", function () {
      return _http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"];
    });
    /* harmony import */


    var _interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./interfaces */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/interfaces.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InMemoryDbService", function () {
      return _interfaces__WEBPACK_IMPORTED_MODULE_5__["InMemoryDbService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InMemoryBackendConfigArgs", function () {
      return _interfaces__WEBPACK_IMPORTED_MODULE_5__["InMemoryBackendConfigArgs"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InMemoryBackendConfig", function () {
      return _interfaces__WEBPACK_IMPORTED_MODULE_5__["InMemoryBackendConfig"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "parseUri", function () {
      return _interfaces__WEBPACK_IMPORTED_MODULE_5__["parseUri"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "removeTrailingSlash", function () {
      return _interfaces__WEBPACK_IMPORTED_MODULE_5__["removeTrailingSlash"];
    }); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/interfaces.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/interfaces.js ***!
    \***************************************************************************/

  /*! exports provided: InMemoryDbService, InMemoryBackendConfigArgs, InMemoryBackendConfig, parseUri, removeTrailingSlash */

  /***/
  function node_modulesAngularInMemoryWebApi__ivy_ngcc__InterfacesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InMemoryDbService", function () {
      return InMemoryDbService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InMemoryBackendConfigArgs", function () {
      return InMemoryBackendConfigArgs;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InMemoryBackendConfig", function () {
      return InMemoryBackendConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseUri", function () {
      return parseUri;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeTrailingSlash", function () {
      return removeTrailingSlash;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    /**
    * Interface for a class that creates an in-memory database
    *
    * Its `createDb` method creates a hash of named collections that represents the database
    *
    * For maximum flexibility, the service may define HTTP method overrides.
    * Such methods must match the spelling of an HTTP method in lower case (e.g, "get").
    * If a request has a matching method, it will be called as in
    * `get(info: requestInfo, db: {})` where `db` is the database object described above.
    */


    var InMemoryDbService =
    /** @class */
    function () {
      function InMemoryDbService() {}

      return InMemoryDbService;
    }();
    /**
    * Interface for InMemoryBackend configuration options
    */


    var InMemoryBackendConfigArgs =
    /** @class */
    function () {
      function InMemoryBackendConfigArgs() {}

      return InMemoryBackendConfigArgs;
    }(); /////////////////////////////////

    /**
    *  InMemoryBackendService configuration options
    *  Usage:
    *    InMemoryWebApiModule.forRoot(InMemHeroService, {delay: 600})
    *
    *  or if providing separately:
    *    provide(InMemoryBackendConfig, {useValue: {delay: 600}}),
    */


    var InMemoryBackendConfig =
    /** @class */
    function () {
      function InMemoryBackendConfig(config) {
        if (config === void 0) {
          config = {};
        }

        Object.assign(this, {
          // default config:
          caseSensitiveSearch: false,
          dataEncapsulation: false,
          delay: 500,
          delete404: false,
          passThruUnknownUrl: false,
          post204: true,
          post409: false,
          put204: true,
          put404: false,
          apiBase: undefined,
          host: undefined,
          rootPath: undefined // default value is actually set in InMemoryBackendService ctor

        }, config);
      }

      InMemoryBackendConfig = __decorate([__metadata("design:paramtypes", [InMemoryBackendConfigArgs])], InMemoryBackendConfig);

      InMemoryBackendConfig.ɵfac = function InMemoryBackendConfig_Factory(t) {
        return new (t || InMemoryBackendConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InMemoryBackendConfigArgs));
      };

      InMemoryBackendConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: InMemoryBackendConfig,
        factory: function factory(t) {
          return InMemoryBackendConfig.ɵfac(t);
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InMemoryBackendConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: InMemoryBackendConfigArgs
          }];
        }, null);
      })();

      return InMemoryBackendConfig;
    }();
    /** Return information (UriInfo) about a URI  */


    function parseUri(str) {
      // Adapted from parseuri package - http://blog.stevenlevithan.com/archives/parseuri
      // tslint:disable-next-line:max-line-length
      var URL_REGEX = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      var m = URL_REGEX.exec(str);
      var uri = {
        source: '',
        protocol: '',
        authority: '',
        userInfo: '',
        user: '',
        password: '',
        host: '',
        port: '',
        relative: '',
        path: '',
        directory: '',
        file: '',
        query: '',
        anchor: ''
      };
      var keys = Object.keys(uri);
      var i = keys.length;

      while (i--) {
        uri[keys[i]] = m[i] || '';
      }

      return uri;
    }

    function removeTrailingSlash(path) {
      return path.replace(/\/$/, '');
    } //# sourceMappingURL=interfaces.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js ***!
    \*************************************************************************/

  /*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */

  /***/
  function node_modulesNgxPagination__ivy_ngcc__DistNgxPaginationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return DEFAULT_STYLES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return DEFAULT_TEMPLATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function () {
      return NgxPaginationModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationService", function () {
      return PaginationService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function () {
      return PaginationControlsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function () {
      return PaginationControlsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginatePipe", function () {
      return PaginatePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PaginationControlsComponent_ul_2_li_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r819 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_1_a_1_Template_a_keyup_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r819);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r811.previous();
        })("click", function PaginationControlsComponent_ul_2_li_1_a_1_Template_a_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r819);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r811.previous();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r816 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r816.previousLabel + " " + ctx_r816.screenReaderPageLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r816.previousLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r816.screenReaderPageLabel);
      }
    }

    function PaginationControlsComponent_ul_2_li_1_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r817 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r817.previousLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r817.screenReaderPageLabel);
      }
    }

    function PaginationControlsComponent_ul_2_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_1_a_1_Template, 4, 3, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_1_span_2_Template, 4, 2, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r811.isFirstPage());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 1 < _r811.getCurrent());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r811.isFirstPage());
      }
    }

    function PaginationControlsComponent_ul_2_li_4_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r826 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_4_a_1_Template_a_keyup_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r826);

          var page_r821 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r811.setCurrent(page_r821.value);
        })("click", function PaginationControlsComponent_ul_2_li_4_a_1_Template_a_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r826);

          var page_r821 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r811.setCurrent(page_r821.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r821 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r822 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r822.screenReaderPageLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r821.label === "..." ? page_r821.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, page_r821.label, ""));
      }
    }

    function PaginationControlsComponent_ul_2_li_4_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var page_r821 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r823 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r823.screenReaderCurrentLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r821.label === "..." ? page_r821.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, page_r821.label, ""));
      }
    }

    function PaginationControlsComponent_ul_2_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_4_a_1_Template, 6, 5, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_4_ng_container_2_Template, 6, 5, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r821 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current", _r811.getCurrent() === page_r821.value)("ellipsis", page_r821.label === "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r811.getCurrent() !== page_r821.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r811.getCurrent() === page_r821.value);
      }
    }

    function PaginationControlsComponent_ul_2_li_5_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r834 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_5_a_1_Template_a_keyup_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r834);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r811.next();
        })("click", function PaginationControlsComponent_ul_2_li_5_a_1_Template_a_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r834);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r811.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r831 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r831.nextLabel + " " + ctx_r831.screenReaderPageLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r831.nextLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r831.screenReaderPageLabel);
      }
    }

    function PaginationControlsComponent_ul_2_li_5_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r832 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r832.nextLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r832.screenReaderPageLabel);
      }
    }

    function PaginationControlsComponent_ul_2_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_5_a_1_Template, 4, 3, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_5_span_2_Template, 4, 2, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r811.isLastPage());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r811.isLastPage());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r811.isLastPage());
      }
    }

    function PaginationControlsComponent_ul_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_1_Template, 3, 4, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationControlsComponent_ul_2_li_4_Template, 3, 6, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationControlsComponent_ul_2_li_5_Template, 3, 4, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r812 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("responsive", ctx_r812.responsive);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r812.screenReaderPaginationLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r812.directionLinks);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _r811.getCurrent(), " / ", _r811.getLastPage(), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r811.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r812.directionLinks);
      }
    }

    var PaginationService =
    /** @class */
    function () {
      function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
      }

      PaginationService.prototype.defaultId = function () {
        return this.DEFAULT_ID;
      };
      /**
       * Register a PaginationInstance with this service. Returns a
       * boolean value signifying whether the instance is new or
       * updated (true = new or updated, false = unchanged).
       */


      PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
          instance.id = this.DEFAULT_ID;
        }

        if (!this.instances[instance.id]) {
          this.instances[instance.id] = instance;
          return true;
        } else {
          return this.updateInstance(instance);
        }
      };
      /**
       * Check each property of the instance and update any that have changed. Return
       * true if any changes were made, else return false.
       */


      PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;

        for (var prop in this.instances[instance.id]) {
          if (instance[prop] !== this.instances[instance.id][prop]) {
            this.instances[instance.id][prop] = instance[prop];
            changed = true;
          }
        }

        return changed;
      };
      /**
       * Returns the current page number.
       */


      PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
          return this.instances[id].currentPage;
        }
      };
      /**
       * Sets the current page number.
       */


      PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
          var instance = this.instances[id];
          var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);

          if (page <= maxPage && 1 <= page) {
            this.instances[id].currentPage = page;
            this.change.emit(id);
          }
        }
      };
      /**
       * Sets the value of instance.totalItems
       */


      PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
          this.instances[id].totalItems = totalItems;
          this.change.emit(id);
        }
      };
      /**
       * Sets the value of instance.itemsPerPage.
       */


      PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
          this.instances[id].itemsPerPage = itemsPerPage;
          this.change.emit(id);
        }
      };
      /**
       * Returns a clone of the pagination instance object matching the id. If no
       * id specified, returns the instance corresponding to the default id.
       */


      PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) {
          id = this.DEFAULT_ID;
        }

        if (this.instances[id]) {
          return this.clone(this.instances[id]);
        }

        return {};
      };
      /**
       * Perform a shallow clone of an object.
       */


      PaginationService.prototype.clone = function (obj) {
        var target = {};

        for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
            target[i] = obj[i];
          }
        }

        return target;
      };

      PaginationService.ɵfac = function PaginationService_Factory(t) {
        return new (t || PaginationService)();
      };

      PaginationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PaginationService,
        factory: function factory(t) {
          return PaginationService.ɵfac(t);
        }
      });
      return PaginationService;
    }();

    var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;

    var PaginatePipe =
    /** @class */
    function () {
      function PaginatePipe(service) {
        this.service = service; // store the values from the last time the pipe was invoked

        this.state = {};
      }

      PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (!(collection instanceof Array)) {
          var _id = args.id || this.service.defaultId();

          if (this.state[_id]) {
            return this.state[_id].slice;
          } else {
            return collection;
          }
        }

        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        var emitChange = this.service.register(instance);

        if (!serverSideMode && collection instanceof Array) {
          perPage = +perPage || LARGE_NUMBER;
          start = (instance.currentPage - 1) * perPage;
          end = start + perPage;
          var isIdentical = this.stateIsIdentical(id, collection, start, end);

          if (isIdentical) {
            return this.state[id].slice;
          } else {
            var slice = collection.slice(start, end);
            this.saveState(id, collection, slice, start, end);
            this.service.change.emit(id);
            return slice;
          }
        } else {
          if (emitChange) {
            this.service.change.emit(id);
          } // save the state for server-side collection to avoid null
          // flash as new data loads.


          this.saveState(id, collection, collection, start, end);
          return collection;
        }
      };
      /**
       * Create an PaginationInstance object, using defaults for any optional properties not supplied.
       */


      PaginatePipe.prototype.createInstance = function (collection, config) {
        this.checkConfig(config);
        return {
          id: config.id != null ? config.id : this.service.defaultId(),
          itemsPerPage: +config.itemsPerPage || 0,
          currentPage: +config.currentPage || 1,
          totalItems: +config.totalItems || collection.length
        };
      };
      /**
       * Ensure the argument passed to the filter contains the required properties.
       */


      PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) {
          return !(prop in config);
        });

        if (0 < missing.length) {
          throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
      };
      /**
       * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
       * array for a given id. This means that the next time the pipe is run on this collection & id, we just
       * need to check that the collection, start and end points are all identical, and if so, return the
       * last sliced array.
       */


      PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
          collection: collection,
          size: collection.length,
          slice: slice,
          start: start,
          end: end
        };
      };
      /**
       * For a given id, returns true if the collection, size, start and end values are identical.
       */


      PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];

        if (!state) {
          return false;
        }

        var isMetaDataIdentical = state.size === collection.length && state.start === start && state.end === end;

        if (!isMetaDataIdentical) {
          return false;
        }

        return state.slice.every(function (element, index) {
          return element === collection[start + index];
        });
      };

      PaginatePipe = __decorate$1([__metadata("design:paramtypes", [PaginationService])], PaginatePipe);

      PaginatePipe.ɵfac = function PaginatePipe_Factory(t) {
        return new (t || PaginatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService));
      };

      PaginatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "paginate",
        type: PaginatePipe,
        pure: false
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'paginate',
            pure: false
          }]
        }], function () {
          return [{
            type: PaginationService
          }];
        }, null);
      })();

      return PaginatePipe;
    }();
    /**
     * The default template and styles for the pagination links are borrowed directly
     * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
     */


    var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\"\n                         (pageBoundsCorrection)=\"pageBoundsCorrection.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
    var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xAB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xBB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

    var __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$1 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    function coerceToBoolean(input) {
      return !!input && input !== 'false';
    }
    /**
     * The default pagination controls component. Actually just a default implementation of a custom template.
     */


    var PaginationControlsComponent =
    /** @class */
    function () {
      function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
      }

      Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function get() {
          return this._directionLinks;
        },
        set: function set(value) {
          this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function get() {
          return this._autoHide;
        },
        set: function set(value) {
          this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function get() {
          return this._responsive;
        },
        set: function set(value) {
          this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
      });

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "id", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Number)], PaginationControlsComponent.prototype, "maxSize", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], PaginationControlsComponent.prototype, "directionLinks", null);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], PaginationControlsComponent.prototype, "autoHide", null);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], PaginationControlsComponent.prototype, "responsive", null);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "previousLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "nextLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "screenReaderPaginationLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "screenReaderPageLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "screenReaderCurrentLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsComponent.prototype, "pageChange", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsComponent.prototype, "pageBoundsCorrection", void 0);

      PaginationControlsComponent.ɵfac = function PaginationControlsComponent_Factory(t) {
        return new (t || PaginationControlsComponent)();
      };

      PaginationControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PaginationControlsComponent,
        selectors: [["pagination-controls"]],
        inputs: {
          maxSize: "maxSize",
          previousLabel: "previousLabel",
          nextLabel: "nextLabel",
          screenReaderPaginationLabel: "screenReaderPaginationLabel",
          screenReaderPageLabel: "screenReaderPageLabel",
          screenReaderCurrentLabel: "screenReaderCurrentLabel",
          directionLinks: "directionLinks",
          autoHide: "autoHide",
          responsive: "responsive",
          id: "id"
        },
        outputs: {
          pageChange: "pageChange",
          pageBoundsCorrection: "pageBoundsCorrection"
        },
        decls: 3,
        vars: 3,
        consts: [[3, "id", "maxSize", "pageChange", "pageBoundsCorrection"], ["p", "paginationApi"], ["class", "ngx-pagination", "role", "navigation", 3, "responsive", 4, "ngIf"], ["role", "navigation", 1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [1, "small-screen"], [3, "current", "ellipsis", 4, "ngFor", "ngForOf"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], [1, "pagination-previous"], ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"], [4, "ngIf"], ["tabindex", "0", 3, "keyup.enter", "click"], [1, "show-for-sr"], [1, "pagination-next"]],
        template: function PaginationControlsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-template", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationControlsComponent_Template_pagination_template_pageChange_0_listener($event) {
              return ctx.pageChange.emit($event);
            })("pageBoundsCorrection", function PaginationControlsComponent_Template_pagination_template_pageBoundsCorrection_0_listener($event) {
              return ctx.pageBoundsCorrection.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_Template, 6, 8, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("maxSize", ctx.maxSize);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.autoHide && _r811.pages.length <= 1));
          }
        },
        directives: function directives() {
          return [PaginationControlsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]];
        },
        pipes: function pipes() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]];
        },
        styles: ["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xAB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xBB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],
        encapsulation: 2,
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pagination-controls',
            template: DEFAULT_TEMPLATE,
            styles: [DEFAULT_STYLES],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, {
          maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          previousLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nextLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          screenReaderPaginationLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          screenReaderPageLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          screenReaderCurrentLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          pageBoundsCorrection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autoHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          responsive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      return PaginationControlsComponent;
    }();

    var __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$2 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    /**
     * This directive is what powers all pagination controls components, including the default one.
     * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
     * with the pagination controls.
     */


    var PaginationControlsDirective =
    /** @class */
    function () {
      function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;

        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change.subscribe(function (id) {
          if (_this.id === id) {
            _this.updatePageLinks();

            _this.changeDetectorRef.markForCheck();

            _this.changeDetectorRef.detectChanges();
          }
        });
      }

      PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
          this.id = this.service.defaultId();
        }

        this.updatePageLinks();
      };

      PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
      };

      PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
      };
      /**
       * Go to the previous page
       */


      PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
      };
      /**
       * Go to the next page
       */


      PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
      };
      /**
       * Returns true if current page is first page
       */


      PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
      };
      /**
       * Returns true if current page is last page
       */


      PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
      };
      /**
       * Set the current page number.
       */


      PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
      };
      /**
       * Get the current page number.
       */


      PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
      };
      /**
       * Returns the last page number
       */


      PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);

        if (inst.totalItems < 1) {
          // when there are 0 or fewer (an error case) items, there are no "pages" as such,
          // but it makes sense to consider a single, empty page as the last page.
          return 1;
        }

        return Math.ceil(inst.totalItems / inst.itemsPerPage);
      };

      PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
      };

      PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
          console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
      };
      /**
       * Updates the page links and checks that the current page is valid. Should run whenever the
       * PaginationService.change stream emits a value matching the current ID, or when any of the
       * input values changes.
       */


      PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;

        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);

        if (correctedCurrentPage !== inst.currentPage) {
          setTimeout(function () {
            _this.pageBoundsCorrection.emit(correctedCurrentPage);

            _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
          });
        } else {
          this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
      };
      /**
       * Checks that the instance.currentPage property is within bounds for the current page range.
       * If not, return a correct value for currentPage, or the current value if OK.
       */


      PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);

        if (totalPages < instance.currentPage && 0 < totalPages) {
          return totalPages;
        } else if (instance.currentPage < 1) {
          return 1;
        }

        return instance.currentPage;
      };
      /**
       * Returns an array of Page objects to use in the pagination controls.
       */


      PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;

        while (i <= totalPages && i <= paginationRange) {
          var label = void 0;
          var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
          var openingEllipsesNeeded = i === 2 && (isMiddle || isEnd);
          var closingEllipsesNeeded = i === paginationRange - 1 && (isMiddle || isStart);

          if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
            label = '...';
          } else {
            label = pageNumber;
          }

          pages.push({
            label: label,
            value: pageNumber
          });
          i++;
        }

        return pages;
      };
      /**
       * Given the position in the sequence of pagination links [i],
       * figure out what page number corresponds to that position.
       */


      PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);

        if (i === paginationRange) {
          return totalPages;
        } else if (i === 1) {
          return i;
        } else if (paginationRange < totalPages) {
          if (totalPages - halfWay < currentPage) {
            return totalPages - paginationRange + i;
          } else if (halfWay < currentPage) {
            return currentPage - halfWay + i;
          } else {
            return i;
          }
        } else {
          return i;
        }
      };

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", String)], PaginationControlsDirective.prototype, "id", void 0);

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", Number)], PaginationControlsDirective.prototype, "maxSize", void 0);

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsDirective.prototype, "pageChange", void 0);

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsDirective.prototype, "pageBoundsCorrection", void 0);

      PaginationControlsDirective = __decorate$3([__metadata$2("design:paramtypes", [PaginationService, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], PaginationControlsDirective);

      PaginationControlsDirective.ɵfac = function PaginationControlsDirective_Factory(t) {
        return new (t || PaginationControlsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      PaginationControlsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: PaginationControlsDirective,
        selectors: [["pagination-template"], ["", "pagination-template", ""]],
        inputs: {
          maxSize: "maxSize",
          id: "id"
        },
        outputs: {
          pageChange: "pageChange",
          pageBoundsCorrection: "pageBoundsCorrection"
        },
        exportAs: ["paginationApi"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'pagination-template,[pagination-template]',
            exportAs: 'paginationApi'
          }]
        }], function () {
          return [{
            type: PaginationService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          pageBoundsCorrection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      return PaginationControlsDirective;
    }();

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var NgxPaginationModule =
    /** @class */
    function () {
      function NgxPaginationModule() {}

      NgxPaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgxPaginationModule
      });
      NgxPaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgxPaginationModule_Factory(t) {
          return new (t || NgxPaginationModule)();
        },
        providers: [PaginationService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxPaginationModule, {
          declarations: function declarations() {
            return [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPaginationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective],
            providers: [PaginationService],
            exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
          }]
        }], function () {
          return [];
        }, null);
      })();

      return NgxPaginationModule;
    }();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-pagination.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/user-dialog/user-dialog.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/user-dialog/user-dialog.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUsersUserDialogUserDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title><span *ngIf=\"!user.id\">Add</span><span *ngIf=\"user.id\">Edit</span> Staff</h1>\r\n<div class=\"user-img\">\r\n        <img *ngIf=\"user.profile.image\" [src]=\"user.profile.image\" class=\"transition-2\" [class.blocked]=\"user.settings.isDeleted\">\r\n        <img *ngIf=\"!user.profile.image\" src=\"assets/img/users/default-user.jpg\" class=\"transition-2\" [class.blocked]=\"user.settings.isDeleted\"><br>\r\n        <input style=\"display: none\" type=\"file\" (change)=\"onFileChanged($event)\"#fileInput>\r\n        <button (click)=\"fileInput.click()\">Select Picture</button> \r\n    </div>\r\n<br>\r\n<div mat-dialog-content>\r\n    <form [formGroup]=\"form\" class=\"user-form\">      \r\n        <mat-tab-group class=\"vertical-tabs\">\r\n            \r\n            <mat-tab label=\"Personal\" formGroupName=\"profile\">\r\n                <div fxLayout=\"column\" class=\"form-field-outer\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"ID Number\" formControlName=\"idNumber\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Name\" formControlName=\"name\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Surname\" formControlName=\"surname\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                            <input matInput placeholder=\"Date Of Birth\" formControlName=\"DoB\">\r\n                     </mat-form-field>\r\n\r\n                     <mat-form-field class=\"w-100\">\r\n                            <input matInput placeholder=\"Home Address\" formControlName=\"address\">\r\n                        </mat-form-field>\r\n                    \r\n                    \r\n                </div>\r\n            </mat-tab>\r\n           \r\n            <mat-tab label=\"Contact Number\" formGroupName=\"contacts\">\r\n                <div fxLayout=\"column\" class=\"form-field-outer\">\r\n\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Phone\" formControlName=\"phone\">\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n            </mat-tab>\r\n           \r\n            <mat-tab label=\"Status\" formGroupName=\"settings\">\r\n                <div fxLayout=\"column\" class=\"form-field-outer\">\r\n                    <!--  Add NGfor here for skills   --> \r\n                    <mat-checkbox formControlName=\"isActive\">Active</mat-checkbox>\r\n                    <mat-checkbox formControlName=\"isDeleted\">Blocked</mat-checkbox>\r\n                    \r\n                </div>\r\n            </mat-tab>\r\n   \r\n    <mat-tab label=\"Skills\" formGroupName=\"skills\">\r\n        <div fxLayout=\"column\" class=\"form-field-outer\">\r\n            <!--  Add NGfor here for skills   --> \r\n            <mat-checkbox formControlName=\"plumbing\">Plumbing</mat-checkbox>\r\n            <mat-checkbox formControlName=\"mechanic\">Mechanic</mat-checkbox>\r\n            <mat-checkbox formControlName=\"electricity\">Electrician</mat-checkbox>\r\n            <mat-checkbox formControlName=\"hardware\">Hardware</mat-checkbox>\r\n        </div>\r\n    </mat-tab>\r\n        </mat-tab-group>\r\n    </form>\r\n</div>\r\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"form.value\" [disabled]=\"!form.valid\"><span *ngIf=\"!user.id\">Save</span><span *ngIf=\"user.id\">Update</span></button>\r\n    <button mat-raised-button color=\"warn\" (click)=\"close()\">Cancel</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Staff Members</h1>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"flex-p\">\r\n    <div fxLayout=\"row\" >\r\n        <mat-button-toggle-group name=\"staff-icons\" #controls=\"matButtonToggleGroup\" appearance=\"legacy\">            \r\n            <mat-button-toggle value=\"add\" (click)=\"openUserDialog(null)\">\r\n                <mat-icon>person_add</mat-icon>\r\n            </mat-button-toggle>\r\n            <mat-button-toggle value=\"search\">\r\n                <mat-icon>search</mat-icon>\r\n            </mat-button-toggle> \r\n            <mat-button-toggle value=\"download\" (click)=\"download()\">\r\n                    <mat-icon class=\"tooltiptext\">save_alt</mat-icon>\r\n                </mat-button-toggle>           \r\n        </mat-button-toggle-group>            \r\n    </div>\r\n    \r\n    \r\n    <form class=\"user-search\" [class.show]=\"controls.value == 'search'\">\r\n        <mat-form-field class=\"user-search-input\">\r\n            <input matInput placeholder=\"Enter search criteria...\" [(ngModel)]=\"searchText\" name=\"search\">\r\n        </mat-form-field>\r\n    </form>\r\n    \r\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <mat-button-toggle-group #viewType=\"matButtonToggleGroup\" appearance=\"legacy\" value=\"grid\">            \r\n            <mat-button-toggle value=\"grid\">\r\n                <mat-icon>view_module</mat-icon>\r\n            </mat-button-toggle>\r\n            <mat-button-toggle value=\"list\">\r\n                <mat-icon>view_list</mat-icon>\r\n            </mat-button-toggle>           \r\n        </mat-button-toggle-group>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"viewType.value == 'grid'\" fxLayout=\"row wrap\">    \r\n    <div *ngFor=\"let user of tempStaff  |paginate: { itemsPerPage: 6, currentPage: page }\" fxFlex=\"100\" fxFlex.gt-md=\"33.3\" fxFlex.md=\"50\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0\">  \r\n            <div class=\"bg-primary\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <h3  class=\"user-name\">{{user.Staff_Name}} {{user.Staff_Surname}}</h3> \r\n                <!--<h3 *ngIf=\"user.Is_Active\" class=\"user-name\">User blocked</h3>-->\r\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\" #menuTrigger=\"matMenuTrigger\">\r\n                    <mat-icon>more_vert</mat-icon>\r\n                </button>\r\n            </div>\r\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\" overlapTrigger=\"true\">\r\n                <span (mouseleave)=\"menuTrigger.closeMenu()\">\r\n                    <button mat-menu-item (click)=\"openUserDialog(user)\">\r\n                        <mat-icon>mode_edit</mat-icon>\r\n                        <span>Edit</span>\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"deleteUser(user);\">\r\n                        <mat-icon>delete</mat-icon>\r\n                        <span>Delete</span>\r\n                    </button>\r\n                </span>\r\n            </mat-menu>\r\n            <div class=\"user-content\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n                <div fxFlex=\"30\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                    <div class=\"user-img\">\r\n                        <img *ngIf=\"user.Staff_Photo\" [src]=\"user.Staff_Photo\" class=\"transition-2\" [class.blocked]=\"user.Is_Active\">\r\n                        <img *ngIf=\"!user.Staff_Photo\" src=\"assets/img/users/default-user.jpg\" class=\"transition-2\" [class.blocked]=\"user.Is_Active\">  \r\n                        <!--<mat-icon *ngIf=\"user.Is_Active\" class=\"warn-color\">block</mat-icon>-->\r\n                    </div>                                            \r\n                    <!--<div class=\"user-social\">\r\n                        <mat-slide-toggle color=\"primary\" [checked]=\"user.Is_Active\" (change)=\"user.Is_Active = !user.Is_Active\"></mat-slide-toggle>\r\n                    </div>-->\r\n                </div>\r\n                <div fxFlex=\"70\" fxLayout=\"column\" class=\"user-details transition-2\" [class.blocked]=\"user.Is_Active\">\r\n\r\n                    <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"muted-text\">call</mat-icon>\r\n                        <span>{{user.Staff_Phone_Number}}</span>\r\n                    </p>\r\n\r\n                    <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        \r\n                       \r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<!--\r\n<div *ngIf=\"viewType.value == 'list'\" fxLayout=\"row wrap\">\r\n    <div *ngFor=\"let user of tempStaff |paginate: { itemsPerPage: 6, currentPage: page }\" fxFlex=\"100\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0\">  \r\n            <div class=\"bg-primary\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <h3 *ngIf=\"!user.Is_Active\" class=\"user-name\">{{user.Staff_Name}} {{user.Staff_Surname}}</h3> \r\n                <h3 *ngIf=\"user.Is_Active\" class=\"user-name\">User blocked</h3>\r\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\" #menuTrigger=\"matMenuTrigger\">\r\n                    <mat-icon>more_vert</mat-icon>\r\n                </button>\r\n            </div>\r\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\"  overlapTrigger=\"true\">\r\n                <span (mouseleave)=\"menuTrigger.closeMenu()\">\r\n                    <button mat-menu-item (click)=\"openUserDialog(user);\">\r\n                        <mat-icon>mode_edit</mat-icon>\r\n                        <span>Edit</span>\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"deleteUser(user);\">\r\n                        <mat-icon>delete</mat-icon>\r\n                        <span>Delete</span>\r\n                    </button>\r\n                </span>\r\n            </mat-menu>\r\n            <div class=\"user-content\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n                <div fxFlex=\"20\" fxFlex.xs=\"30\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                    <div class=\"user-img\">\r\n                        <img *ngIf=\"user.Staff_Photo\" [src]=\"user.Staff_Photo\" class=\"transition-2\" [class.blocked]=\"user.Is_Active\"> \r\n                        <img *ngIf=\"!user.Staff_Photo\" src=\"assets/img/users/default-user.jpg\" class=\"transition-2\" [class.blocked]=\"user.Is_Active\">  \r\n                        <mat-icon *ngIf=\"user.Is_Active\" class=\"warn-color\">block</mat-icon>   \r\n                    </div>                                            \r\n                    <div class=\"user-social\">\r\n                        <mat-slide-toggle color=\"primary\" [checked]=\"user.Is_Active\" (change)=\"user.Is_Active = !user.Is_Active\"></mat-slide-toggle>\r\n                    </div>\r\n                </div>\r\n                <div fxFlex=\"80\" fxFlex.xs=\"70\" fxLayout=\"row\" fxLayout.xs=\"column\" class=\"user-details transition-2\" [class.blocked]=\"user.Is_Active\">\r\n                    <div fxFlex=\"30\" fxFlex.xs=\"100\" fxLayout=\"column\">\r\n                                           \r\n                    </div>\r\n                    <div fxFlex=\"30\" fxFlex.xs=\"100\" fxLayout=\"column\">\r\n       \r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"muted-text\">call</mat-icon>\r\n                            <span>{{user.Staff_Phone_Number}}</span>\r\n                        </p>\r\n                       \r\n                    </div>\r\n                    <div fxFlex=\"40\" fxFlex.xs=\"100\" fxLayout=\"column\">\r\n                        \r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon *ngIf=\"user.Is_Active\" class=\"muted-text\">person_outline</mat-icon>\r\n                            <mat-icon *ngIf=\"!user.Is_Active\" class=\"muted-text\">person</mat-icon>\r\n                            <span>{{ (user.Is_Active) ? 'Blocked' : 'Active' }}</span>\r\n                        </p>                       \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n-->\r\n<div *ngIf=\"tempStaff\" fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0 text-center\">           \r\n            <pagination-controls class=\"gradus-pagination\" autoHide=\"true\" maxSize=\"3\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"!tempStaff\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner\">   \r\n    <mat-spinner color=\"primary\"></mat-spinner>    \r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/pages/users/staff-service.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/users/staff-service.service.ts ***!
    \******************************************************/

  /*! exports provided: StaffServiceService */

  /***/
  function srcAppPagesUsersStaffServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffServiceService", function () {
      return StaffServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var StaffServiceService = /*#__PURE__*/function () {
      function StaffServiceService(http) {
        _classCallCheck(this, StaffServiceService);

        this.http = http;
        this.apiURL = "http://localhost:52620/api/";
      }

      _createClass(StaffServiceService, [{
        key: "getStaff",
        value: function getStaff() {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.apiURL + "Staff/" + localStorage.getItem("currentFarm"), ops);
        }
      }]);

      return StaffServiceService;
    }();

    StaffServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    StaffServiceService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], StaffServiceService);
    /***/
  },

  /***/
  "./src/app/pages/users/user-dialog/user-dialog.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/pages/users/user-dialog/user-dialog.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUsersUserDialogUserDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".user-form .form-field-outer {\n  width: 280px;\n}\n.user-form .mat-radio-button {\n  margin-right: 12px;\n}\n.user-img {\n  position: relative;\n  text-align: center;\n}\n.user-img img {\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n}\n.user-img img.blocked {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvdXNlci1kaWFsb2cvRDpcXDM3MFxcRmluYWxGcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXHVzZXJzXFx1c2VyLWRpYWxvZ1xcdXNlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzZXJzL3VzZXItZGlhbG9nL3VzZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtBQ0FSO0FERUk7RUFDSSxrQkFBQTtBQ0FSO0FER0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURDSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDUjtBREFRO0VBQ0ksWUFBQTtBQ0VaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlcnMvdXNlci1kaWFsb2cvdXNlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1mb3Jte1xyXG4gICAgLmZvcm0tZmllbGQtb3V0ZXJ7XHJcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1yYWRpby1idXR0b257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgfVxyXG59XHJcbi51c2VyLWltZ3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGltZ3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICYuYmxvY2tlZHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi51c2VyLWZvcm0gLmZvcm0tZmllbGQtb3V0ZXIge1xuICB3aWR0aDogMjgwcHg7XG59XG4udXNlci1mb3JtIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4udXNlci1pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi51c2VyLWltZyBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4udXNlci1pbWcgaW1nLmJsb2NrZWQge1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/users/user-dialog/user-dialog.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/users/user-dialog/user-dialog.component.ts ***!
    \******************************************************************/

  /*! exports provided: UserDialogComponent */

  /***/
  function srcAppPagesUsersUserDialogUserDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDialogComponent", function () {
      return UserDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user.model */
    "./src/app/pages/users/user.model.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserDialogComponent = /*#__PURE__*/function () {
      function UserDialogComponent(dialogRef, user, fb, appSettings, router, fireStorage, http) {
        _classCallCheck(this, UserDialogComponent);

        this.dialogRef = dialogRef;
        this.user = user;
        this.fb = fb;
        this.appSettings = appSettings;
        this.router = router;
        this.fireStorage = fireStorage;
        this.http = http;
        this.basePath = '/images'; //  <<<<<<< Image base path

        this.downloadableURL = ''; //  <<<<<<<   URL for firebase image view

        this.passwordHide = true;
        this.settings = this.appSettings.settings;
        this.form = this.fb.group({
          id: null,
          username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])],
          password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])],
          profile: this.fb.group({
            idNumber: null,
            name: null,
            surname: null,
            DoB: null,
            address: null,
            gender: null,
            image: null
          }),
          // work: this.fb.group({
          //   company: null,
          //   position: null,
          //   salary: null
          // }),
          contacts: this.fb.group({
            //email: null,
            phone: null
          }),
          // social: this.fb.group({
          //   facebook: null,
          //   twitter: null,
          //   google: null
          // }),
          // settings: this.fb.group({
          //   isActive: null,
          //   isDeleted: null,
          //   registrationDate: null,
          //   joinedDate: null
          // }),
          skills: this.fb.group({
            plumbing: null,
            electricity: null,
            hardware: null,
            mechanic: null
          })
        });
      }

      _createClass(UserDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.user) {
            this.form.setValue(this.user);
          } else {
            this.user = new _user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
            this.user.profile = new _user_model__WEBPACK_IMPORTED_MODULE_3__["UserProfile"](); //this.user.work = new UserWork();

            this.user.contacts = new _user_model__WEBPACK_IMPORTED_MODULE_3__["UserContacts"](); //this.user.social = new UserSocial();
            //this.user.settings = new UserSettings();

            this.user.skills = new _user_model__WEBPACK_IMPORTED_MODULE_3__["UserSkills"]();
          }
        }
      }, {
        key: "onFileChanged",
        value: function onFileChanged(event) {
          var file = event.target.files[0];
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }, {
        key: "processFile",
        value: function processFile(imageInput) {// Have a look at https://www.freecodecamp.org/news/how-to-make-image-upload-easy-with-angular-1ed14cb2773b/
        }
      }]);

      return UserDialogComponent;
    }();

    UserDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
      }, {
        type: _user_model__WEBPACK_IMPORTED_MODULE_3__["User"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
      }];
    };

    UserDialogComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-user-dialog',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./user-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/user-dialog/user-dialog.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./user-dialog.component.scss */
      "./src/app/pages/users/user-dialog/user-dialog.component.scss"))["default"]]
    }), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _user_model__WEBPACK_IMPORTED_MODULE_3__["User"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])], UserDialogComponent);
    /***/
  },

  /***/
  "./src/app/pages/users/user.model.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/users/user.model.ts ***!
    \*******************************************/

  /*! exports provided: User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings, UserSkills */

  /***/
  function srcAppPagesUsersUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfile", function () {
      return UserProfile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserWork", function () {
      return UserWork;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserContacts", function () {
      return UserContacts;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSocial", function () {
      return UserSocial;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSettings", function () {
      return UserSettings;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSkills", function () {
      return UserSkills;
    });

    var User = function User() {
      _classCallCheck(this, User);
    };

    var UserProfile = function UserProfile() {
      _classCallCheck(this, UserProfile);
    };

    var UserWork = function UserWork() {
      _classCallCheck(this, UserWork);
    };

    var UserContacts = function UserContacts() {
      _classCallCheck(this, UserContacts);
    };

    var UserSocial = function UserSocial() {
      _classCallCheck(this, UserSocial);
    };

    var UserSettings = function UserSettings() {
      _classCallCheck(this, UserSettings);
    };

    var UserSkills = function UserSkills() {
      _classCallCheck(this, UserSkills);
    };
    /***/

  },

  /***/
  "./src/app/pages/users/users.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/users/users.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUsersUsersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".user-name {\n  padding: 0 12px;\n  font-weight: 400;\n}\n\n.user-content {\n  padding: 10px;\n}\n\n.user-content .user-img {\n  position: relative;\n}\n\n.user-content .user-img img {\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n}\n\n.user-content .user-img img.blocked {\n  opacity: 0.5;\n}\n\n.user-content .user-img .mat-icon {\n  position: absolute;\n  top: -8px;\n  left: -8px;\n  font-size: 96px;\n  height: 96px;\n  width: 96px;\n}\n\n.user-content .mat-slide-toggle {\n  margin-top: 15px;\n}\n\n.user-content .user-details span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.user-content .user-details .mat-icon {\n  padding: 2px 10px;\n}\n\n.user-content .user-details.blocked {\n  opacity: 0.5;\n}\n\n.user-search {\n  width: 0;\n  overflow: hidden;\n  transition: 0.3s;\n}\n\n.user-search .user-search-input {\n  width: 100% !important;\n  text-align: center !important;\n  height: 36px;\n}\n\n.user-search .mat-form-field-infix {\n  padding: 5px;\n}\n\n.user-search .mat-input-element {\n  text-align: center;\n}\n\n.user-search.show {\n  width: 100%;\n  overflow: visible;\n}\n\n.user-search .user-search-criteria {\n  width: 30%;\n  text-align: center !important;\n}\n\n.user-spinner {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\nh1 {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvRDpcXDM3MFxcRmluYWxGcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXHVzZXJzXFx1c2Vycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURESTtFQUNJLGtCQUFBO0FDR1I7O0FERlE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSVo7O0FESFk7RUFDSSxZQUFBO0FDS2hCOztBREZRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0laOztBRERJO0VBQ0ksZ0JBQUE7QUNHUjs7QURBUTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VaOztBREFRO0VBQ0ksaUJBQUE7QUNFWjs7QURBUTtFQUNJLFlBQUE7QUNFWjs7QURHQTtFQUNJLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FEQ0k7RUFDSSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ0NSOztBRENJO0VBQ0ksWUFBQTtBQ0NSOztBRENJO0VBQ0ksa0JBQUE7QUNDUjs7QURDSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQ0NSOztBRENJO0VBQ0ksVUFBQTtFQUNBLDZCQUFBO0FDQ1I7O0FESUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFBTyxRQUFBO0VBQVUsU0FBQTtFQUFXLE9BQUE7QUNFaEM7O0FEQUE7RUFDSSxrQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1uYW1le1xyXG4gICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4udXNlci1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC51c2VyLWltZ3tcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICYuYmxvY2tlZHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWljb257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtOHB4OyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDk2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTZweDtcclxuICAgICAgICAgICAgd2lkdGg6IDk2cHg7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hdC1zbGlkZS10b2dnbGV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC51c2VyLWRldGFpbHN7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgICAgICAgfSBcclxuICAgICAgICAmLmJsb2NrZWR7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4udXNlci1zZWFyY2h7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgLnVzZXItc2VhcmNoLWlucHV0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4OyAgICAgICAgXHJcbiAgICB9XHJcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1pbnB1dC1lbGVtZW50e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgICYuc2hvd3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIH1cclxuICAgIC51c2VyLXNlYXJjaC1jcml0ZXJpYXtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi51c2VyLXNwaW5uZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDsgcmlnaHQ6IDA7IGJvdHRvbTogMDsgbGVmdDowO1xyXG59XHJcbmgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuIiwiLnVzZXItbmFtZSB7XG4gIHBhZGRpbmc6IDAgMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnVzZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4udXNlci1jb250ZW50IC51c2VyLWltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW1nIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW1nIGltZy5ibG9ja2VkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLnVzZXItY29udGVudCAudXNlci1pbWcgLm1hdC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC04cHg7XG4gIGxlZnQ6IC04cHg7XG4gIGZvbnQtc2l6ZTogOTZweDtcbiAgaGVpZ2h0OiA5NnB4O1xuICB3aWR0aDogOTZweDtcbn1cbi51c2VyLWNvbnRlbnQgLm1hdC1zbGlkZS10b2dnbGUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnVzZXItY29udGVudCAudXNlci1kZXRhaWxzIHNwYW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItZGV0YWlscyAubWF0LWljb24ge1xuICBwYWRkaW5nOiAycHggMTBweDtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItZGV0YWlscy5ibG9ja2VkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4udXNlci1zZWFyY2gge1xuICB3aWR0aDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi51c2VyLXNlYXJjaCAudXNlci1zZWFyY2gtaW5wdXQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzNnB4O1xufVxuLnVzZXItc2VhcmNoIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi51c2VyLXNlYXJjaCAubWF0LWlucHV0LWVsZW1lbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udXNlci1zZWFyY2guc2hvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi51c2VyLXNlYXJjaCAudXNlci1zZWFyY2gtY3JpdGVyaWEge1xuICB3aWR0aDogMzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLnVzZXItc3Bpbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/users/users.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/users/users.component.ts ***!
    \************************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppPagesUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./users.service */
    "./src/app/pages/users/users.service.ts");
    /* harmony import */


    var _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-dialog/user-dialog.component */
    "./src/app/pages/users/user-dialog/user-dialog.component.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _staff_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./staff-service.service */
    "./src/app/pages/users/staff-service.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UsersComponent = /*#__PURE__*/function () {
      function UsersComponent(appSettings, dialog, usersService, router, http, formBuilder, staffService) {
        _classCallCheck(this, UsersComponent);

        this.appSettings = appSettings;
        this.dialog = dialog;
        this.usersService = usersService;
        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
        this.staffService = staffService;
        this.settings = this.appSettings.settings;
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUsers();
        }
      }, {
        key: "download",
        value: function download() {
          alert("Download successful");
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this2 = this;

          this.staffService.getStaff().subscribe( //get all staff
          function (success) {
            _this2.data1 = success;
            _this2.tempStaff = _this2.data1['staff'];
            _this2.tempSkill = _this2.data1['skills']; //this.data1=response;

            console.log(_this2.tempStaff);
            console.log(_this2.tempSkill);
          }, function (error) {
            console.log(error);
          });
        } // public getUsers(): void {
        //     this.users = null; //for show spinner each time
        //     this.usersService.getUsers().subscribe(users => this.users = users);    
        // }

      }, {
        key: "addUser",
        value: function addUser(user) {
          var _this3 = this;

          this.usersService.addUser(user).subscribe(function (user) {
            return _this3.getUsers();
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          var _this4 = this;

          this.usersService.updateUser(user).subscribe(function (user) {
            return _this4.getUsers();
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(user) {
          var _this5 = this;

          this.usersService.deleteUser(user.id).subscribe(function (user) {
            return _this5.getUsers();
          });
        }
      }, {
        key: "onPageChanged",
        value: function onPageChanged(event) {
          this.page = event;
          this.getUsers();

          if (this.settings.fixedHeader) {
            document.getElementById('main-content').scrollTop = 0;
          } else {
            document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
          }
        }
      }, {
        key: "openUserDialog",
        value: function openUserDialog(user) {
          var _this6 = this;

          var dialogRef = this.dialog.open(_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_4__["UserDialogComponent"], {
            data: user
          });
          dialogRef.afterClosed().subscribe(function (user) {
            if (user) {
              user.id ? _this6.updateUser(user) : _this6.addUser(user);
            }
          });
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
      }, {
        type: _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
      }, {
        type: _staff_service_service__WEBPACK_IMPORTED_MODULE_9__["StaffServiceService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])], UsersComponent.prototype, "paginator", void 0);

    UsersComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-users',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      providers: [_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]],
      styles: [__importDefault(__webpack_require__(
      /*! ./users.component.scss */
      "./src/app/pages/users/users.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _staff_service_service__WEBPACK_IMPORTED_MODULE_9__["StaffServiceService"]])], UsersComponent);
    /***/
  },

  /***/
  "./src/app/pages/users/users.data.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/users/users.data.ts ***!
    \*******************************************/

  /*! exports provided: UsersData */

  /***/
  function srcAppPagesUsersUsersDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersData", function () {
      return UsersData;
    });

    var UsersData = /*#__PURE__*/function () {
      function UsersData() {
        _classCallCheck(this, UsersData);
      }

      _createClass(UsersData, [{
        key: "createDb",
        value: function createDb() {
          var users = [{
            id: 1,
            username: "pretty",
            password: "pretty123",
            profile: {
              idNumber: 8102291526587,
              name: "Ashley",
              surname: "Ahlberg",
              DoB: new Date("1981-2-29"),
              address: "15 Hall Street Hatfield",
              gender: "female",
              image: "assets/img/profile/ashley.jpg"
            },
            work: {
              company: "Google",
              position: "Product designer",
              salary: 5000
            },
            contacts: {
              email: "ashley@gmail.com",
              phone: "(202) 756-9756",
              address: "Washington"
            },
            social: {
              facebook: "",
              twitter: "",
              google: ""
            },
            settings: {
              isActive: true,
              isDeleted: false,
              registrationDate: "2012-10-13T12:20:40.511Z",
              joinedDate: "2017-04-21T18:25:43.511Z"
            },
            skills: {
              plumbing: false,
              mechanic: true,
              electrician: true,
              hardware: false
            }
          }, {
            id: 2,
            username: "bruno.V",
            password: "bruno123",
            profile: {
              idNumber: 9211201257089,
              name: "Bruno",
              surname: "Vespa",
              DoB: new Date(1992, 11, 20),
              gender: "male",
              image: "assets/img/profile/bruno.jpg"
            },
            work: {
              company: "Dell EMC",
              position: "Sale manager",
              salary: 17000
            },
            contacts: {
              email: "bruno@dell.com",
              phone: "(415) 231-0332",
              address: "San Francisco"
            },
            social: {
              facebook: "",
              twitter: "",
              google: ""
            },
            settings: {
              isActive: false,
              isDeleted: false,
              registrationDate: "2011-01-05T08:45:23.511Z",
              joinedDate: "2017-05-20T18:25:43.511Z"
            }
          }, {
            id: 3,
            username: "andy.79",
            password: "andy123",
            profile: {
              name: "Andy",
              surname: "Warhol",
              birthday: new Date(1979, 10, 21),
              gender: "male",
              image: "assets/img/avatars/avatar-3.png"
            },
            work: {
              company: "Adecco",
              position: "Product manager",
              salary: 13000
            },
            contacts: {
              email: "andy@adecco.com",
              phone: "(212) 457-2308",
              address: "New York"
            },
            social: {
              facebook: "",
              twitter: "",
              google: ""
            },
            settings: {
              isActive: true,
              isDeleted: false,
              registrationDate: "2014-11-01T19:35:43.511Z",
              joinedDate: "2017-06-28T15:25:43.511Z"
            }
          }, {
            id: 4,
            username: "julia.a",
            password: "julia123",
            profile: {
              name: "Julia",
              surname: "Aniston",
              birthday: new Date(1982, 6, 18),
              gender: "female",
              image: "assets/img/profile/julia.jpg"
            },
            work: {
              company: "Apple",
              position: "Sales manager",
              salary: 18000
            },
            contacts: {
              email: "julia@apple.com",
              phone: "(224) 267-1346",
              address: "Illinois, Chicago"
            },
            social: {
              facebook: "",
              twitter: "",
              google: ""
            },
            settings: {
              isActive: true,
              isDeleted: false,
              registrationDate: "2015-12-06T11:10:20.511Z",
              joinedDate: "2017-06-29T15:15:40.511Z"
            }
          }, {
            id: 5,
            username: "lusia.m",
            password: "lusia123",
            profile: {
              name: "Lusia",
              surname: "Manuel",
              birthday: new Date(1992, 12, 2),
              gender: "female",
              image: "assets/img/avatars/avatar-7.png"
            },
            work: {
              company: "Alphabet",
              position: "Office manager",
              salary: 10000
            },
            contacts: {
              email: "lusia@alphabet.com",
              phone: "(224) 267-1346",
              address: "California, Los Angeles"
            },
            social: {
              facebook: "",
              twitter: "",
              google: ""
            },
            settings: {
              isActive: true,
              isDeleted: true,
              registrationDate: "2014-01-10T10:20:20.511Z",
              joinedDate: "2017-06-28T12:20:40.511Z"
            }
          }, {
            id: 6,
            username: "adam.82",
            password: "adam123",
            profile: {
              name: "Adam",
              surname: "Sandler",
              birthday: new Date(1987, 12, 24),
              gender: "male",
              image: "assets/img/profile/adam.jpg"
            },
            work: {
              company: "General Electric",
              position: "Product manager",
              salary: 21000
            },
            contacts: {
              email: "adam@gen-el.com",
              phone: "(224) 267-1346",
              address: "Texas, Houston"
            },
            social: {
              facebook: "",
              twitter: "",
              google: ""
            },
            settings: {
              isActive: false,
              isDeleted: false,
              registrationDate: "2016-11-16T12:20:20.511Z",
              joinedDate: "2017-06-27T14:20:40.511Z"
            }
          }, {
            id: 7,
            username: "tereza.s",
            password: "tereza123",
            profile: {
              name: "Tereza",
              surname: "Stiles",
              birthday: new Date(1979, 7, 9),
              gender: "female",
              image: "assets/img/profile/tereza.jpg"
            },
            work: {
              company: "Southwest Airlines",
              position: "Sale manager",
              salary: 31000
            },
            contacts: {
              email: "tereza@airlines.com",
              phone: "(214) 617-2614",
              address: "Texas, Dallas"
            },
            social: {
              facebook: "",
              twitter: "",
              google: ""
            },
            settings: {
              isActive: true,
              isDeleted: false,
              registrationDate: "2010-10-12T16:20:20.511Z",
              joinedDate: "2017-06-29T15:20:40.511Z"
            }
          }, {
            id: 8,
            username: "michael.b",
            password: "michael123",
            profile: {
              name: "Michael",
              surname: "Blair",
              birthday: new Date(1978, 11, 15),
              gender: "male",
              image: "assets/img/profile/michael.jpg"
            },
            work: {
              company: "Microsoft",
              position: "Software developer",
              salary: 50000
            },
            contacts: {
              email: "michael@microsoft.com",
              phone: "(267) 388-1637",
              address: "Pennsylvania, Philadelphia"
            },
            social: {
              facebook: "",
              twitter: "",
              google: ""
            },
            settings: {
              isActive: true,
              isDeleted: false,
              registrationDate: "2009-08-12T16:20:20.511Z",
              joinedDate: "2017-06-30T11:30:40.511Z"
            }
          }, {
            id: 9,
            username: "michelle.81",
            password: "michelle123",
            profile: {
              name: "Michelle",
              surname: "Ormond",
              birthday: new Date(1981, 11, 18),
              gender: "female",
              image: "assets/img/avatars/avatar-5.png"
            },
            work: {
              company: "Starbucks",
              position: "Sale manager",
              salary: 15000
            },
            contacts: {
              email: "michelle@starbucks.com",
              phone: "(267) 388-1637",
              address: "Washington, Seattle"
            },
            social: {
              facebook: "",
              twitter: "",
              google: ""
            },
            settings: {
              isActive: false,
              isDeleted: true,
              registrationDate: "2012-11-10T18:20:20.511Z",
              joinedDate: "2015-03-29T17:20:40.511Z"
            }
          }];
          return {
            users: users
          };
        }
      }]);

      return UsersData;
    }();
    /***/

  },

  /***/
  "./src/app/pages/users/users.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/users/users.module.ts ***!
    \*********************************************/

  /*! exports provided: routes, UsersModule */

  /***/
  function srcAppPagesUsersUsersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersModule", function () {
      return UsersModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-in-memory-web-api */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../theme/pipes/pipes.module */
    "./src/app/theme/pipes/pipes.module.ts");
    /* harmony import */


    var _users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./users.component */
    "./src/app/pages/users/users.component.ts");
    /* harmony import */


    var _users_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./users.data */
    "./src/app/pages/users/users.data.ts");
    /* harmony import */


    var _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./user-dialog/user-dialog.component */
    "./src/app/pages/users/user-dialog/user-dialog.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var routes = [{
      path: '',
      component: _users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"],
      pathMatch: 'full'
    }];

    var UsersModule = function UsersModule() {
      _classCallCheck(this, UsersModule);
    };

    UsersModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["InMemoryWebApiModule"].forRoot(_users_data__WEBPACK_IMPORTED_MODULE_10__["UsersData"], {
        delay: 500
      }), ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
      declarations: [_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"], _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_11__["UserDialogComponent"]],
      entryComponents: [_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_11__["UserDialogComponent"]]
    })], UsersModule);
    /***/
  },

  /***/
  "./src/app/pages/users/users.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/users/users.service.ts ***!
    \**********************************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppPagesUsersUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var UsersService = /*#__PURE__*/function () {
      function UsersService(http) {
        _classCallCheck(this, UsersService);

        this.http = http;
        this.url = "api/users";
        this.apiURL = "http://localhost:52620/api/";
      }

      _createClass(UsersService, [{
        key: "getStaff",
        value: function getStaff() {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.apiURL + "Staff/" + localStorage.getItem("currentFarm"), ops);
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          return this.http.get(this.url);
        }
      }, {
        key: "addUser",
        value: function addUser(user) {
          return this.http.post(this.url, user);
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          return this.http.put(this.url, user);
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          return this.http["delete"](this.url + "/" + id);
        }
      }]);

      return UsersService;
    }();

    UsersService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    UsersService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], UsersService);
    /***/
  }
}]);
//# sourceMappingURL=pages-users-users-module-es5.js.map