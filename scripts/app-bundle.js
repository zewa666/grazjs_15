define('app',['exports', 'reveal.js', 'aurelia-i18n', 'aurelia-event-aggregator'], function (exports, _reveal, _aureliaI18n, _aureliaEventAggregator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  var _reveal2 = _interopRequireDefault(_reveal);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _class, _temp;

  var App = exports.App = (_temp = _class = function () {
    function App(i18n, ea) {
      var _this = this;

      _classCallCheck(this, App);

      this.i18n = i18n;
      this.ea = ea;

      this.selectedLanguage = this.i18n.getLocale();
      this.ea.subscribe('i18n:locale:changed', function (payload) {
        _this.selectedLanguage = payload.newValue;
      });
    }

    App.prototype.attached = function attached() {
      _reveal2.default.initialize({
        center: false
      });
    };

    App.prototype.switchLanguage = function switchLanguage(lang) {
      this.i18n.setLocale(lang);
    };

    return App;
  }(), _class.inject = [_aureliaI18n.I18N, _aureliaEventAggregator.EventAggregator], _temp);
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', 'i18next-xhr-backend', './environment'], function (exports, _i18nextXhrBackend, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _i18nextXhrBackend2 = _interopRequireDefault(_i18nextXhrBackend);

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().globalResources('./slide').feature('resources').feature('slides');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.use.plugin('aurelia-i18n', function (instance) {
      instance.i18next.use(_i18nextXhrBackend2.default);

      return instance.setup({
        backend: {
          loadPath: './locales/{{lng}}/{{ns}}.json' },
        lng: 'en',
        attributes: ['t', 'i18n'],
        fallbackLng: 'de',
        debug: false
      });
    });

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('slide',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Slide = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

  var Slide = exports.Slide = (_dec = (0, _aureliaFramework.containerless)(), _dec2 = (0, _aureliaFramework.bindable)(), _dec(_class = (_class2 = function Slide() {
    _classCallCheck(this, Slide);

    _initDefineProp(this, 'name', _descriptor, this);
  }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'name', [_dec2], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class);
});
define('resources/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources(['./attributes/fragment']);
  }
});
define('slides/contents-slide',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ContentsSlide = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var ContentsSlide = exports.ContentsSlide = (_dec = (0, _aureliaFramework.inlineView)('\n  <template>\n    <slide name="contents-slide">\n      <h3>What will be covered?</h3>\n      <ul>\n        <li repeat.for="topic of topics" fragment>${topic}</li>\n      </ul>\n    </slide>\n  </template>\n'), _dec2 = (0, _aureliaFramework.containerless)(), _dec(_class = _dec2(_class = function ContentsSlide() {
    _classCallCheck(this, ContentsSlide);

    this.topics = ['I18N ?!?', 'International Apps with Aurelia-I18N', 'Only a few slides', 'Some code', 'Conclusion'];
  }) || _class) || _class);
});
define('slides/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources(['./contents-slide', './i18n-slide.html', './aurelia-slide.html', './conclusion-slide.html', './setup-slide.html']);
  }
});
define('resources/attributes/fragment',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _class, _temp;

  var FragmentCustomAttribute = exports.FragmentCustomAttribute = (_temp = _class = function () {
    function FragmentCustomAttribute(host) {
      _classCallCheck(this, FragmentCustomAttribute);

      this.host = host;
    }

    FragmentCustomAttribute.prototype.attached = function attached() {
      this.host.classList.add('fragment');
    };

    return FragmentCustomAttribute;
  }(), _class.inject = [Element], _temp);
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"reveal.js/css/reveal.css\"></require><require from=\"reveal.js/css/theme/blood.css\"></require><require from=\"./app.css\"></require><div class=\"presentation-header\"><ul class=\"languages\"><li class=\"${ selectedLanguage === 'en' ? 'selected' : ''}\"><a href=\"#\" click.delegate=\"switchLanguage('en')\">English</a></li><li class=\"${ selectedLanguage === 'de' ? 'selected' : ''}\"><a href=\"#\" click.delegate=\"switchLanguage('de')\">Deutsch</a></li></ul></div><div class=\"reveal\"><div class=\"slides\"><slide><slide name=\"intro-slide\"><h3 t=\"slide_intro.title\"></h3><span t=\"slide_intro.caption\">Mastering I18N with the Aurelia I18N plugin</span> <img style=\"height:300px\" src=\"./images/brace_yourself_i18n.jpg\"><div class=\"author\"><h3>Vildan Softic</h3><span>zewa666@gmail.com | github.com/zewa666 | pragmatic-coder.net</span></div></slide><slide><h4>About me</h4><ul><li fragment>Core Team Member Aurelia</li><li fragment>I18N, Animations</li><li fragment>Ranorex GmbH</li><li fragment>Conference Presentations</li><li fragment>Frontend Architecture Consulting</li><li fragment>Blog posts on SitePoint</li><li fragment>AngularJS 1.x Book<br><img style=\"height:150px\" src=\"./images/angular-book.png\"></li></ul></slide></slide><contents-slide></contents-slide><i18n-slide containerless></i18n-slide><aurelia-slide containerless></aurelia-slide><setup-slide containerless></setup-slide><conclusion-slide containerless></conclusion-slide></div></div></template>"; });
define('text!slide.html', ['module'], function(module) { module.exports = "<template><section class=\"${name}\"><slot></slot></section></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = ".intro-slide .author {\n  margin-top: 50px;\n  font-size: 18px; }\n\n.contents-slide ul li {\n  margin-bottom: 20px; }\n\n.aurelia-slide .plugin-links {\n  text-align: left;\n  margin: 0 0 40px 100px; }\n\n.presentation-header {\n  padding-top: 15px;\n  text-align: center; }\n\n.languages {\n  list-style: none;\n  margin: 0 auto 10px auto;\n  display: inline-block;\n  width: 200px; }\n  .languages li {\n    float: left;\n    margin-right: 10px; }\n    .languages li.selected {\n      text-decoration: underline; }\n      .languages li.selected * {\n        color: blue !important; }\n    .languages li a, .languages li a:hover, .languages li a:active, .languages li a:visited {\n      text-decoration: none;\n      color: white;\n      font-weight: bold; }\n"; });
define('text!slides/aurelia-slide.html', ['module'], function(module) { module.exports = "<template><script>window.mydate=new Date</script><slide name=\"aurelia-slide\"><slide><img src=\"./images/aurelia_logo.png\" t=\"[title]slide_intro.imgtitle\"><br><h3>I18N Plugin</h3><div class=\"plugin-links\"><a href=\"http://github.com/aurelia/i18n\">Github: aurelia/i18n</a><br><a href=\"http://aurelia.io/hub.html#/doc/article/aurelia/i18n/latest/i18n-with-aurelia\">Official docs: http://bit.ly/2oCzeCO</a></div><small fragment>\"Don't forget to translate img-titles as well\"</small></slide><script>const items=[\"\",\"\",\"CustomAttribute (t | t-params)\",\"TValueConverter\",\"TBindingBehavior\"]</script><slide><h3>Aurelia I18N Plugin</h3><ul><li fragment>Wrapper for i18next</li><li fragment>Full Aurelia integration</li><li fragment>CustomAttribute<br><code>t | t-params</code></li><li fragment>TValueConverter<br><code>\\${ 'mykey' | t}</code></li><li fragment>TBindingBehavior<br><code>\\${ 'mykey' & t}</code></li></ul></slide><slide><h3>i18next features</h3><ul><li fragment>Flexible connection to backend (loading translations via xhr, bundle ...)</li><li fragment>Optional caching, user language detection, …</li><li fragment>Proper pluralizations</li><li fragment>Translation context</li><li fragment>Nesting, Variable replacement</li></ul></slide><slide><h3>Extends i18next features</h3><ul><li fragment>I18N Attributes on steroids</li><li fragment>Custom loader (ties into bundle)</li><li fragment>TypeScript support</li><li fragment>Translate without refreshing</li></ul></slide><slide><h3>Intl.js features</h3><ul><li fragment>Formatting numbers<br>${ 1234567.890 & nf }</li><li fragment>Formatting dates<br>${ '2017-04-11' & df}</li><li fragment>Relative time<br>${ '2017-04-11 16:00:00' | rt }</li><li fragment>Intl.js Polyfill</li></ul></slide></slide></template>"; });
define('text!slides/conclusion-slide.html', ['module'], function(module) { module.exports = "<template><slide><slide>Conclusion ...</slide><slide><h3>Aurelia I18N Plugin</h3><img src=\"./images/right-choice.jpg\"></slide><slide><img src=\"./images/attention.jpg\"></slide></slide></template>"; });
define('text!slides/i18n-slide.html', ['module'], function(module) { module.exports = "<template><slide><slide><h3>I18N?</h3><blockquote>In computing, internationalization and localization are means of adapting computer software to different languages, regional differences and technical requirements of a target market (locale)</blockquote></slide><slide><img src=\"./images/0gz6xe.jpg\"></slide><slide><h3>I18N = Internationalization</h3><ul><li fragment>I 1..18 N</li><li fragment>Various writing systems (Latin, Cyrillic, ...)</li><li fragment>Endless number formats ( is the decimal separator a , or . ?)</li><li fragment>Pluralization</li><li fragment>Is that a month or a day?<br><img src=\"./images/z2v09q.jpg\" style=\"width:200px\"></li></ul></slide><slide><h3>Wait there's more</h3><ul><li fragment>Apropriate cultural images?<br><img style=\"width:200px\" t=\"i18n_slide.cultural_image\"></li><li fragment>Complex expressions<br><span t=\"i18n_slide.complex_demo\" t-params.bind=\"{ place: 'GrazJS', range: { from: 1, to: 40 } }\"></span></li></ul></slide></slide></template>"; });
define('text!slides/setup-slide.html', ['module'], function(module) { module.exports = "<template><slide><slide><h3>Setup the plugin</h3><p>Aurelia supports different build systems, we'll focus on the CLI scenario. First install the dependencies</p><pre>\n        <code data-trim data-noescape>\n          npm install aurelia-i18n\n          npm install i18next i18next-xhr-backend\n        </code>\n      </pre></slide><slide><p>Next we need to declare the dependencies in the build tooling inside `aurelia_project/aurelia.json`</p><pre>\n        <code data-trim data-noescape>\n          {\n            \"name\": \"i18next\",\n            \"path\": \"../node_modules/i18next/dist/umd\",\n            \"main\": \"i18next\"\n          },{\n            \"name\": \"aurelia-i18n\",\n            \"path\": \"../node_modules/aurelia-i18n/dist/amd\",\n            \"main\": \"aurelia-i18n\"\n          },{\n            \"name\": \"i18next-xhr-backend\",\n            \"path\": \"../node_modules/i18next-xhr-backend/dist/umd\",\n            \"main\": \"i18nextXHRBackend\"\n          }\n        </code>\n      </pre></slide><slide><p>After that we create our translations files and configure the plugin inside the file `main.js`</p><pre>\n        <code>\n          Time for a deep-dive\n        </code>\n      </pre></slide></slide></template>"; });
//# sourceMappingURL=app-bundle.js.map