const contentNode = document.getElementById('contents');
class IssueFilter extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the issue list.</div>
    );
  }
}


class IssueAdd extends React.Component {
    render() {
      return (
        <div>This is a placeholder for an Issue Add entry form.</div>
      )
    }
  }

  const issues = [
    {
      id: 1, status: 'Open', owner: 'Ravan',
      created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
      title: 'Error in console when clicking Add',
    },
    {
      id: 2, status: 'Assigned', owner: 'Eddie',
      created: new Date('2016-08-16'), effort: 14, 
      completionDate: new Date('2016-08-30'),
      title: 'Missing bottom border on panel',
    },
  ];
  
  class IssueList extends React.Component {
    constructor(){
      super();
      this.state = { issues: [] };
      setTimeout(this.createTestIssue.bind(this), 2000);
    }
    
    componentDidMount(){
      this.loadData();
    }
    loadData(){
      setTimeout(() => {
        this.setState({ issues: issues })
      }, 5000);
    }
// 2000 milliseconds after the constructor is called, this.createIssue
// will be called. Note that we had to include a b  ind(this) on the function instead of
// passing it as is. This is because we want the context, or the this variable when the
// function is called, to be this component’s instance. If we don’t do this, the this variable
// will be set to the event that called the function. When the timer fires, createTestIssue is
// called, which uses a test issue object and calls createIssue using that object
    createIssue(newIssue){
      //made a copy of the issues array in the state by calling slice() on it.
      const newIssues = this.state.issues.slice();
      newIssue.id = this.state.issues.length + 1;
      //pushed the new issue to be created into the array
      newIssues.push(newIssue);
      //called this.setState with the new array, thus modifying the state of the component
      this.setState({ issues: newIssues });
    }
    createTestIssue(){
      this.createIssue({
        status: 'New', owner: 'Pieta', created: new Date(),
        title: 'Completion date should be optional',
      });
    }
    render() {
      return (
        <div>
          <h1>Issue Tracker</h1>
          <IssueFilter />
          <hr />
          {/* this now used as souurce data */}
          <IssueTable issues={this.state.issues} /> 
          <hr />
          <IssueAdd />
        </div>
      );
    }
  }

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
  class IssueRow extends React.Component {
    render() {
      const issue = this.props.issue;
      return (
        <tr>
          <td>{issue.id}</td>
          <td>{issue.status}</td>
          <td>{issue.owner}</td>
          <td>{issue.created.toDateString()}</td>
          <td>{issue.effort}</td>
          <td>{issue.completionDate ? issue.completionDate.toDateString() : ''}</td>
          <td>{issue.title}</td>
        </tr>
      )
    }
  }
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
  class IssueTable extends React.Component {
    render() {
      const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />)
        return (
        <table className="bordered-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Status</th>
              <th>Owner</th>
              <th>Created</th>
              <th>Effort</th>
              <th>Completion Date</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>{issueRows}</tbody>
        </table>
      )
    }
  }

ReactDOM.render(<IssueList />, contentNode)