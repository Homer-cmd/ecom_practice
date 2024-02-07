import './shopCategory.scss';
import { ShopContext } from '../../context/ShopContext';
import {useContext}  from 'react';

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);

    return ( 
        <div className="shopCategory">
            <img src={props.banner} alt="" />
        </div>
     );
}
 
export default ShopCategory;