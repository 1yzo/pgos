import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { startSetPage } from '../actions/currentPage';
import OrderCard from './OrderCard';
import '../styles/order-card.css';


class OrderPage extends React.Component {    
    loadOrders(pageIndex) {
        this.props.dispatch(startSetPage(pageIndex)); 
    }

    componentDidMount() {
        const { pageIndex } = this.props.match.params;
        this.loadOrders(pageIndex);
    }

    componentWillReceiveProps(nextProps) {
        const { pageIndex } = nextProps.match.params;
        if (pageIndex !== this.props.match.params.pageIndex) {
            this.props.dispatch(startSetPage(pageIndex)); 
        }
    }
    
    render() {
        const { orders } = this.props;
        return (
            <div className="orders-container">
            <div className="order-card order-card--header">
                <div>Coffee</div>
                <div>Method</div>
                <div>Number of Cases</div>
                <div>Packets Per Case</div>
                <div>Ship Date</div>
                <div>Order</div>
                <div>View</div>
            </div>
                {orders.map((order, i) => <OrderCard key={order._id} index={i} {...order} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    orders: state.currentPage.orders
});

export default withRouter(connect(mapStateToProps)(OrderPage));