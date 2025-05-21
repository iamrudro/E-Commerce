import React from 'react'
import '../componentStyles/NoProducts.css';

function NoProduct({ keyword }) {
    return (
        <div className="no-products-content">
            <div className="no-products-icon">⚠️</div>
                <h3 className="no-products-title">No Products Found</h3>
                <p className="no-products-message">
                    {keyword ? `We couldn't find any product matching "${keyword}". Try using different keywwords or browse our complete catalolg` : 'No Products are available. Please check back later'}
                </p>            
        </div>
    )
}

export default NoProduct
