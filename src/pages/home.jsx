
export const getStaticProps = async () => {
    const bekdanKevotganMalumot = await fetch("https://fakestoreapi.com/products")
    const data = await bekdanKevotganMalumot.json()

    return{
        props: {products:data}
    }
}

const Home = ({products}) => {
  return (
    <>
      <div className="parent">
        {products?.map((el) => {
            return(
                <div className="card" key={el.id}>
                    <img src={el.image}  alt={el.title} />
                    <h3>{el.title}</h3>
                    <p>{el.price}</p>
                    <button>Buy</button>                
                </div>
            )
        })}
        </div>  
    </>
  )
}

export default  Home