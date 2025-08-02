import React from "react"

export default function Embed({ src }) {
  React.useEffect(() => {
    window.iframely?.load()
  }, [])

  return (
    <div className="iframely-embed">
      <div className="iframely-responsive">
        <a data-iframely-url="" href={src}></a>
      </div>
    </div>
  )
}
