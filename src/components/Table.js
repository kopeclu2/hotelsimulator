import React from "react";
import { HotTable } from "@handsontable/react";
import './style.css';
import headersColumns,{rowHeaders} from '../settings/tableSettings';
import {connect} from 'react-redux';
import Handsontable from "handsontable";
import {afterChangeTable2} from '../actions/afterChange';
import {readOnly} from '../actions/readOnly';
import CounterDownLine from './CounterDownLine';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.handsontableData = Handsontable.helper.createSpreadsheetData(6, headersColumns.length);
  }
  
  render() {
    console.log(this.props.readOnlyState)
    return (
     
      <div>
        
        <div onClick={this.props.readOnly}>read only </div>
        <HotTable       
          settings={{
            data: this.props.data.table2,
            rowHeaders: rowHeaders,
            licenseKey: 'non-commercial-and-evaluation',
            colHeaders: headersColumns,
            rowHeaderWidth:300,
            afterChange: this.props.afterChangeTable2,
            readOnly:this.props.readOnlyState
        }}
        />
      </div>
    );
  }
}
const mapStateToProps=(state)=>({
  data:state.tableData,
  readOnlyState:state.tableData.readOnly
})
export default connect(mapStateToProps,{
  afterChangeTable2,readOnly
})(Table);
