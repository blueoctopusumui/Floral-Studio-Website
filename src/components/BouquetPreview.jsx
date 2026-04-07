import {Component} from "react";
import PropTypes from "prop-types";
class BouquetPreview extends Component{
    componentDidMount(){
        console.log("BouquetPreview mounted with",this.props.bouquet.length,"flowers");
    }

    componentWillUnmount(){
        console.log("BouquetPreview unmounted");
        document.title = "Hawaaian Floral Studio";
    }

    render()
    {
        const bouquet=this.props.bouquet;
        const clearBouquet=this.props.clearBouquet;
        let total=0;
        for(let i=0;i<bouquet.length;i++){
            total+=bouquet[i].price;
        }

        let content;

        if(bouquet.length===0)
        {
            content=<p>No flowers selected :(</p>
        }

        else{
            content= (
            <div>
                {bouquet.map((flower,i)=>(
                    <div key={i} className="bouquet-item">
                        <img src={flower.image} alt={flower.name} width="100" />
                        <div className="bouquet-item-info"><p>{flower.name}</p></div>
                        <div className="bouquet-item-price">{flower.price}</div>
            </div>
                ))}
                </div>
            );
        }
        return(
        <div className="bouquet-preview-container">
        <h2> Your Bouquet
        <span className="bouquet-count">{bouquet.length}</span>
        </h2>
        {content}
        <div className="bouquet-controls">
            <div className="total-summary">
                <span>Total:</span>
                <span>{total}</span>
            </div>
            <button className="btn btn-secondary" onClick={clearBouquet}>Clear Bouquet</button>
        </div>
        </div>
    );
    }
}

BouquetPreview.propTypes={
    bouquet: PropTypes.array.isRequired,
    clearBouquet: PropTypes.func,
};

export default BouquetPreview;