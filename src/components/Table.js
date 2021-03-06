/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { HotTable } from '@handsontable/react';
import './style.css';
import { connect } from 'react-redux';
import Handsontable from 'handsontable';
import headersColumns, { rowHeaders } from '../settings/tableSettings';
import { afterChangeTable2 } from '../actions/afterChange';
import { readOnly } from '../actions/readOnly';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.handsontableData = Handsontable.helper.createSpreadsheetData(
      6,
      headersColumns.length
    );
  }

  render() {
    console.log(this.props.readOnlyState);
    return (
      <div>
    
        <HotTable
          settings={{
            data: this.props.data.table2,
            rowHeaders,
            licenseKey: 'non-commercial-and-evaluation',
            colHeaders: headersColumns,
            rowHeaderWidth: 300,
            afterChange: this.props.afterChangeTable2,
            readOnly: this.props.readOnlyState,
            className: 'handsonTable',
          }}
        />
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
    afterChangeTable2,
    readOnly,
  }
)(Table);
