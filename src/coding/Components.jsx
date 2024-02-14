import React from 'react'
import LC from './leetcode/Leetcode.jsx'
import CF from './cf/Codeforces.jsx'
const Components = props => {
    return (
      <React.Fragment>
        <LC/>
        <CF/>  
      </React.Fragment>
    )
  }
  export default Components