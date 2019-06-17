/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { HotTable } from '@handsontable/react';
import './style.css';
import { connect } from 'react-redux';
import Handsontable from 'handsontable';
import headersColumns, { rowHeaders } from '../settings/tableSettings';
import { afterChange,fetchMonth } from '../actions/afterChange';
import { readOnly } from '../actions/readOnly';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: 0,
      monthsNames: [],
      monthsValues: [],
    };
    this.handsontableData = Handsontable.helper.createSpreadsheetData(
      6,
      headersColumns.length
    );
    this.rigthButton = React.createRef();
  }

  componentDidMount() {
    this.setState({ monthsNames: Object.keys(this.props.data.data) });
    this.setState({ monthsValues: Object.values(this.props.data.data) });
  }

  decrementMonth = () => {
    if (this.state.month <= 0) {
      this.setState({ month: 0 });
    } else {
      this.setState({ month: this.state.month - 1 });
    }
  };

  incrementMonth = () => {
    if (this.state.month >= this.state.monthsNames.length - 1) {
      this.setState({ month: this.state.monthsNames.length - 1 });
    } else {
      this.setState({ month: this.state.month + 1 });
    }
  };

  disabledRightButton() {
    if(this.state.month >= this.state.monthsNames.length - 1){
      return 'disabled';
    }    
  }

  disabledLeftButton() {
    if(this.state.month <= 0){
      return 'disabled';
    }    
  }

  render() {
    const monthName = this.state.monthsNames[this.state.month];
    return (
      <div>
        <div className="ui three column grid container">
          <div className="row">
            <div className="column">
              <button
                onClick={this.decrementMonth}
                className="ui left labeled icon button ui left floated"
                disabled={this.disabledLeftButton()}
              >
                <i className="left arrow icon" />
                Prev
              </button>
            </div>
            <div className="column">
              <h1 className="ui huge">{monthName}</h1>
            </div>
            <div className="column">
              <button
                ref={this.rigthButton}
                onClick={this.incrementMonth}
                className="ui right labeled icon button ui right floated"
                disabled={this.disabledRightButton()}
              >
                <i className="right arrow icon" />
                Next
              </button>
            </div>
          </div>
        </div>
        <HotTable
          settings={{
            data: this.state.monthsValues[this.state.month],
            rowHeaders,
            licenseKey: 'non-commercial-and-evaluation',
            colHeaders: headersColumns,
            rowHeaderWidth: 300,
            afterChange: this.props.afterChange,
            readOnly: this.props.readOnlyState,
            style: 'border:1px solid red',
            className: 'handsonTable',
          }}
        />
        <button 
        style={{margin:'0px auto',display:'block'}}
        className='ui button primary '
        onClick={()=>this.props.fetchMonth(this.state.monthsNames[this.state.month])} >
          Send</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  data: state.tableData,
  readOnlyState: state.tableData.readOnly,
});
export default connect(
  mapStateToProps,
  {
    afterChange,
    readOnly,
    fetchMonth
  }
)(Table);
