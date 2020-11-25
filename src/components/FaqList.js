import data from '../data.json'
import Question from './Question';

const FaqList = () => {
    return ( 
        <div>
            {data.map((dataItem, index) => 
                <Question data={dataItem} key={dataItem.index}/>
                )}
        </div>
     );
}
 
export default FaqList;