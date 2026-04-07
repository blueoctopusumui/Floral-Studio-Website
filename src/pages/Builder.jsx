import PropTypes from "prop-types";
import FlowerList from "../components/FlowerList";
import BouquetPreview from "../components/BouquetPreview";

function Builder({bouquet, addFlower,clearBouquet}){
    return(
        <div>
            <h1 className="page-title">Build and Customize Your Bouquet</h1>
            <p className="page-subtitle">Select your flowers to custom arrange and present it to your loved ones :)</p>
            <div className="builder-grid">
                <FlowerList onAdd={addFlower} />
                <BouquetPreview
                bouquet={bouquet}
                clearBouquet={clearBouquet}
                />

            </div>
        </div>
    );
}

Builder.propTypes={
    bouquet: PropTypes.array.isRequired,
    addFlower: PropTypes.func.isRequired,
    clearBouquet: PropTypes.func.isRequired,
};

export default Builder;