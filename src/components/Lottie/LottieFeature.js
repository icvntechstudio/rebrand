import React from "react"
import Lottie from "react-lottie"


export default function LottieFeature({ lotti, width, height }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <div>
      <Lottie options={defaultOptions} width={width} height={height} />
    </div>
  )
}