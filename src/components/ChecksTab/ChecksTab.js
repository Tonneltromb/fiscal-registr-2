import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Table from '../../js/modules/table'
import Pagination from './Pagination/Pagination'
import '~css/checks-tab/index.scss'
import PageSize from "./PageSize/PageSize";

class ChecksTab extends Component {
    static propTypes = {
        precheckGetList: PropTypes.func.isRequired,
        prechecks: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.precheckGetList(10);
    }

    render() {
        let renderedComponent = <Spinner/>;
        if (this.props.prechecks.loadingPrechecks !== true) {
            renderedComponent = <Table
                prechecks={this.props.prechecks.prechecks}
                TablePopup
                allPrechecksCount={this.props.prechecks.allPrechecksCount}/>
        }
        return (
            <React.Fragment>
                <Pagination
                    changeActivePage={this.changeActivePage}
                    changePageSize={this.changePageSize}
                    pageSize={this.state.pageSize}/>
                <PageSize changePageSize={this.changePageSize}/>
                {renderedComponent}
            </React.Fragment>
        );
    }
}

// const mapStateToProps = ({ prechecks }) => ({ prechecks });
// const mapDispatchToProps = dispatch => bindActionCreators({ ...precheckActions }, dispatch);

// export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(ChecksTab))

export default ChecksTab;