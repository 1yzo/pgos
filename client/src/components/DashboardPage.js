import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import OrderPage from './OrderPage';
import Header from './Header'

class DashboardPage extends React.Component {
    componentDidMount() {
        // this.props.history.push('/orders/0');
    }
    
    render() {
        const { currentPageIndex } = this.props;
        return (
            <div>
                <Header />
                <Route path="/orders/:pageIndex" component={OrderPage} />
                <Link to={`/orders/${Number(currentPageIndex) - 1}`}>Prev</Link>
                <Link to={`/orders/${Number(currentPageIndex) + 1}`}>Next</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentPageIndex: state.currentPage.index
});

export default connect(mapStateToProps)(DashboardPage);