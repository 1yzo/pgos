import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { startSetPage } from '../actions/currentPage';
import OrderCard from './OrderCard';
import '../styles/order-card.css';
import ViewOrderModal from './ViewOrderModal';


class OrderPage extends React.Component {    
    state = {
        selectedOrder: '',
    }
    
    selectOrder = (selectedOrder) => {
        this.setState(() => ({ selectedOrder }));
    }
    
    loadOrders(pageIndex) {
        this.props.dispatch(startSetPage(pageIndex));   
    }

    closeModal = () => {
        this.setState(() => ({ selectedOrder : '' }));
    }

    componentDidMount() {
        const { pageIndex } = this.props.match.params;
        this.loadOrders(pageIndex);
    }

    componentDidUpdate(prevProps) {
        const { pageIndex } = this.props.match.params;
        if (pageIndex !== prevProps.match.params.pageIndex) {
            prevProps.dispatch(startSetPage(pageIndex)); 
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
                {orders.map((order, i) => (
                    <OrderCard key={order._id} selectOrder={this.selectOrder} index={i} order={order} />)
                )}
                <ViewOrderModal
                    showModal={!!this.state.selectedOrder}
                    closeModal={this.closeModal}
                    order={this.state.selectedOrder}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    orders: state.currentPage.orders,
});

export default withRouter(connect(mapStateToProps)(OrderPage));