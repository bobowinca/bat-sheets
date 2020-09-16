import React from 'react'
import PropTypes from 'prop-types'
import Row from './Row'

export default class DataTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
    }
  }

  handleChangedCell = ({ x, y }, value) => {
    const modifiedData = Object.assign({}, this.state.data)
    if (!modifiedData[y]) modifiedData[y] = {}
    modifiedData[y][x] = value
    this.setState({ data: modifiedData })
  
    if (window && window.localStorage) {
      window.localStorage.setItem(this.tableIdentifier,
        JSON.stringify(modifiedData))
    }
  }

  updateCells = () => {
    this.forceUpdate()
  }

  render() {
    const rows = [];

    for (let y = 0; y < this.props.y + 1; y += 1) {
      const rowData = this.state.data[y] || {}
      rows.push(
        <Row
          handleChangedCell={this.handleChangedCell}
          updateCells={this.updateCells}
          key={y}
          y={y}
          x={this.props.x + 1}
          rowData={rowData}
        />,
      )
    }
    return (
      <div>
        {rows}
      </div>
    )
  }
}

DataTable.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
}