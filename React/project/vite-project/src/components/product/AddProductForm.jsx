import Styles from './AddProductForm.module.css'
import CustomWrapper from '../layouts/CustomWrapper';
import { useRef } from 'react';
function AddProductForm(props) {
    const product_name_ref = useRef();
    const image_ref = useRef();
    const price_ref = useRef();
    const Description_ref = useRef();
    function submitHandler(event) {
        event.preventDefault();
        const product_name = product_name_ref.current.value;
        const image = image_ref.current.value;
        const price = price_ref.current.value;
        const Description = Description_ref.current.value;
        const product = { product_name, image, price, Description };
        props.addProductHandle(product)
    }
    return <CustomWrapper>
        <form className={Styles.form} onSubmit={submitHandler}>
            <div className={Styles.name}>
                <label htmlFor='product_name'>Product name</label>
                <input type="text" placeholder="" id="product_name" ref={product_name_ref} />
            </div>
            <div className={Styles.img}>
                <label htmlFor='image'>image</label>
                <input type="text" placeholder="" id="image" ref={image_ref} />
            </div>
            <div className={Styles.Price}>
                <label htmlFor='price'>Price</label>
                <input type="text" placeholder="" id="price" ref={price_ref} />
            </div>
            <div className={Styles.Description}>
                <label htmlFor='description'>Description</label>
                <textarea rows="5" id="description" ref={Description_ref} />
            </div>
            <div className={Styles.btn}>
                <button>Add</button>
            </div>
        </form>
    </CustomWrapper>
}
export default AddProductForm;