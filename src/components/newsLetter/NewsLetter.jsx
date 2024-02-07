import './newsLetter.scss';

const NewsLetter = () => {
    return ( 
        <div className="newsLetter">
            <h1>Get Exclusive Offers!</h1>
            <p>Subscribe and be stay updated!</p>
            <div>
                <input type="email" placeholder='Email'/>
                <button>Subscribe</button>
            </div>
        </div>
     );
}
 
export default NewsLetter;