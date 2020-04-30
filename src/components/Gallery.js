import React, {Component} from 'react';

export class Gallery extends Component {
  constructor (props) {
    super(props);
    this.state = {
      onComparisonProduct: this.props.products[0],
    }
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.products[0] !== this.state.onComparisonProduct) {
      this.setState({ onComparisonProduct: nextProps.products[0] });
    }
  }

  render() {
    return (
      <div className="gallery">
        {this.state.onComparisonProduct.productName}
        <div className="products-show">
          <div className="card card-1">
            <a href={this.state.onComparisonProduct.productLink}>
              <img src={this.state.onComparisonProduct.productImage} alt="" />
            </a>
            <a href={this.state.onComparisonProduct.productLink}>
              <p>{this.state.onComparisonProduct.productName}</p>
            </a>
            <p>{this.state.onComparisonProduct.productPrice}</p>
          </div>
          <div className="card card-2">
          </div>
        </div>

        <a id="more-products-link">Show More ..</a>
        
        <div className="more-products">
          {this.props.products.map((p, i) => 
            <div key={i} className="more-products-card" onClick={() => {this.setState({onComparisonProduct: p})}}>
              <img src={p.productImage} alt="" />
              <p>{p.productName}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}