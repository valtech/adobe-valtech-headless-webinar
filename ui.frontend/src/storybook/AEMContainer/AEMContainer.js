import React from "react";

// container which surrounds each story with AEM's responsive grid
export default class AEMContainer extends React.Component {
    render() {
        const classNames="aem-GridColumn aem-GridColumn--default--" + this.props.columnCount
    return (
      <div className="aem-container aem-Grid aem-Grid--12 aem-Grid--default--12">
        <div className={classNames}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
