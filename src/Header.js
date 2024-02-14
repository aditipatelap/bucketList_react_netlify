import React from 'react'

const Header = ({title}) => {
  // const headerStyle = {
  //   backgroundColor: 'papayawhip',
  //   color: 'darkgreen'
  // };

  return (
    // inline styling
    // <header  style={{
    //   backgroundColor: 'papayawhip',
    //   color: 'darkblue'
    // }}>
    
    // inline styling using variable
    // <header  style={headerStyle}>

    <header>
      {/* <h1>Groceries List</h1> */}
      <h1>{title}</h1>
      {/* we can use props.title as well */}
    </header>
  )
}

// default props: when property is not given then it will automatic use default values
Header.defaultProps = {
  title: "Default Title"
}
export default Header
