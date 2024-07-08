
export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className='row'>
        <div className="side">
          <h2>Deals</h2>
          <img className="fakeimg" src="/imgs/deals.avif" style={{height:"200px"}}/>
          {/* Database call to upload an image*/}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. </p>
            <img className="fakeimgOne" src="/imgs/comb.avif" />
            <p>50% off</p>
            <p>Prime Day Early Access deal</p>
          {/* Database call to upload an image*/}
        </div>

      <div className="main">
        <img className="fakeimgOne" src="/imgs/phoneAds.avif" />
        {/* Database call to upload an image*/}
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est 
            laborum consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco.</p>
          <br/>
        {/* Database call to upload an image*/}
        </div>        
      </div>
    </div>
  );
}
