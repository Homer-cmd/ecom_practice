import './shopCategory.scss';
import { ShopContext } from '../../context/ShopContext';
import {useContext}  from 'react';
import dropdown_icon from '../../assets/dropdown_icon.png';
import Items from '../../components/items/Items';

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);

    return ( 
        <div className="shopCategory">
            <img src={props.banner} alt="" />
            <div className="shopCategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 Products
                </p>
                <div className="shopCategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopCategory-products">
                {all_product.map((item, i) => {
                    if (props.category===item.category) {
                        return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    }
                    else {
                        return null;
                    }
                })}
            </div>
        </div>
     );
}
 
export default ShopCategory;