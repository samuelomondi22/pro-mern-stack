'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('contents');

var IssueFilter = function (_React$Component) {
  _inherits(IssueFilter, _React$Component);

  function IssueFilter() {
    _classCallCheck(this, IssueFilter);

    return _possibleConstructorReturn(this, (IssueFilter.__proto__ || Object.getPrototypeOf(IssueFilter)).apply(this, arguments));
  }

  _createClass(IssueFilter, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'This is a placeholder for the issue list.'
      );
    }
  }]);

  return IssueFilter;
}(React.Component);

var IssueAdd = function (_React$Component2) {
  _inherits(IssueAdd, _React$Component2);

  function IssueAdd() {
    _classCallCheck(this, IssueAdd);

    return _possibleConstructorReturn(this, (IssueAdd.__proto__ || Object.getPrototypeOf(IssueAdd)).apply(this, arguments));
  }

  _createClass(IssueAdd, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'This is a placeholder for an Issue Add entry form.'
      );
    }
  }]);

  return IssueAdd;
}(React.Component);

var issues = [{
  id: 1, status: 'Open', owner: 'Ravan',
  created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
  title: 'Error in console when clicking Add'
}, {
  id: 2, status: 'Assigned', owner: 'Eddie',
  created: new Date('2016-08-16'), effort: 14,
  completionDate: new Date('2016-08-30'),
  title: 'Missing bottom border on panel'
}];

var IssueList = function (_React$Component3) {
  _inherits(IssueList, _React$Component3);

  function IssueList() {
    _classCallCheck(this, IssueList);

    var _this3 = _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).call(this));

    _this3.state = { issues: [] };
    setTimeout(_this3.createTestIssue.bind(_this3), 2000);
    return _this3;
  }

  _createClass(IssueList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this4 = this;

      setTimeout(function () {
        _this4.setState({ issues: issues });
      }, 5000);
    }
    // 2000 milliseconds after the constructor is called, this.createIssue
    // will be called. Note that we had to include a b  ind(this) on the function instead of
    // passing it as is. This is because we want the context, or the this variable when the
    // function is called, to be this component’s instance. If we don’t do this, the this variable
    // will be set to the event that called the function. When the timer fires, createTestIssue is
    // called, which uses a test issue object and calls createIssue using that object

  }, {
    key: 'createIssue',
    value: function createIssue(newIssue) {
      //made a copy of the issues array in the state by calling slice() on it.
      var newIssues = this.state.issues.slice();
      newIssue.id = this.state.issues.length + 1;
      //pushed the new issue to be created into the array
      newIssues.push(newIssue);
      //called this.setState with the new array, thus modifying the state of the component
      this.setState({ issues: newIssues });
    }
  }, {
    key: 'createTestIssue',
    value: function createTestIssue() {
      this.createIssue({
        status: 'New', owner: 'Pieta', created: new Date(),
        title: 'Completion date should be optional'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Issue Tracker'
        ),
        React.createElement(IssueFilter, null),
        React.createElement('hr', null),
        React.createElement(IssueTable, { issues: this.state.issues }),
        React.createElement('hr', null),
        React.createElement(IssueAdd, null)
      );
    }
  }]);

  return IssueList;
}(React.Component);

// class IssueRow extends React.Component {
//   render() {
//     const borderedStyle = {border: "1px solid silver", padding: 4};
//     return (
//       <tr>
//         <td style={borderedStyle}>{this.props.issue_id}</td>
//         <td style={borderedStyle}>{this.props.issue_title}</td>
//       </tr>
//     )
//   }
// }


var IssueRow = function (_React$Component4) {
  _inherits(IssueRow, _React$Component4);

  function IssueRow() {
    _classCallCheck(this, IssueRow);

    return _possibleConstructorReturn(this, (IssueRow.__proto__ || Object.getPrototypeOf(IssueRow)).apply(this, arguments));
  }

  _createClass(IssueRow, [{
    key: 'render',
    value: function render() {
      var issue = this.props.issue;
      return React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          null,
          issue.id
        ),
        React.createElement(
          'td',
          null,
          issue.status
        ),
        React.createElement(
          'td',
          null,
          issue.owner
        ),
        React.createElement(
          'td',
          null,
          issue.created.toDateString()
        ),
        React.createElement(
          'td',
          null,
          issue.effort
        ),
        React.createElement(
          'td',
          null,
          issue.completionDate ? issue.completionDate.toDateString() : ''
        ),
        React.createElement(
          'td',
          null,
          issue.title
        )
      );
    }
  }]);

  return IssueRow;
}(React.Component);
// class IssueTable extends React.Component {
//   render() {
//     const borderedStyle = {border: "1px solid silver", padding: 6};
//     return (
//       <table style={{borderCollapse: "collapse"}}>
//         <thead>
//           <tr>
//             <th style={borderedStyle}>Id</th>
//             <th style={borderedStyle}>Title</th>
//           </tr>
//         </thead>
//         <tbody>
//           <IssueRow issue_id={1}
//            issue_title="Error in console when clicking Add" />
//           <IssueRow issue_id={2}
//            issue_title="Missing bottom border on panel" />
//         </tbody>
//       </table>
//     )
//     }
//   }


var IssueTable = function (_React$Component5) {
  _inherits(IssueTable, _React$Component5);

  function IssueTable() {
    _classCallCheck(this, IssueTable);

    return _possibleConstructorReturn(this, (IssueTable.__proto__ || Object.getPrototypeOf(IssueTable)).apply(this, arguments));
  }

  _createClass(IssueTable, [{
    key: 'render',
    value: function render() {
      var issueRows = this.props.issues.map(function (issue) {
        return React.createElement(IssueRow, { key: issue.id, issue: issue });
      });
      return React.createElement(
        'table',
        { className: 'bordered-table' },
        React.createElement(
          'thead',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'th',
              null,
              'Id'
            ),
            React.createElement(
              'th',
              null,
              'Status'
            ),
            React.createElement(
              'th',
              null,
              'Owner'
            ),
            React.createElement(
              'th',
              null,
              'Created'
            ),
            React.createElement(
              'th',
              null,
              'Effort'
            ),
            React.createElement(
              'th',
              null,
              'Completion Date'
            ),
            React.createElement(
              'th',
              null,
              'Title'
            )
          )
        ),
        React.createElement(
          'tbody',
          null,
          issueRows
        )
      );
    }
  }]);

  return IssueTable;
}(React.Component);

ReactDOM.render(React.createElement(IssueList, null), contentNode);