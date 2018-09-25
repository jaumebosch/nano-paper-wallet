import React, {Component} from 'react';

class BlockChainLinker extends Component {
    render() {
        if (!this.props.publicKey) {
            return null;
        }
        return (
            <div>
                <a href={'https://www.nanode.co/account/' + this.props.publicKey} target="_blank">
                    Check this account balance on the blockchain!
                </a>
                <br/>
                <label>{ this.props.publicKey }</label>
            </div>
        );
    }
}

export default BlockChainLinker;