import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { startSetPage } from '../actions/currentPage';

class OrderPage extends React.Component {    


    componentWillReceiveProps(nextProps) {
        const { pageIndex } = nextProps.match.params;
        if (pageIndex !== this.props.match.params.pageIndex)
        this.props.dispatch(startSetPage(pageIndex)); 
    }
    
    render() {
        const { orders } = this.props;
        return (
            <div className="orders-container">
                {orders.map((order) => (
                    <div key={order._id}>
                        <div>{order.name}</div>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    orders: state.currentPage.orders
});

export default withRouter(connect(mapStateToProps)(OrderPage));