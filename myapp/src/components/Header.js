function Header({scrollHandler}) {
    return (
      <div className="header">
        <button onClick={scrollHandler}>Scroll to footer!</button>
      </div>
    );
  }
  
  export default Header;