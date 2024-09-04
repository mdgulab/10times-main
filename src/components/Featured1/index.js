import './index.css'

const FeaturedItem=(props)=>{
    const {details}=props
    const {date1,name1,events1}= details
    return(
      <li className='featured-item'>
         <p className='featured'>{date1}</p>
         <p className='featured'>{name1}</p>
         <p className='event'>{events1}</p> 
      </li>
    )
}
export default FeaturedItem