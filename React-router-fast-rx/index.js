Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactRedux = require('react-redux');
var toolkit = require('@reduxjs/toolkit');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var elementsRouting = [];
var elementCurrentIndex = 0;
function loadElementsRouting(props) {
  if (props.children !== undefined) {
    getElementRouting(props.children);
  } else {
    console.error('Routes or RoutesGroup is no define');
  }
}

function getElementRouting(propsChildren) {
  if (propsChildren.length !== undefined) {
    propsChildren.forEach(function (routes) {
      var routesName = getTypeNameRouting(routes);
      var elements = getRoutesPropsElements(routes);
      elementsRouting.push({
        type: routesName,
        routingElement: elements
      });
    });
  } else {
    var routesName = getTypeNameRouting(propsChildren);
    var elements = getRoutesPropsElements(propsChildren);
    console.log(elements);
    elementsRouting.push({
      type: routesName,
      routingElement: elements
    });
  }
}

function getRoutesPropsElements(propsChildren) {
  var routingElement = {};

  if (propsChildren.props.children !== undefined && propsChildren.props.children.length !== undefined) {
    propsChildren.props.children.forEach(function (routesChildren) {
      var childrenProps = getPropsElement(routesChildren);
      routingElement[childrenProps.path] = childrenProps.Element;
    });
  } else {
    var childrenProps = getPropsElement(propsChildren);
    routingElement[childrenProps.path] = childrenProps.Element;
  }

  return routingElement;
}

function getTypeNameRouting(propsChildren) {
  return propsChildren.type.name;
}

function getPropsElement(propsChildren) {
  return propsChildren.props;
}

function getIndexByPath(path) {
  elementsRouting.some(function (element, index) {
    if (element.routingElement[path] !== undefined) {
      elementCurrentIndex = index;
      return true;
    }

    return false;
  });
  return elementCurrentIndex;
}
function getElementByPath(path) {
  var currentElment = elementsRouting[elementCurrentIndex].routingElement[path];
  if (currentElment !== undefined) return currentElment;
  hasError(path);
  return null;
}

function hasError(path) {
  if (path === '/') console.error('Initial Route no define in routes please define <Routes path={ / } />');
}

function Routes(_ref) {
  _ref.path;
      _ref.Element;
  var currentPath = reactRedux.useSelector(function (state) {
    return state.currentRouting.path;
  });
  var RenderElement = getElementByPath(currentPath);
  return /*#__PURE__*/React__default["default"].createElement("div", null, RenderElement);
}

function GroupRoutes(_ref) {
  var NavMenu = _ref.NavMenu,
      Footer = _ref.Footer;
  return /*#__PURE__*/React__default["default"].createElement("div", null, NavMenu, /*#__PURE__*/React__default["default"].createElement(Routes, null), Footer);
}

var currentRouting = toolkit.createSlice({
  name: 'currentRouting',
  initialState: {
    indexProps: 0,
    path: '/'
  },
  reducers: {
    changePath: function changePath(state, actions) {
      if (state.path !== actions.payload) {
        state.path = actions.payload;
        state.indexProps = getIndexByPath(actions.payload);
      }
    }
  }
});
var currentRouting$1 = currentRouting.reducer;
var changePath = currentRouting.actions.changePath;

function Link(_ref) {
  var path = _ref.path;
  var dispatch = reactRedux.useDispatch();
  return /*#__PURE__*/React__default["default"].createElement("div", {
    onClick: function onClick() {
      window.history.pushState(null, "", path);
      dispatch(changePath(path));
    }
  }, "dasdasdas");
}

function Route(props) {
  var firstRender = React.useRef(true);
  var dispatch = reactRedux.useDispatch();
  var indexProps = reactRedux.useSelector(function (state) {
    return state.currentRouting.indexProps;
  });
  loadElementsRouting(props);

  if (firstRender.current) {
    dispatch(changePath(window.location.pathname));
    firstRender.current = false;
    window.addEventListener('popstate', function () {
      dispatch(changePath(window.location.pathname));
    });
  }

  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(RenderRoute, {
    props: props,
    index: indexProps
  }));
}

function RenderRoute(_ref) {
  var props = _ref.props,
      index = _ref.index;

  if (props.children === undefined) {
    return null;
  }

  if (props.children.length !== undefined) {
    return props.children[index];
  } else {
    return props.children;
  }
}

var routerStore = toolkit.configureStore({
  reducer: {
    currentRouting: currentRouting$1
  }
});

function RouterBroser(_ref) {
  var AppComponent = _ref.AppComponent;
  return /*#__PURE__*/React__default["default"].createElement(reactRedux.Provider, {
    store: routerStore
  }, /*#__PURE__*/React__default["default"].createElement(AppComponent, null));
}

function Test() {
  return /*#__PURE__*/React__default["default"].createElement("div", null, "hola");
}

exports.GroupRoutes = GroupRoutes;
exports.Link = Link;
exports.Route = Route;
exports.RouterBroser = RouterBroser;
exports.Routes = Routes;
exports["default"] = Test;
//# sourceMappingURL=index.js.map
