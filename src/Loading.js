import React from 'react'
import TopBar from './TopBar'

const Loading = () => {
  return (
    <section>
        <TopBar />
        <div className="loadingContainer">
            <div className="loading"></div>
            <div className="loading secondLoading"></div>
            <div className="loading thirdLoading"></div>
        </div>
    </section>
  )
}

export default Loading