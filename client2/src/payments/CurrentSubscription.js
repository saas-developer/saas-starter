import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class CurrentSubscription extends React.Component {
    render() {
        const {
            subscription
        } = this.props;
        if (!subscription) {
            return (
                <Card className="w-100">
                    <Card.Body>
                        <h4>Subscription details</h4>
                        <div>You do not have any subscriptions yet.</div>
                    </Card.Body>
                </Card>
            )
        }

        const nickname = subscription.plan.nickname;
        const amount = subscription.plan.amount;
        const interval = subscription.plan.interval;
        const status = subscription.status;
        

        return (
            <Card className="w-100">
                <Card.Body>
                    <h4>Subscription details</h4>
                    <div>
                        <div>Status</div>
                        <p>{status}</p>
                        <div>You are subscribed to</div>
                        <p>{nickname}</p>
                        <div>We will charge you</div>
                        <p>{amount}</p>
                        <div>Interval</div>
                        <p>{interval}</p>
                    </div>
                    <Button
                        style={{
                            maxWidth: 300
                        }}
                        onClick={this.props.deleteSubscription}
                        variant="danger"
                    >Delete Subscription
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}
