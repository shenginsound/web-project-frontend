import background from "./img/homebg.jpg"; 

function Home() {
    return (
      <div style={{ 
      backgroundImage: `url(${background})`,         
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
      ,position: 'relative'
      } } >
        <h1 style={{ top: "50%", left: "50%", position: "absolute", zIndex: 1, color: "white" }}>
          Explore endless movie info and ratings.</h1>
      </div>
    );
  }
  
  export default Home;